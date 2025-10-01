import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

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
      subject: `Message from Portfolio - ${name}`,
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
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        This email was sent from your portfolio contact form.<br>
        Reply to this email to respond directly to ${name}.
      </div>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log successful submission
    console.log("Contact form submission sent:", {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

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