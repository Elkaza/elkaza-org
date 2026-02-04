"use client";

import React from "react";
import { useLocale } from "../LocaleProvider";
import { Download, MapPin, Mail } from "lucide-react";

export default function CvPageContent() {
    const { t, locale } = useLocale();

    const expKeys = ["exp1", "exp2", "exp3", "exp4"];

    return (
        <main className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-12 text-main">
            {/* Header */}
            <header className="space-y-4 border-b border-subtle pb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-main">
                        Mohamed Elkaza
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
                        {t("home_hero_headline")}
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
                <p className="text-base leading-relaxed max-w-2xl">
                    {t("cv_summary_text")}
                </p>
            </section>

            {/* Skills */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold uppercase tracking-wider text-muted">
                    {t("cv_skills_title")}
                </h2>
                <div className="flex flex-wrap gap-2 text-sm">
                    {t("cv_skills_list").split(/,\s*/).map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-subtle/50 border border-subtle rounded-full font-medium text-main">
                            {skill.trim()}
                        </span>
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
                        href="/cv/Mohamed_Elkaza_CV_DE.pdf"
                        download
                        className="inline-flex items-center px-5 py-3 bg-card border border-subtle hover:border-blue-500 rounded-md shadow-sm transition-all group"
                    >
                        <Download className="w-5 h-5 mr-3 text-blue-600 group-hover:text-blue-500" />
                        <span className="font-medium">{t("cv_download_de")}</span>
                    </a>

                    <a
                        href="/cv/Mohamed_Elkaza_CV_EN.pdf"
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
