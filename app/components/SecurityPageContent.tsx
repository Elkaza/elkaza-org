"use client";
import React from "react";
import { Shield, Server, Network, Layers, Monitor, Lock, Terminal } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import TerminalCard from "./ui/TerminalCard";

export default function SecurityPageContent() {
    const { t } = useLocale();

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300">
            <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">

                {/* Header */}
                <div className="space-y-4">
                    <div className="w-20 h-1.5 bg-blue-600 mb-6" />
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-main">
                        {t("security_title")}
                    </h1>
                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                        {t("security_focus")}
                    </p>
                </div>

                {/* Home Lab Highlights */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {t("security_lab_title")}
                    </h2>
                    <div className="bg-card border border-subtle rounded-xl p-6 md:p-8">
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

                {/* Tools */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {t("security_tools_stack_title")}
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">{t("security_tools_title")}</h3>
                            <div className="flex flex-wrap gap-2">
                                {t("security_tools_core").split(",").map((tool, i) => (
                                    <span key={i} className="badge badge-primary">
                                        {tool.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">{t("security_tools_exploring_title")}</h3>
                            <div className="flex flex-wrap gap-2">
                                {t("security_tools_exploring").split(",").map((tool, i) => (
                                    <span key={i} className="badge badge-accent">
                                        {tool.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">{t("security_tools_next_title")}</h3>
                            <div className="flex flex-wrap gap-2">
                                {t("security_tools_next").split(",").map((tool, i) => (
                                    <span key={i} className="badge badge-planned">
                                        {tool.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Studies */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {t("security_cases_title")}
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Case 1: IoT Isolation */}
                        <div className="bg-card border border-subtle rounded-xl p-6 space-y-4">
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

                        {/* Case 2: Remote Access */}
                        <div className="bg-card border border-subtle rounded-xl p-6 space-y-4">
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

                        {/* Case 3: Home Security Lab */}
                        <div className="bg-card border border-subtle rounded-xl p-6 space-y-4 col-span-1 md:col-span-2">
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

                {/* Proof of Work (New Terminal Section) */}
                <section className="space-y-6" role="region" aria-label="Redacted terminal output examples">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            {t("security_pow_title")}
                        </h2>
                        <span className="text-xs text-muted font-mono bg-subtle px-2 py-1 rounded">
                            {t("security_pow_note")}
                        </span>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <TerminalCard
                            title={t("term_ufw_title")}
                            blocks={[{ cmd: t("term_ufw_cmd"), output: t("term_ufw_out") }]}
                        />
                        <TerminalCard
                            title={t("term_pihole_title")}
                            blocks={[{ cmd: t("term_pihole_cmd"), output: t("term_pihole_out") }]}
                        />
                        <TerminalCard
                            title={t("term_wg_title")}
                            blocks={[{ cmd: t("term_wg_cmd"), output: t("term_wg_out") }]}
                            className="lg:col-span-2"
                        />
                    </div>
                </section>

            </section>
        </main>
    );
}
