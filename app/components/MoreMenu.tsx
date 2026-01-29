"use client";
import { useEffect, useRef, useState } from "react";
import { MoreHorizontal, Github, Linkedin, Download } from "lucide-react";
import { useLocale } from "../LocaleProvider";

export default function MoreMenu() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        aria-label="More links"
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        onClick={() => setOpen((v) => !v)}
      >
        <MoreHorizontal size={18} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-xl border border-subtle bg-card shadow-xl z-[120] p-2">
          <a
            href="https://github.com/Elkaza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded text-main hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={locale === "de" ? "/cv/Elkaza_Mohamed_CV_DE.pdf" : "/cv/Elkaza_Mohamed_CV_EN.pdf"}
            download
            aria-label={t("hero_cta_cv")}
            className="flex items-center gap-2 px-3 py-2 rounded text-main hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Download size={16} /> {t("hero_cta_cv")}
          </a>
          <a
            href="https://www.linkedin.com/in/elkaza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded text-main hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

        </div>
      )}
    </div>
  );
}
