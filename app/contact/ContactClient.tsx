"use client";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { useLocale } from "../LocaleProvider";

export default function ContactClient() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Left rail */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("nav_contact")}</h1>
          <p className="mt-2 text-gray-500 italic">{t("contact_tagline")}</p>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 grid sm:grid-cols-2 gap-10">
          {/* Academic / Research */}
          <div className="p-6 rounded-xl hover:shadow-md transition bg-[var(--card-bg)] border border-[var(--card-border)]">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">{t("contact_academic_h2")}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{t("contact_academic_desc")}</p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                <a href="mailto:contact@elkaza.org" className="hover:underline">contact@elkaza.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                <a href="https://elkaza.org" target="_blank" rel="noopener noreferrer" className="hover:underline">elkaza.org</a>
              </li>
            </ul>
          </div>

          {/* Consulting / Services */}
          <div className="p-6 rounded-xl hover:shadow-md transition bg-[var(--card-bg)] border border-[var(--card-border)]">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">{t("contact_consult_h2")}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{t("contact_consult_desc")}</p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                <a href="mailto:office@elkaza.at" className="hover:underline">office@elkaza.at</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                <a href="https://elkaza.at" target="_blank" rel="noopener noreferrer" className="hover:underline">elkaza.at</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="sm:col-span-2 text-center py-8 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">{t("contact_social_h3")}</h3>
            <div className="flex justify-center gap-8 text-gray-700 dark:text-gray-300">
              <a href="https://github.com/Elkaza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/elkaza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
