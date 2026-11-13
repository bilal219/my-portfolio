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
  metadataBase: new URL("https://muhammad-bilal-yousaf.vercel.app"),
  title: "Muhammad Bilal Yousaf | Full Stack Software Engineer",
  // Kept under ~155 characters so search results show it in full.
  description:
    "Full Stack Software Engineer in Lahore with 4+ years building SaaS apps in React, Next.js, Node.js, Angular and ASP.NET Core. AI search, FHE, Stripe.",
  keywords: ["Muhammad Bilal Yousaf","Full Stack Software Engineer","Software Engineer Lahore","React Developer","Next.js Developer","Node.js Developer","Angular Developer","ASP.NET Core Developer","TypeScript","C#","GraphQL","RESTful APIs","NestJS","MongoDB","PostgreSQL","SQL Server","Stripe Integration","AI-Powered Search","Fully Homomorphic Encryption","AWS","Docker","SaaS Applications"].join(", "),
  authors: [
    {
      name: "Muhammad Bilal Yousaf",
      url: "https://muhammad-bilal-yousaf.vercel.app",
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
    title: "Muhammad Bilal Yousaf | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with 4+ years of experience building production SaaS applications with React, Next.js, Node.js, and GraphQL, and more recently Angular and ASP.NET Core. Strongest in AI-powered search, secure file storage, and Stripe billing.",
    url: "https://muhammad-bilal-yousaf.vercel.app",
    siteName: "Muhammad Bilal Yousaf Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Bilal Yousaf - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal Yousaf | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with 4+ years of experience building production SaaS applications with React, Next.js, Node.js, and GraphQL, and more recently Angular and ASP.NET Core. Strongest in AI-powered search, secure file storage, and Stripe billing.",
    images: ["/og-image.png"],
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
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dark is rendered on the server so every visit opens in dark mode.
    // ThemeToggle can switch to light for the current visit only.
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${dreams.variable} ${helvetica.variable} bg-slate-50 dark:bg-slate-900 antialiased selection:bg-portfolio selection:text-slate-900 relative overflow-x-hidden transition-colors duration-300 text-content`}
      >
        <AnimatedSphereBackground />
        <ScrollToTop />
        {/* Theme toggle: scrolls away on mobile so it never covers content, fixed on desktop */}
        <div className="absolute right-5 top-5 z-30 lg:fixed lg:right-6 lg:top-6">
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
