"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation, socialLinks } from "@/constants/data";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

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


      <header className="pt-20 pb-8 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 relative z-20">
        <div className="flex flex-col items-start justify-center gap-8 lg:gap-6">
          <h1 className="font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-sm text-[8px] font-dreams leading-[4.5]">
            <Link href="/">
              <span className="text-portfolio-gradient">MUHAMMAD </span>BILAL YOUSAF
            </Link>
          </h1>
          <h2 className="font-medium uppercase tracking-tight text-slate-800 dark:text-slate-200 text-[6px] sm:text-[8px] font-dreams leading-[4.5]">
            <span className="text-portfolio-gradient">Full Stack</span> Developer
          </h2>
          <p className=" leading-normal font-helvetica text-slate-600 dark:text-slate-400">
            Transforming ideas into high-performance web solutions. 3+ years crafting enterprise-grade applications with cutting-edge technologies.
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
                className="block icon-portfolio-gradient"
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${link.name} (opens in a new tab)`}
              >
                <span className="sr-only">{link.name}</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {link.icon === "github" && (
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  )}
                  {link.icon === "linkedin" && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {link.icon === "threads" && (
                    <path d="M19.056 11.508c-0.3924-0.29548-0.8142-0.55010-1.2585-0.75987-0.4523-3.37988-2.7138-4.44506-3.7428-4.75715-2.2367-0.67846-4.8069 0.13456-5.9761 1.88839-0.3865 0.5797-0.0005 1.3604 0.6948 1.4053 0.3227 0.02081 0.6320-0.13211 0.8114-0.40117 0.7203-1.08101 2.4877-1.60117 3.9453-1.1613 1.1251 0.33923 1.9020 1.1647 2.2785 2.37461-0.5699-0.10850-1.1488-0.16264-1.7289-0.1617-1.5740 0-3.0474 0.40595-4.1465 1.14208-1.2936 0.87409-2.0060 2.16655-2.0060 3.63655 0 2.32712 1.7934 4.01649 4.2641 4.01649 1.4679-0.01000 2.8692-0.61416 3.8842-1.67468 0.7282-0.75761 1.5831-2.07609 1.7651-4.19515 0.0430 0.0294 0.0837 0.05993 0.1244 0.09046 1.1432 0.86391 1.7222 2.06592 1.7222 3.57211 0 2.18917-2.2999 5.42768-7.2369 5.42768-3.0225 0-5.1427-0.97811-6.4838-2.98975C4.8667 17.31461 4.3092 14.9694 4.3092 12s0.5575-5.31461 1.6577-6.96101c1.3411-2.01164 3.4613-2.98975 6.4838-2.98975 3.7236 0 6.1062 1.49826 7.2969 4.58187 0.2429 0.65262 1.1013 0.79753 1.5450 0.26083 0.2106-0.25471 0.2655-0.60398 0.1433-0.91103C20.9907 2.22564 16.8834 0.24 12.4508 0.24c-3.6185 0-6.3108 1.27664-7.9900 3.79486C3.1592 5.9877 2.5000 8.6665 2.5000 12s0.6592 6.0123 1.9608 7.9651c1.6792 2.51822 4.3715 3.79486 7.9900 3.79486 3.4002 0 5.5295-1.29813 6.7168-2.38593 1.4587-1.33657 2.3294-3.15484 2.3294-4.85099 0-2.07383-0.8436-3.80843-2.4402-5.01499Zm-4.2845 4.29693c-0.6735 0.70652-1.6043 1.11034-2.5804 1.11946-1.2224 0-2.4549-0.67846-2.4549-2.20726 0-1.42816 1.3569-2.96375 4.3433-2.96375 0.6725-0.00182 1.3420 0.09028 1.9890 0.27365 0 1.59212-0.4523 2.89703-1.2970 3.77449Z" stroke-width="1"/>
                  )}
                  {link.icon === "instagram" && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  )}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex justify-center">
        <div className="mx-4 mb-4 w-full max-w-[450px]">
          <div className="backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-700/30 rounded-2xl shadow-lg">
            <div className="flex items-center justify-around px-4 py-3">
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
