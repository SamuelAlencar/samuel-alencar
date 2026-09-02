"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Alternar tema"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line-color)] bg-white/80 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[var(--accent)] active:scale-95 dark:bg-[#13272a]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
