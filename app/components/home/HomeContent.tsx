"use client";
import Link from "next/link";
import { Brain, Code, GraduationCap } from "lucide-react";
import { useLocale } from "../../LocaleProvider";
import Button from "../Button";

export default function HomeContent() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-[var(--bg)] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="text-center py-24 bg-[var(--panel-bg)] transition-colors duration-500">
        <h1 className="text-5xl font-bold mb-6 leading-tight heading-serif" style={{ color: "var(--text)" }}>
          {t("hero_title_1")} <br /> {t("hero_title_2")}
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-10" style={{ color: "var(--text-dim)" }}>
          {t("hero_lead")}
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/about" variant="filled">{t("btn_learn")}</Button>
          <Button href="/contact" variant="outline">{t("btn_contact")}</Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link href="/research" className="p-6 bg-[var(--surface)] border border-[var(--outline)] rounded-xl shadow-elev-1 hover:shadow-elev-2 transition">
          <Brain className="text-blue-700 dark:text-blue-400 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text)" }}>{t("card_research_title")}</h2>
          <p className="text-dim">{t("card_research_desc")}</p>
        </Link>

        <Link href="/projects" className="p-6 bg-[var(--surface)] border border-[var(--outline)] rounded-xl shadow-elev-1 hover:shadow-elev-2 transition">
          <Code className="text-blue-700 dark:text-blue-400 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text)" }}>{t("card_projects_title")}</h2>
          <p className="text-dim">{t("card_projects_desc")}</p>
        </Link>

        <Link href="/teaching" className="p-6 bg-[var(--surface)] border border-[var(--outline)] rounded-xl shadow-elev-1 hover:shadow-elev-2 transition">
          <GraduationCap className="text-blue-700 dark:text-blue-400 w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text)" }}>{t("card_teaching_title")}</h2>
          <p className="text-dim">{t("card_teaching_desc")}</p>
        </Link>
      </section>
    </main>
  );
}
