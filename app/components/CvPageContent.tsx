"use client";

import React from "react";
import { useLocale } from "../LocaleProvider";
import { Download, MapPin, Mail } from "lucide-react";

const skillGroups = [
    "platform",
    "automation",
    "networking",
    "operations",
    "software",
    "delivery",
] as const;

export default function CvPageContent() {
    const { t } = useLocale();

    const expKeys = ["exp1", "exp2", "exp3", "exp4"];
    const summaryFocus = [1, 2, 3, 4];
    const infrastructureItems = [1, 2, 3, 4];

    return (
        <main className="w-full max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-10 text-main">
            {/* Header */}
            <header className="space-y-4 border-b border-subtle pb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-main">
                        Mohamed Elkaza
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
                        {t("cv_role_title")}
                    </p>
                    <p className="text-sm text-muted mt-2">
                        {t("cv_last_updated")}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-muted text-sm">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{t("legal_location")}</span>
                    </div>
                    {/* Email is not strictly in messages, but we can use a placeholder or generic link */}
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:contact@elkaza.org" className="hover:text-blue-600 transition-colors">
                            contact@elkaza.org
                        </a>
                    </div>
                </div>
            </header>

            {/* Summary */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold uppercase tracking-wider text-muted">
                    {t("cv_summary_title")}
                </h2>
                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-lg border border-subtle bg-card p-5 shadow-sm">
                        <p className="text-base leading-relaxed text-main">
                            {t("cv_summary_text")}
                        </p>
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                            {summaryFocus.map((item) => (
                                <span key={item} className="rounded-md border border-subtle bg-page/60 px-3 py-2 text-sm font-medium text-main">
                                    {t(`cv_summary_focus${item}`)}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-lg border border-subtle bg-card p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                            {t("cv_infra_title")}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {t("cv_infra_intro")}
                        </p>
                        <ul className="mt-4 space-y-2">
                            {infrastructureItems.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-main">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                                    <span>{t(`cv_infra_short${item}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold uppercase tracking-wider text-muted">
                    {t("cv_skills_title")}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div key={group} className="rounded-lg border border-subtle bg-card p-4 shadow-sm">
                            <h3 className="text-sm font-semibold text-main">
                                {t(`cv_skill_${group}_title`)}
                            </h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {t(`cv_skill_${group}_items`).split(/\s*\|\s*/).map((skill) => (
                                    <span key={skill} className="rounded-md border border-subtle bg-page/70 px-2.5 py-1 text-xs font-medium text-muted">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="space-y-6">
                <h2 className="text-xl font-semibold uppercase tracking-wider text-muted">
                    {t("cv_exp_title")}
                </h2>
                <div className="space-y-8">
                    {expKeys.map((key) => (
                        <div key={key} className="space-y-2">
                            <h3 className="text-lg font-bold text-main">
                                {t(`${key}_title_full`)}
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                {t(`${key}_desc_full`)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education & Certifications */}
            <section className="space-y-6">
                <h2 className="text-xl font-semibold uppercase tracking-wider text-muted">
                    {t("cv_edu_title")}
                </h2>
                <ul className="space-y-2 list-disc list-inside text-muted">
                    <li>{t("current_item2")}</li>
                    <li>{t("current_item3")}</li>
                    <li>{t("cert_ipma_title")} ({t("cert_ipma_issuer")})</li>
                    <li>{t("cert_graz_title")}</li>
                </ul>
            </section>

            {/* Download Section */}
            <section className="pt-8 border-t border-subtle space-y-4">
                <p className="font-medium text-main">{t("cv_note_full")}</p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="/cv/Elkaza_Mohamed_CV_DE.pdf"
                        download
                        className="inline-flex items-center px-5 py-3 bg-card border border-subtle hover:border-blue-500 rounded-md shadow-sm transition-all group"
                    >
                        <Download className="w-5 h-5 mr-3 text-blue-600 group-hover:text-blue-500" />
                        <span className="font-medium">{t("cv_download_de")}</span>
                    </a>

                    <a
                        href="/cv/Elkaza_Mohamed_CV_EN.pdf"
                        download
                        className="inline-flex items-center px-5 py-3 bg-card border border-subtle hover:border-blue-500 rounded-md shadow-sm transition-all group"
                    >
                        <Download className="w-5 h-5 mr-3 text-blue-600 group-hover:text-blue-500" />
                        <span className="font-medium">{t("cv_download_en")}</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
