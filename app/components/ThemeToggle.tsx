"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = (localStorage.getItem("theme") as Theme | null) || null;
  if (stored === "light" || stored === "dark") return stored;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  return media.matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  if (theme === "dark") {
    htmlEl.classList.add("dark");
    bodyEl.classList.add("dark");
  } else {
    htmlEl.classList.remove("dark");
    bodyEl.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = getPreferredTheme();
    setTheme(t);
    applyTheme(t);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      onClick={toggle}
      className="p-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:border-blue-400 transition"
    >
      {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
