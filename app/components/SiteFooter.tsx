"use client";
// import { useLocale } from "../LocaleProvider";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SiteFooter() {
  // const { t } = useLocale();

  return (
    <footer className="bg-page text-muted py-12 border-t border-subtle">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* Copyright */}
        <div className="text-xs font-medium tracking-widest uppercase text-muted">
          &copy; {new Date().getFullYear() === 2025 ? "2025" : `2025 — ${new Date().getFullYear()}`} Elkaza. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-muted">
          <a href="mailto:contact@elkaza.org" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            <Github size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
