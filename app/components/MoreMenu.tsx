"use client";
import { useEffect, useRef, useState } from "react";
import { MoreHorizontal, Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import Link from "next/link";

export default function MoreMenu() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !open) return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!menuRef.current || !["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    if (!items.length) return;
    event.preventDefault();
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    if (event.key === "Home") return items[0].focus();
    if (event.key === "End") return items[items.length - 1].focus();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + direction + items.length) % items.length;
    items[nextIndex].focus();
  };

  return (
    <div ref={ref} className="relative">
      <button
        ref={buttonRef}
        type="button"
        id="more-links-button"
        aria-label="More links"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="more-links-menu"
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        onClick={() => setOpen((v) => !v)}
      >
        <MoreHorizontal size={18} />
      </button>
      {open && (
        <div
          ref={menuRef}
          id="more-links-menu"
          role="menu"
          aria-labelledby="more-links-button"
          onKeyDown={handleMenuKeyDown}
          className="absolute right-0 z-[120] mt-2 w-52 rounded-lg border border-subtle bg-card p-2 shadow-xl"
        >
          <a
            href="https://github.com/Elkaza"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded text-main hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <Link
            href="/contact"
            aria-label={t("hero_cta_cv")}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded text-main hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Mail size={16} /> {t("hero_cta_cv")}
          </Link>
          <a
            href="https://www.linkedin.com/in/elkaza"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded text-main hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

        </div>
      )}
    </div>
  );
}
