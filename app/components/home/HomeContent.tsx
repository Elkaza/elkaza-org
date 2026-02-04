"use client";

import React from "react";
import Link from "next/link";
import { Mail, Terminal } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import { Download } from "lucide-react";

export default function HomeContent() {
  const { t } = useLocale();

  return (
    <main className="flex flex-col items-start justify-start w-full max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-24 text-main">

      {/* 1. Hero Section - New Focused Positioning */}
      <section className="w-full space-y-8">
        <div className="space-y-4">
          {/* Terminal-style focus indicator */}
          <div className="space-y-1">
            <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
            <span className="font-mono text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold block" aria-hidden="true">
              {t("hero_badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-main">
              {t("home_hero_headline")}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium">
            {t("home_hero_subline")}
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            {t("home_hero_desc")}
          </p>
        </div>

        {/* Proof in 3 Bullets */}
        <div className="bg-card border border-subtle rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {t("home_proof_title")}
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 dot-impact rounded-full flex-shrink-0" />
              <span className="text-main">{t("home_proof_impact")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
              <span className="text-main">{t("home_proof_scope")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-slate-500 rounded-full flex-shrink-0" />
              <span className="text-main">{t("home_proof_strength")}</span>
            </li>
          </ul>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4">
          <CvLink t={t} />
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 border border-subtle bg-card text-main rounded-md font-medium hover:bg-subtle transition-colors shadow-sm"
          >
            {t("home_cta_secondary")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            {t("btn_contact_me")}
          </Link>
        </div>
      </section>

      {/* 2. What I do Section */}
      <section className="w-full space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">{t("what_do_title")}</h2>
          <p className="text-muted">{t("what_do_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 p-5 border border-subtle rounded-xl bg-card h-full">
            <h3 className="font-medium text-main text-lg">{t("what_do_item1_title")}</h3>
            <p className="text-sm text-muted leading-relaxed">{t("what_do_item1_desc")}</p>
          </div>
          <div className="space-y-3 p-5 border border-subtle rounded-xl bg-card h-full">
            <h3 className="font-medium text-main text-lg">{t("what_do_item2_title")}</h3>
            <p className="text-sm text-muted leading-relaxed">{t("what_do_item2_desc")}</p>
          </div>
          <div className="space-y-3 p-5 border border-subtle rounded-xl bg-card h-full">
            <h3 className="font-medium text-main text-lg">{t("what_do_item3_title")}</h3>
            <p className="text-sm text-muted leading-relaxed">{t("what_do_item3_desc")}</p>
          </div>
          <div className="space-y-3 p-5 border border-subtle rounded-xl bg-card h-full">
            <h3 className="font-medium text-main text-lg">{t("what_do_item4_title")}</h3>
            <p className="text-sm text-muted leading-relaxed">{t("what_do_item4_desc")}</p>
          </div>
        </div>
      </section>

      <section className="w-full space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">{t("current_title")}</h2>
        <ul className="space-y-3 list-disc list-outside ml-4 text-muted">
          <li>{t("current_item1")}</li>
          <li>{t("current_item2")}</li>
          <li>{t("current_item3")}</li>
          <li>{t("current_item4")}</li>
        </ul>
        <div className="pt-4">
          <Link
            href="/cv"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            {t("home_view_cv")} →
          </Link>
        </div>
      </section>

      {/* 6. Technologies & Methods Section */}
      <section className="w-full space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">{t("tech_title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-sm">
          <div className="space-y-1">
            <h3 className="font-medium text-main">{t("tech_cat1")}</h3>
            <p className="text-muted">{t("tech_list1")}</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-main">{t("tech_cat2")}</h3>
            <p className="text-muted">{t("tech_list2")}</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-main">{t("tech_cat3")}</h3>
            <p className="text-muted">{t("tech_list3")}</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-main">{t("tech_cat4")}</h3>
            <p className="text-muted">{t("tech_list4")}</p>
          </div>
        </div>
      </section>

      {/* 7. Contact / Footer Area */}
      <section className="w-full pt-8 border-t border-subtle">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-muted max-w-md">
            {t("contact_text")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 bg-main text-page rounded-md font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <Mail className="mr-2 h-4 w-4" />
            {t("btn_contact_me")}
          </Link>
        </div>
      </section>
    </main>
  );
}

function CvLink({ t }: { t: (key: string) => string }) {
  const { locale } = useLocale();
  const cvPath = locale === "de" ? "/cv/Elkaza_Mohamed_CV_DE.pdf" : "/cv/Elkaza_Mohamed_CV_EN.pdf";

  return (
    <a
      href={cvPath}
      download
      className="inline-flex items-center px-5 py-2.5 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
    >
      <Download className="mr-2 h-4 w-4" />
      {t("hero_cta_cv")}
    </a>
  );
}
