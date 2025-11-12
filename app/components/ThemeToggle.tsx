"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initial === "dark");
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
"use client";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function initialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = (localStorage.getItem("theme") as Theme | null) || null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return saved ?? (prefersDark ? "dark" : "light");
}

function apply(theme: Theme) {
  const html = document.documentElement;
  const body = document.body;
  const dark = theme === "dark";
  html.classList.toggle("dark", dark);
  body.classList.toggle("dark", dark);
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    apply(next);
  };

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="p-2 rounded-md border border-[var(--outline)] bg-[var(--surface)] text-[var(--text)] hover:bg-[#f1f3f4] dark:hover:bg-[#2a2a2a] transition"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
