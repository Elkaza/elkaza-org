"use client";
import { useLocale } from "../LocaleProvider";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  const { t, locale } = useLocale();

  return (
    <footer className="bg-page text-muted py-12 border-t border-subtle">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">

        <div className="flex gap-6 text-sm">
          <Link
            href={locale === "de" ? "/zertifikate" : "/certifications"}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
          >
            {t("cert_title")}
          </Link>
          <Link
            href="/impressum"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
          >
            {t("footer_impressum")}
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
          >
            {t("footer_datenschutz")}
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-muted">
          <a href="mailto:contact@elkaza.org" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/elkaza" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-500 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Elkaza" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-medium tracking-widest uppercase text-muted">
          &copy; {new Date().getFullYear() === 2025 ? "2025" : `2025-${new Date().getFullYear()}`} Elkaza. All rights reserved.
        </div>

      </div>
    </footer >
  );
}
