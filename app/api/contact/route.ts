import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const LIMITS = { name: 100, email: 254, message: 5000 };

// Best-effort rate limit: 5 messages per IP per 10 minutes. On serverless this
// is per instance, which is still enough to stop a single bot from flooding
// the inbox.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, website } = body ?? {};

    // Honeypot: real visitors never see this field. Pretend it worked so bots
    // don't learn to skip it.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Validate required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json(
        { error: `Please keep your message under ${LIMITS.message} characters.` },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD ||
      !process.env.EMAIL_RECEIVER
    ) {
      console.error("Email configuration missing in environment variables");
      return NextResponse.json(
        { error: "Email service not configured. Please contact directly." },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content to receiver (you)
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || "Portfolio Contact"}" <${
        process.env.EMAIL_USER
      }>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `Message from Portfolio - ${name.replace(/[\r\n]+/g, " ").slice(0, 100)}`,
      text: `
You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from your portfolio contact form.
Reply to this email to respond directly to ${name}.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #4f46e5; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #4f46e5; margin-bottom: 5px; }
    .value { color: #1f2937; }
    .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From:</div>
        <div class="value">${safeName}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message-box">${safeMessage.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        This email was sent from your portfolio contact form.<br>
        Reply to this email to respond directly to ${safeName}.
      </div>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Contact form submission sent at", new Date().toISOString());

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to send your message";
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage = "Email configuration error. Please contact directly.";
      } else if (error.message.includes("ECONNREFUSED")) {
        errorMessage = "Unable to connect to email server. Please try again later.";
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}