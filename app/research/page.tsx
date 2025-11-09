"use client";
import Link from "next/link";
import { BookOpen, Network, Brain, Shield } from "lucide-react";
import { useLocale } from "../LocaleProvider";

export default function ResearchPage() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("nav_research")}</h1>
          <p className="mt-2 text-gray-500 italic">{t("research_tagline") ?? ""}</p>
        </aside>

        <div className="lg:col-span-9">
          <div className="flex items-start gap-4 mb-8">
            <BookOpen className="text-blue-600 dark:text-blue-400 w-10 h-10" />
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{t("thesis_h2") ?? "Master's Thesis"}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{t("thesis_desc") ?? ""}</p>
              <Link href="/documents/thesis.pdf" className="text-blue-700 dark:text-blue-400 font-medium hover:underline">
                {t("download_thesis") ?? "Download Thesis (PDF)"}
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <Network className="text-blue-600 dark:text-blue-400 mb-3 w-8 h-8" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{t("card_ea_title") ?? "Enterprise Architecture"}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("card_ea_desc") ?? ""}</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <Brain className="text-blue-600 dark:text-blue-400 mb-3 w-8 h-8" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{t("card_ai_title") ?? "AI & Transformation"}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("card_ai_desc") ?? ""}</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <Shield className="text-blue-600 dark:text-blue-400 mb-3 w-8 h-8" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{t("card_sec_title") ?? "Security & Governance"}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("card_sec_desc") ?? ""}</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
              {t("research_cta") ?? "Contact for Research Collaboration"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
