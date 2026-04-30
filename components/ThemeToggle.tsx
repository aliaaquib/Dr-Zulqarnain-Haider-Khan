"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const shouldUseDark = stored === "dark";
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    setIsDark(next);
  };

  if (!mounted) {
    return (
      <div className="fixed right-5 top-5 z-50 h-10 w-10 rounded-full border border-black/10 bg-background/80 backdrop-blur dark:border-white/10" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-background/80 text-[0.7rem] tracking-[0.2em] text-black/65 transition duration-300 hover:border-black/25 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
    >
      {isDark ? "L" : "D"}
    </button>
  );
}
