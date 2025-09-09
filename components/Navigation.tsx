"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation, socialLinks } from "@/constants/data";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDarkMode = stored === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    {/* Desktop Theme Toggle - Fixed Top Right */}
    <div className="fixed top-6 right-6 z-30 hidden lg:block">
      <button
        onClick={toggleTheme}
        className="group relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full p-1 transition-all duration-300 border border-slate-300 dark:border-slate-600"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Toggle circle */}
        <div
          className={`w-5 h-5 bg-white dark:bg-slate-200 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
            isDark ? "translate-x-7" : "translate-x-0"
          }`}
        >
          {/* Sun icon for light mode */}
          <svg
            className={`w-3 h-3 text-amber-500 transition-all duration-300 ${
              isDark ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          
          {/* Moon icon for dark mode */}
          <svg
            className={`absolute w-3 h-3 text-slate-600 transition-all duration-300 ${
              isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </button>
    </div>
    
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 relative z-20">
      <div className="flex flex-col items-start justify-center gap-6 ">
        <h1 className="font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-sm text-[8px] font-dreams leading-[4.5]">
          <Link href="/">
            <span className="text-portfolio">MUHAMMAD </span>BILAL YOUSAF
          </Link>
        </h1>
        <h2 className="font-medium uppercase tracking-tight text-slate-800 dark:text-slate-200 text-[6px] sm:text-[8px] font-dreams leading-[4.5]">
          <span className="text-portfolio">Full Stack</span> Developer
        </h2>
        <p className=" leading-normal font-helvetica text-slate-600 dark:text-slate-400">
          I build pixel-perfect, engaging, and accessible digital experiences.
          Currently focused on developing scalable SaaS applications with modern
          web technologies.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-8 w-max">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`group flex items-center py-3 ${
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
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.name} className="mr-5 text-xs shrink-0">
            <a
              className="block text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.name} (opens in a new tab)`}
            >
              <span className="sr-only">{link.name}</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {link.icon === "github" && (
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                )}
                {link.icon === "linkedin" && (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                )}
                {link.icon === "twitter" && (
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                )}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </header>
    
    {/* Mobile Bottom Navigation */}
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="mx-4 mb-4">
        <div className="backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-700/30 rounded-2xl shadow-lg">
          <div className="flex items-center justify-around px-4 py-3">
            {navigation.map((item) => {
              const getIcon = (name: string) => {
                switch (name) {
                  case 'About':
                    return (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    );
                  case 'Education':
                    return (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                      </svg>
                    );
                  case 'Experience':
                    return (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V6" />
                      </svg>
                    );
                  case 'Projects':
                    return (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    );
                  case 'Contact':
                    return (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    );
                  default:
                    return (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    );
                }
              };
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-portfolio bg-portfolio/10"
                      : "text-slate-500 dark:text-slate-400 hover:text-portfolio hover:bg-portfolio/5"
                  }`}
                >
                  {getIcon(item.name)}
                </button>
              );
            })}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-3 rounded-xl transition-all duration-200 text-slate-500 dark:text-slate-400 hover:text-portfolio hover:bg-portfolio/5"
            >
              {!mounted ? (
                <div className="w-5 h-5 bg-slate-400/50 rounded animate-pulse" />
              ) : isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
