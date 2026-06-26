"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import { certifications, sortCertifications } from "@/app/lib/certifications";
import { OrganizationLogo } from "./ui/OrganizationLogo";

export default function Certifications() {
    const { t, locale } = useLocale();

    // Get sorted items and take top 3
    const sortedItems = sortCertifications(certifications);
    const top3 = sortedItems.slice(0, 3);

    return (
        <div className="mt-8 p-6 bg-card border border-subtle rounded-xl shadow-sm group hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-pointer relative">
            {/* Click overlap */}
            <Link href={locale === "de" ? "/zertifikate" : "/certifications"} className="absolute inset-0 z-10" aria-label={t("cert_view_all")} />

            <div className="flex items-center justify-between mb-4 relative z-0">
                <h3 className="font-bold text-main tracking-wider uppercase text-sm">
                    {t("cert_title")}
                </h3>
            </div>

            <div className="space-y-4 relative z-0">
                {top3.map((cert) => (
                    <div key={cert.id} className="flex items-start gap-3">
                        <OrganizationLogo name={cert.organizationName} size="sm" />
                        <div className="min-w-0">
                            <p className="text-sm font-bold text-main leading-snug line-clamp-2">
                                {t(cert.titleKey) || "Title Missing"}
                            </p>
                            <p className="text-xs text-secondary mt-0.5 line-clamp-1 font-medium">
                                {t(cert.issuerKey)} • {t(cert.dateLabelKey)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-3 border-t border-subtle relative z-0">
                <div className="flex items-center text-xs font-bold text-main group-hover:underline">
                    {t("cert_view_all")} <ArrowRight className="w-3 h-3 ml-1" />
                </div>
            </div>
        </div>
    );
}
