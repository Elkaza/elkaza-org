"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";

export default function HomeContent() {
  const { t } = useLocale();

  return (
    <main className="flex flex-col items-start justify-start w-full max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-24 text-main">

      {/* 1. Hero Section */}
      <section className="w-full space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
          {t("home_hero_title")}
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
          {t("home_hero_subtitle")}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/about"
            className="inline-flex items-center px-4 py-2 bg-main text-page rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            {t("home_btn_blog")}
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center px-4 py-2 border border-subtle rounded-md font-medium hover:bg-subtle transition-colors"
          >
            {t("home_btn_projects")}
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
      </section>

      {/* 4. Selected Experience Section */}
      <section className="w-full space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">{t("experience_title")}</h2>
        <div className="space-y-8">
          <div className="space-y-1">
            <h3 className="font-medium text-main">
              {t("exp1_title")}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{t("exp1_desc")}</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium text-main">
              {t("exp2_title")}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{t("exp2_desc")}</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium text-main">
              {t("exp3_title")}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{t("exp3_desc")}</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-medium text-main">
              {t("exp4_title")}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{t("exp4_desc")}</p>
          </div>
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
