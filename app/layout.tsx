import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AnimatedSphereBackground from "@/components/AnimatedSphereBackground";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeToggle from "@/components/ThemeToggle";

const dreams = localFont({
  src: [
    {
      path: "./fonts/DREAMS.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dreams",
  display: "swap",
  preload: true,
});

const helvetica = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Muhammad Bilal Yousaf | Full Stack Developer - 3+ Years Experience",
  description:
    "Full Stack Developer with 3+ years experience in Next.js, React, Node.js, MongoDB, and Stripe integration. Specialized in building scalable SaaS applications with modern web technologies. Currently at GTek Solutions.",
  keywords: [
    "Muhammad Bilal Yousaf",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Stripe Integration",
    "Web Developer Pakistan",
    "GTek Solutions",
    "SaaS Applications",
    "REST APIs",
    "GraphQL",
    "Tailwind CSS",
    "SASS",
    "Recoil State Management",
    "AWS Deployment",
    "Full Stack Engineer",
    "Software Engineer Pakistan",
    "Laravel Developer",
    "React Native",
    "Responsive Web Design",
    "Progressive Web Apps",
    "Frontend Engineer",
    "Backend Engineer",
  ].join(", "),
  authors: [
    {
      name: "Muhammad Bilal Yousaf",
      url: "https://bilal-yousaf-portfolio.vercel.app",
    },
  ],
  creator: "Muhammad Bilal Yousaf",
  publisher: "Muhammad Bilal Yousaf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Muhammad Bilal Yousaf | Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years experience building scalable SaaS applications. Expert in Next.js, React, Node.js, and modern web technologies.",
    url: "https://bilal-yousaf-portfolio.vercel.app",
    siteName: "Muhammad Bilal Yousaf Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Bilal Yousaf - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal Yousaf | Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years experience in Next.js, React, Node.js. Building scalable SaaS applications.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your actual verification code
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const stored = localStorage.getItem('theme');
              const isDark = stored ? stored === 'dark' : true;
              if (isDark) document.documentElement.classList.add('dark');
            })();
          `,
          }}
        />
      </head>
      <body
        className={`${dreams.variable} ${helvetica.variable} bg-slate-50 dark:bg-slate-900 antialiased selection:bg-portfolio selection:text-slate-900 relative overflow-x-hidden transition-colors duration-300 text-content`}
      >
        <AnimatedSphereBackground />
        <ScrollToTop />
        {/* Theme Toggle - Fixed Top Right */}
        <div className="fixed top-6 right-6 z-30">
          <ThemeToggle />
        </div>
        <div className="relative z-10 mx-auto min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-8 xl:gap-12 lg:max-w-7xl lg:mx-auto">
            {children}
          </div>
        </div>
        <div id="skip-to-content" className="sr-only">
          <a
            href="#content"
            className="absolute left-0 top-0 z-50 block bg-portfolio px-4 py-2 text-slate-900 focus:not-sr-only"
          >
            Skip to main content
          </a>
        </div>
      </body>
    </html>
  );
}
