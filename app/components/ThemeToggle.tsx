"use client";
import { useLayoutEffect, useState } from "react";
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
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const initialValue = initialTheme();
    apply(initialValue);
    setTheme(initialValue);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    apply(next);
    setTheme(next);
  };

  if (!mounted) return null; // Prevent hydration mismatch

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
