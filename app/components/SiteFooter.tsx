"use client";
import { useLocale } from "../LocaleProvider";
import { Github, Linkedin, Mail, Twitter, Youtube, Rss, Mic } from "lucide-react";

export default function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* Copyright */}
        <div className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear() === 2025 ? "2025" : `2025 — ${new Date().getFullYear()}`} Elkaza. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-400">
          <a href="mailto:contact@elkaza.org" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <Mic size={20} />
          </a>
          <a href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            <Rss size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
