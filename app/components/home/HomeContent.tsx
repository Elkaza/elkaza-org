"use client";
import Link from "next/link";
import { Brain, Code, GraduationCap } from "lucide-react";
import { useLocale } from "../../LocaleProvider";

export default function HomeContent() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-blue-100/20 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100 leading-tight heading-serif">
          {t("hero_title_1")} <br /> {t("hero_title_2")}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          {t("hero_lead")}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/about" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
            {t("btn_learn")}
          </Link>
          <Link href="/contact" className="border border-blue-700 text-blue-700 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition">
            {t("btn_contact")}
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link href="/research" className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
          <Brain className="text-blue-700 dark:text-blue-400 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{t("card_research_title")}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t("card_research_desc")}</p>
        </Link>

        <Link href="/projects" className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
          <Code className="text-blue-700 dark:text-blue-400 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{t("card_projects_title")}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t("card_projects_desc")}</p>
        </Link>

        <Link href="/teaching" className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
          <GraduationCap className="text-blue-700 dark:text-blue-400 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{t("card_teaching_title")}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t("card_teaching_desc")}</p>
        </Link>
      </section>
    </main>
  );
}
