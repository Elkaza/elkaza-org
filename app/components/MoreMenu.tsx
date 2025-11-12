"use client";
import { useEffect, useRef, useState } from "react";
import { MoreHorizontal, Github, Linkedin, Youtube, Twitter } from "lucide-react";

export default function MoreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        aria-label="More links"
        aria-haspopup="menu"
        aria-expanded={open}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        onClick={() => setOpen((v) => !v)}
      >
        <MoreHorizontal size={18} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-52 rounded-xl border border-[var(--outline)] bg-[var(--surface)] shadow-xl z-[120] p-2"
        >
          <a
            role="menuitem"
            href="https://github.com/Elkaza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            role="menuitem"
            href="https://www.linkedin.com/in/elkaza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            role="menuitem"
            href="https://twitter.com/elkaza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Twitter size={16} /> Twitter
          </a>
          <a
            role="menuitem"
            href="https://www.youtube.com/@elkaza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Youtube size={16} /> YouTube
          </a>
        </div>
      )}
    </div>
  );
}
