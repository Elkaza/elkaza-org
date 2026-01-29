"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Award, Calendar } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import { certifications, sortCertifications, CertCategory } from "@/app/lib/certifications";

export default function CertificationsPageContent() {
    const { t } = useLocale();
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

    // Helper for Type Badge Styles & Text
    const getTypeBadge = (type: string) => {
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
                    <Link href={"/about"} className="inline-flex items-center text-sm text-muted hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t("cert_nav_back")}
                    </Link>
                    <h1 className="text-3xl font-bold mb-2 text-main">{t("cert_list_title")}</h1>
                    <p className="text-muted max-w-2xl text-lg">
                        {t("cert_list_subtitle")}
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {filters.map((f) => {
                        const isActive = selectedCategory === f.value;
                        return (
                            <button
                                key={f.value}
                                onClick={() => setSelectedCategory(f.value as any)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${isActive
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
                <div className="space-y-6">
                    {filteredCerts.map((cert) => {
                        const Icon = cert.icon;
                        return (
                            <div key={cert.id} className="bg-card border border-subtle hover:border-blue-200 dark:hover:border-blue-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-all duration-200">
                                {/* Icon Column */}
                                <div className="shrink-0">
                                    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl ring-1 ring-inset ring-blue-100 dark:ring-blue-800/50">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="flex-1 min-w-0">
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-main leading-snug mb-1">
                                        {t(cert.titleKey)}
                                    </h3>

                                    {/* Subtitle: Issuer + Badge */}
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                                        <span className="text-main text-sm font-medium">{t(cert.issuerKey)}</span>
                                        {getTypeBadge(cert.type)}
                                    </div>

                                    {/* Meta Row */}
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted mb-5">
                                        {/* Date (Primary) */}
                                        <div className="flex items-center text-main">
                                            <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                                            <span>{t(cert.dateLabelKey)}</span>
                                        </div>

                                        {/* Grade */}
                                        {cert.gradeKey && (
                                            <div className="flex items-center">
                                                <Award className="w-4 h-4 mr-2 text-amber-500" />
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
                                                <span className="text-secondary text-xs border-l border-subtle pl-3">
                                                    {t(cert.providerKey)}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Footer / Proof */}
                                    <div className="pt-4 border-t border-subtle flex items-center justify-between">
                                        <span className="text-xs text-blue-600 dark:text-blue-400 italic">
                                            {t(cert.proofKey || "cert_avail_req")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {filteredCerts.length === 0 && (
                        <p className="text-muted italic text-center py-8">No certifications found for this category.</p>
                    )}
                </div>
            </div>
        </main>
    );
}
