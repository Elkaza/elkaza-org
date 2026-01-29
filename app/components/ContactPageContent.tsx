"use client";
import React from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useLocale } from "../LocaleProvider";

export default function ContactPageContent() {
    const { t, locale } = useLocale();
    const cvPath = locale === "de" ? "/cv/Elkaza_Mohamed_CV_DE.pdf" : "/cv/Elkaza_Mohamed_CV_EN.pdf";

    return (
        <main className="flex flex-col items-center justify-start w-full max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12 text-main transition-colors duration-300">

            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">{t("contact_title")}</h1>
                <p className="text-lg text-muted max-w-xl mx-auto">
                    {t("contact_desc")}
                </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Contact Info & Connect */}
                <div className="space-y-8">

                    {/* Email / Academic */}
                    <div className="bg-card border border-subtle rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-blue-600" />
                            {t("contact_email_h3")}
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <span className="block text-muted text-xs uppercase tracking-wider">{t("contact_personal_inquiries")}</span>
                                <a href="mailto:contact@elkaza.org" className="text-blue-600 hover:underline font-medium">
                                    contact@elkaza.org
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Block */}
                    <div className="bg-card border border-subtle rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">{t("contact_social_h3")}</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://www.linkedin.com/in/elkaza"
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
                                href="https://github.com/Elkaza"
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

                            <a
                                href={cvPath}
                                download
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-subtle transition-colors group"
                                aria-label={t("hero_cta_cv")}
                            >
                                <div className="flex items-center gap-3">
                                    <Download className="w-5 h-5 text-green-600" />
                                    <span className="font-medium">{t("contact_resume")}</span>
                                </div>
                                <span className="text-sm text-muted group-hover:text-main">{t("contact_download_cv")}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-card border border-subtle rounded-xl p-6 md:p-8 shadow-sm h-fit">
                    <ContactForm />
                </div>
            </div>
        </main >
    );
}
