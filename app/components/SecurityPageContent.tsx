"use client";
import React from "react";
import { Shield, Server, Network, Layers, Monitor, Lock, CheckCircle2 } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import Link from "next/link";

export default function SecurityPageContent() {
    const { t } = useLocale();

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300">
            <section className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-14">

                <div className="space-y-4">
                    <div className="w-20 h-1.5 bg-blue-600 mb-6" />
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-normal text-main">
                        {t("security_title")}
                    </h1>
                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                        {t("security_focus")}
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {t("security_lab_title")}
                    </h2>
                    <div className="bg-card border border-subtle rounded-lg p-6 md:p-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-main">
                            {t("security_lab_list").split(",").map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                                    <span>{item.trim()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {t("security_stack_title")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-card border border-subtle rounded-lg p-6">
                            <h3 className="font-semibold text-main mb-2">{t("sec_stack_seg_title")}</h3>
                            <p className="text-sm text-muted whitespace-pre-line">{t("sec_stack_seg_desc")}</p>
                        </div>
                        <div className="bg-card border border-subtle rounded-lg p-6">
                            <h3 className="font-semibold text-main mb-2">{t("sec_stack_fw_title")}</h3>
                            <p className="text-sm text-muted whitespace-pre-line">{t("sec_stack_fw_desc")}</p>
                        </div>
                        <div className="bg-card border border-subtle rounded-lg p-6">
                            <h3 className="font-semibold text-main mb-2">{t("sec_stack_vpn_title")}</h3>
                            <p className="text-sm text-muted whitespace-pre-line">{t("sec_stack_vpn_desc")}</p>
                        </div>
                        <div className="bg-card border border-subtle rounded-lg p-6">
                            <h3 className="font-semibold text-main mb-2">{t("sec_stack_mon_title")}</h3>
                            <p className="text-sm text-muted whitespace-pre-line">{t("sec_stack_mon_desc")}</p>
                        </div>
                    </div>
                    <div className="bg-subtle/30 rounded-lg p-6 border border-subtle">
                        <h3 className="font-semibold text-main mb-2">{t("sec_outcomes_title")}</h3>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-start gap-2 text-sm text-muted">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                                {t("sec_outcome_1")}
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                                {t("sec_outcome_2")}
                            </li>
                        </ul>
                        <p className="text-xs text-muted italic mb-4">{t("sec_metric_note")}</p>
                        <div className="flex flex-col gap-2">
                            <Link href="/projects/enterprise-self-hosted-infrastructure" className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                                {t("sec_view_project")} {">"}
                            </Link>
                            <Link href="/projects/vienna-fortress" className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
                                {t("sec_view_foundation")} {">"}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {t("security_cases_title")}
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-card border border-subtle rounded-lg p-6 space-y-4">
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                                <Lock className="w-5 h-5" />
                                <h3>{t("case_iot_title")}</h3>
                            </div>
                            <div className="text-sm space-y-2">
                                <p><strong className="text-main">{t("case_label_problem")}:</strong> {t("case_iot_problem")}</p>
                                <p><strong className="text-main">{t("case_label_action")}:</strong> {t("case_iot_action")}</p>
                                <p><strong className="text-main">{t("case_label_result")}:</strong> {t("case_iot_result")}</p>
                            </div>
                        </div>

                        <div className="bg-card border border-subtle rounded-lg p-6 space-y-4">
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                                <Monitor className="w-5 h-5" />
                                <h3>{t("case_remote_title")}</h3>
                            </div>
                            <div className="text-sm space-y-2">
                                <p><strong className="text-main">{t("case_label_problem")}:</strong> {t("case_remote_problem")}</p>
                                <p><strong className="text-main">{t("case_label_action")}:</strong> {t("case_remote_action")}</p>
                                <p><strong className="text-main">{t("case_label_result")}:</strong> {t("case_remote_result")}</p>
                            </div>
                        </div>

                        <div className="bg-card border border-subtle rounded-lg p-6 space-y-4 col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                                <Shield className="w-5 h-5" />
                                <h3>{t("case_lab_title")}</h3>
                            </div>
                            <div className="text-sm space-y-2">
                                <p><strong className="text-main">{t("case_label_problem")}:</strong> {t("case_lab_problem")}</p>
                                <p><strong className="text-main">{t("case_label_action")}:</strong> {t("case_lab_action")}</p>
                                <p><strong className="text-main">{t("case_label_result")}:</strong> {t("case_lab_result")}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
