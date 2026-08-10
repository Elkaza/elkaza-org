"use client";

import Link from "next/link";
import { Activity, BookOpen, Cpu, Database, Network, Shield, Workflow } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { getLocalizedPath } from "../lib/localizedRoutes";

export default function ResearchPageContent() {
  const { t, locale } = useLocale();
  const activeLocale = locale === "en" ? "en" : "de";
  const topics = [
    { id: 1, Icon: Cpu },
    { id: 2, Icon: Database },
    { id: 3, Icon: Activity },
    { id: 4, Icon: Network },
    { id: 5, Icon: Cpu },
    { id: 6, Icon: Shield },
    { id: 7, Icon: Workflow },
  ];

  return (
    <main className="min-h-screen bg-page text-main transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("nav_research")}</h1>
          <p className="mt-2 text-muted italic">{t("research_tagline") ?? ""}</p>
        </aside>

        <div className="lg:col-span-9 space-y-8">
          <section className="border-y border-subtle py-8">
            <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">
              {t("research_intro_title")}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-normal max-w-3xl">
              {t("nav_research")}
            </h2>
            <p className="mt-4 max-w-3xl text-muted leading-relaxed">
              {t("research_intro_desc")}
            </p>
          </section>

          <section className="rounded-2xl border border-subtle bg-card p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-main">{t("thesis_h2") ?? "Master's Thesis"}</h2>
                <p className="text-main leading-relaxed">{t("thesis_desc") ?? ""}</p>
                <p className="text-sm font-bold text-main">
                  {t("download_thesis") ?? ""}
                </p>
                <p className="text-sm text-muted">{t("thesis_note") ?? ""}</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-main">{t("research_topics_title")}</h2>
              <p className="mt-3 text-muted leading-relaxed">{t("research_topics_desc")}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {topics.map(({ id, Icon }) => (
                <article key={id} className="rounded-lg border border-subtle bg-card p-5 shadow-sm">
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="mt-4 font-semibold text-main">{t(`research_topic${id}_title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(`research_topic${id}_desc`)}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-subtle bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-main">{t("open_to_title")}</h2>
            <p className="mt-3 text-muted leading-relaxed">{t("open_to_desc")}</p>
            <div className="mt-6">
              <Link
                href={getLocalizedPath("/kontakt", activeLocale)}
                className="inline-block rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
              >
                {t("research_cta") ?? t("btn_contact_me")}
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
