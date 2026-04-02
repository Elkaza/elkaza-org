"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { useLocale } from "../LocaleProvider";

export default function ResearchPageContent() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-page text-main transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("nav_research")}</h1>
          <p className="mt-2 text-muted italic">{t("research_tagline") ?? ""}</p>
        </aside>

        <div className="lg:col-span-9 space-y-8">
          <section className="rounded-2xl border border-subtle bg-card p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-main">{t("thesis_h2") ?? "Master's Thesis"}</h2>
                <p className="text-main leading-relaxed">{t("thesis_desc") ?? ""}</p>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                  {t("download_thesis") ?? ""}
                </p>
                <p className="text-sm text-muted">{t("thesis_note") ?? ""}</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-subtle bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-main">{t("what_do_title")}</h2>
            <p className="mt-3 text-muted leading-relaxed">
              {t("what_do_subtitle")}
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
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
