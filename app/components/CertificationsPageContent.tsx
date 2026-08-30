"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Award, Calendar } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import { certifications, sortCertifications, type CertCategory, type CertType } from "@/app/lib/certifications";
import { getLocalizedPath } from "@/app/lib/localizedRoutes";
import { OrganizationLogo } from "./ui/OrganizationLogo";

export default function CertificationsPageContent() {
    const { t, locale } = useLocale();
    const activeLocale = locale === "en" ? "en" : "de";
    const [selectedCategory, setSelectedCategory] = useState<CertCategory | "All">("All");

    const filters = [
        { labelKey: "cert_filter_all", value: "All" },
        { labelKey: "cert_filter_pm", value: "project_management" },
        { labelKey: "cert_filter_ba", value: "business_analysis" },
        { labelKey: "cert_filter_excel", value: "excel_vba" },
    ];

    // Sorting
    const sortedCerts = sortCertifications(certifications);

    // Filtering
    const filteredCerts = sortedCerts.filter(cert => {
        if (selectedCategory === "All") return true;
        return cert.category === selectedCategory;
    });

    const certificationGroups = [
        {
            id: "professional-certifications",
            titleKey: "cert_section_prof",
            items: filteredCerts.filter(cert => cert.type === "professional_certification"),
        },
        {
            id: "courses-and-training",
            titleKey: "cert_section_learning",
            items: filteredCerts.filter(cert => cert.type !== "professional_certification"),
        },
    ].filter(group => group.items.length > 0);

    // Helper for Type Badge Styles & Text
    const getTypeBadge = (type: CertType) => {
        switch (type) {
            case "professional_certification":
                // Accent (sky blue) for certifications
                return <span className="badge badge-accent">{t("cert_type_prof")}</span>;
            case "university_course":
                // Neutral for university courses
                return <span className="badge badge-neutral">{t("cert_type_uni")}</span>;
            case "professional_training":
                // Neutral for trainings
                return <span className="badge badge-neutral">{t("cert_type_training")}</span>;
            default:
                return <span className="badge badge-neutral">{type}</span>;
        }
    };

    return (
        <main className="min-h-screen bg-page text-main transition-colors">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-8">
                    <Link href={getLocalizedPath("/about", activeLocale)} className="mb-6 inline-flex items-center rounded-sm text-sm font-medium text-muted transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page dark:hover:text-blue-400">
                        <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" />
                        {t("cert_nav_back")}
                    </Link>
                    <h1 className="text-3xl font-bold mb-2 text-main">{t("cert_list_title")}</h1>
                    <p className="text-muted max-w-2xl text-lg">
                        {t("cert_list_subtitle")}
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted">
                        {t("cert_avail_req")}
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {filters.map((f) => {
                        const isActive = selectedCategory === f.value;
                        return (
                            <button
                                type="button"
                                key={f.value}
                                onClick={() => setSelectedCategory(f.value as CertCategory | "All")}
                                aria-pressed={isActive}
                                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page ${isActive
                                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                                    : "bg-card text-main border-subtle hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-800"
                                    }`}
                            >
                                {t(f.labelKey)}
                            </button>
                        );
                    })}
                </div>

                {/* List */}
                <div className="space-y-10">
                    {certificationGroups.map(group => (
                        <section key={group.id} aria-labelledby={group.id}>
                            <h2 id={group.id} className="mb-4 text-xl font-semibold text-main">
                                {t(group.titleKey)}
                            </h2>
                            <div className="space-y-6">
                                {group.items.map(cert => (
                                    <article key={cert.id} className="flex flex-col gap-6 rounded-xl border border-subtle bg-card p-6 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md dark:hover:border-blue-800 md:flex-row">
                                        {/* Icon Column */}
                                        <div className="shrink-0">
                                            <OrganizationLogo name={cert.organizationName} size="lg" decorative={false} />
                                        </div>

                                        {/* Content Column */}
                                        <div className="min-w-0 flex-1">
                                            {/* Title */}
                                            <h3 className="mb-1 text-lg font-bold leading-snug text-main">
                                                {t(cert.titleKey)}
                                            </h3>

                                            {/* Subtitle: Issuer + Badge */}
                                            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                                                <span className="text-sm font-medium text-main">{t(cert.issuerKey)}</span>
                                                {getTypeBadge(cert.type)}
                                            </div>

                                            {/* Meta Row */}
                                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                                                {/* Date (Primary) */}
                                                <div className="flex items-center text-main">
                                                    <Calendar className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                                                    <span>{t(cert.dateLabelKey)}</span>
                                                </div>

                                                {/* Grade */}
                                                {cert.gradeKey && (
                                                    <div className="flex items-center">
                                                        <Award className="mr-2 h-4 w-4 text-amber-500" aria-hidden="true" />
                                                        <span className="font-medium text-main">{t(cert.gradeKey)}</span>
                                                    </div>
                                                )}

                                                {/* ECTS Badge */}
                                                {cert.ects && (
                                                    <div className="flex items-center">
                                                        <span className="badge badge-primary font-bold">
                                                            {cert.ects} ECTS
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Provider Key */}
                                                {cert.providerKey && (
                                                    <div className="flex items-center">
                                                        <span className="border-l border-subtle pl-3 text-xs text-secondary">
                                                            {t(cert.providerKey)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ))}

                    {filteredCerts.length === 0 && (
                        <p className="text-muted italic text-center py-8">{t("cert_empty")}</p>
                    )}
                </div>
            </div>
        </main>
    );
}
