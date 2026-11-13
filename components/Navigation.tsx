"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation, socialLinks } from "@/constants/data";

const BRAND_ICONS = {
  github:
    "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(
    navigation[0].href.slice(1)
  );

  // Highlight the last section whose top has passed the upper third of the
  // viewport. Pinning the first and last sections at the page edges keeps a
  // short section (About at the top, Contact at the bottom) from being skipped
  // on tall screens.
  useEffect(() => {
    const ids = navigation.map((item) => item.href.slice(1));
    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveSection(ids[ids.length - 1]);
        return;
      }

      if (window.scrollY < 80) {
        setActiveSection(ids[0]);
        return;
      }

      const threshold = Math.min(window.innerHeight * 0.33, 320);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0077b6" />
            <stop offset="100%" stopColor="#005577" />
          </linearGradient>
          <linearGradient id="portfolioGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#0096c7" />
          </linearGradient>
        </defs>
      </svg>


      <header className="pt-10 pb-4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-center lg:py-16 relative z-20">
        <div className="flex flex-col items-start justify-center gap-8 lg:gap-6">
          <h1 className="font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-sm text-[8px] font-dreams leading-[4.5]">
            <Link href="/">
              <span className="text-portfolio-gradient">MUHAMMAD </span>BILAL YOUSAF
            </Link>
          </h1>
          <h2 className="font-medium uppercase tracking-tight text-slate-800 dark:text-slate-200 text-[6px] sm:text-[8px] font-dreams leading-[4.5]">
            <span className="text-portfolio-gradient">Full Stack</span> Software Engineer
          </h2>
          <p className=" leading-normal font-helvetica text-slate-600 dark:text-slate-400">
            I build production SaaS apps end to end, from the database to the UI. 4+ years with React, Next.js, Node.js, and now Angular and .NET.
          </p>
          <div className="flex flex-nowrap items-center gap-3 sm:gap-4">
            <a
              href="/Muhammad-Bilal-Yousaf-Resume.pdf"
              download="Muhammad-Bilal-Yousaf-Resume.pdf"
              className="btn-gradient-shimmer group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl! px-4! py-2.5! text-[0.7rem]! sm:px-5! sm:text-xs!"
              aria-label="Download résumé (PDF)"
            >
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
              </svg>
              Download Résumé
            </a>
            <ul className="flex items-center gap-1" aria-label="Social profiles">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${link.name} (opens in a new tab)`}
                    title={link.name}
                    className="icon-portfolio-gradient flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio motion-reduce:transition-none"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={BRAND_ICONS[link.icon as keyof typeof BRAND_ICONS]} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-2 w-max">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`group flex items-center py-2.5 ${
                      activeSection === item.href.slice(1)
                        ? "text-slate-700 dark:text-slate-200"
                        : "text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200"
                    }`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all ${
                        activeSection === item.href.slice(1)
                          ? "w-16 bg-slate-700 dark:bg-slate-200"
                          : "w-8 bg-slate-400 dark:bg-slate-600 group-hover:w-16 group-hover:bg-slate-700 dark:group-hover:bg-slate-200"
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                        activeSection === item.href.slice(1)
                          ? "text-slate-700 dark:text-slate-200"
                          : "text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex justify-center" aria-label="Sections">
        <div className="mx-4 mb-4 w-full max-w-[450px]">
          <div className="backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-700/30 rounded-2xl shadow-lg">
            <div className="flex items-center justify-around px-2 py-2">
              {navigation.map((item) => {
                const getIcon = (name: string) => {
                  switch (name) {
                    case "About":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      );
                    case "Skills":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      );
                    case "Education":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      );
                    case "Experience":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                          />
                        </svg>
                      );
                    case "Projects":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      );
                    case "Contact":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      );
                    default:
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      );
                  }
                };

                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    aria-label={`Go to ${item.name}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex min-w-11 flex-col items-center justify-center gap-1 rounded-xl px-1.5 py-2 transition-all duration-200 ${
                      isActive
                        ? "text-portfolio bg-portfolio/10"
                        : "text-slate-500 dark:text-slate-400 hover:text-portfolio hover:bg-portfolio/5"
                    }`}
                  >
                    <span aria-hidden="true">{getIcon(item.name)}</span>
                    <span className="text-[10px] font-medium leading-none" aria-hidden="true">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
