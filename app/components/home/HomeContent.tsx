"use client";
import Link from "next/link";
import { ArrowRight, Brain, Code, GraduationCap } from "lucide-react";
import { useLocale } from "../../LocaleProvider";

export default function HomeContent() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Enhanced Hero Section - Left Aligned */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Tagline */}
          <p className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-6">
            {t("hero_tagline")}
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-50 leading-tight heading-serif text-left">
            {t("hero_title_1")} <br />
            <span className="text-gray-700 dark:text-gray-300">
              {t("hero_title_2")}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed text-left">
            {t("hero_lead")}
          </p>

          {/* Mission Statement */}
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mb-10 text-left border-l-4 border-blue-600 pl-4 italic">
            {t("hero_mission")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
            >
              {t("btn_learn")}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              {t("btn_contact")}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections Grid - Minimal Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          href="/research"
          className="group p-6 bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-gray-700 dark:text-gray-300 w-6 h-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Research</span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {t("card_research_title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {t("card_research_desc")}
          </p>
        </Link>

        <Link
          href="/projects"
          className="group p-6 bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-gray-700 dark:text-gray-300 w-6 h-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Projects</span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {t("card_projects_title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {t("card_projects_desc")}
          </p>
        </Link>

        <Link
          href="/teaching"
          className="group p-6 bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-gray-700 dark:text-gray-300 w-6 h-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Teaching</span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {t("card_teaching_title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {t("card_teaching_desc")}
          </p>
        </Link>
      </section>

      {/* CTA Section - Minimal */}
      <section className="border-t border-gray-200 dark:border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {t("cta_title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t("cta_description")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Start a conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

