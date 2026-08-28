"use client";
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { profile } from "../lib/profile";

export default function ContactPageContent() {
    const { t } = useLocale();
    const openToItems = [1, 2, 3, 4];

    return (
        <main className="flex flex-col items-center justify-start w-full max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12 text-main transition-colors duration-300">

            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">{t("contact_title")}</h1>
                <p className="text-lg text-muted max-w-xl mx-auto">
                    {t("contact_desc")}
                </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-card border border-subtle rounded-xl p-6 shadow-sm md:col-span-2">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                                {t("contact_email_h3")}
                            </h2>
                            <p className="font-medium text-main">{profile.email}</p>
                        </div>
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex w-fit items-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-blue-700/25 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                        >
                            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                            {t("contact_email_action")}
                        </a>
                    </div>
                </section>

                <section className="bg-card border border-subtle rounded-xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">{t("contact_social_h3")}</h2>
                    <div className="flex flex-col gap-3">
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-subtle transition-colors group"
                            aria-label="LinkedIn (Recruiting)"
                        >
                            <div className="flex items-center gap-3">
                                <Linkedin className="w-5 h-5 text-blue-700" />
                                <span className="font-medium">{t("contact_recruiting")}</span>
                            </div>
                            <span className="text-sm text-muted group-hover:text-main">LinkedIn</span>
                        </a>

                        <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-subtle transition-colors group"
                            aria-label="GitHub (Code)"
                        >
                            <div className="flex items-center gap-3">
                                <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                                <span className="font-medium">{t("contact_code")}</span>
                            </div>
                            <span className="text-sm text-muted group-hover:text-main">GitHub</span>
                        </a>
                    </div>
                </section>

                <section className="bg-card border border-subtle rounded-xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold mb-3">{t("open_to_title")}</h2>
                    <p className="text-sm text-muted leading-relaxed">{t("open_to_desc")}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {openToItems.map((item) => (
                            <span key={item} className="rounded-md border border-subtle bg-page/70 px-3 py-1.5 text-xs font-medium text-main">
                                {t(`open_to_item${item}`)}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main >
    );
}
