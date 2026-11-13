"use client";

import { useState } from "react";
import { Input, Textarea, Button } from "./common";
import { personalInfo } from "@/constants/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // Honeypot: hidden from people, bots tend to fill it in.
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "", website: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactOptions = [
    {
      name: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      value: "Message me on WhatsApp",
      href: "https://wa.me/923092280331",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" aria-label="Contact me" className="relative">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-7 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 bg-white/85 backdrop-blur-md dark:bg-slate-950/80 lg:bg-transparent lg:backdrop-blur-none">
        <h2 className="text-[6px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only font-dreams leading-[4]">
          Contact
        </h2>
      </div>

      <div className="space-y-8">
        {/* Contact Options */}
        <div className="relative">
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-6 font-sans">
            Get in Touch
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactOptions.map((option) => (
              <a
                key={option.name}
                href={option.href}
                {...(option.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center p-4 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-portfolio/10 text-portfolio group-hover:bg-portfolio/20 transition-colors mr-4">
                  {option.icon}
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">
                    {option.name}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs font-helvetica">
                    {option.value}
                  </p>
                </div>
                <svg
                  className="ml-auto h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-portfolio transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative ">
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-6 font-sans">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            {submitStatus.type && (
              <div
                role={submitStatus.type === "error" ? "alert" : "status"}
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                }`}
              >
                <p className="text-sm font-helvetica">{submitStatus.message}</p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                type="text"
                id="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-slate-100 dark:bg-slate-800/50 border-slate-300/50 dark:border-slate-600/30 rounded-xl font-helvetica"
              />
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="bg-slate-100 dark:bg-slate-800/50 border-slate-300/50 dark:border-slate-600/30 rounded-xl font-helvetica"
              />
            </div>
            <Textarea
              id="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={5000}
              rows={4}
              placeholder="Your message..."
              className="bg-slate-100 dark:bg-slate-800/50 border-slate-300/50 dark:border-slate-600/30 rounded-xl font-helvetica resize-none"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              className="w-full sm:w-auto px-8"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
