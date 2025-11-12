"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function resolveInitial(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = (localStorage.getItem("theme") as Theme | null);
  if (stored === "light" || stored === "dark") return stored;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  return mq.matches ? "dark" : "light";
}

function apply(theme: Theme) {
  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  const dark = theme === "dark";
  htmlEl.classList.toggle("dark", dark);
  bodyEl.classList.toggle("dark", dark);
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = resolveInitial();
    setTheme(t);
    apply(t);
    setMounted(true);
  }, []);

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
      {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
