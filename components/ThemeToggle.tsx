"use client";

import { useEffect, useState } from "react";

// The site always opens in dark mode (the `dark` class is rendered on <html>
// by the root layout). This toggle switches theme for the current visit only;
// nothing is persisted, so a reload or new visit starts dark again.
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Clear the preference older versions of the site saved, so it can't linger.
    try {
      localStorage.removeItem("theme");
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); ignore.
    }
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
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
          aria-hidden="true"
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
          aria-hidden="true"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </button>
  );
}
