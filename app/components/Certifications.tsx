"use client";

import React from "react";
import { Award } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";

export default function Certifications() {
    const { t } = useLocale();

    return (
        <div className="mt-8 p-4 bg-card border border-subtle rounded-xl flex items-start space-x-4 shadow-sm">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">
                    {t("cert_title")}
                </h3>
                <p className="text-main font-medium">
                    {t("cert_ipma_details")}
                </p>

            </div>
        </div>
    );
}
