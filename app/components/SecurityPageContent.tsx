"use client";
import React from "react";
import {
    Activity,
    CheckCircle2,
    Database,
    ExternalLink,
    Layers,
    Lock,
    Monitor,
    Network,
    Server,
    Shield,
    type LucideIcon,
} from "lucide-react";
import { useLocale } from "../LocaleProvider";
import Link from "next/link";
import { TechLogo } from "./ui/TechBadge";

type ToolItem = {
    name: string;
    roleKey: string;
};

type ToolGroup = {
    titleKey: string;
    descriptionKey: string;
    Icon: LucideIcon;
    tools: ToolItem[];
};

const architectureSteps = [
    "security_arch_public_web",
    "security_arch_vps_ingress",
    "security_arch_tailscale",
    "security_arch_private_runtime",
    "security_arch_docker_services",
];

const statusChips = [
    "security_status_private_access",
    "security_status_reduced_exposure",
    "security_status_first_party_analytics",
    "security_status_monitoring",
    "security_status_backup_ready",
];

const toolGroups: ToolGroup[] = [
    {
        titleKey: "security_tools_access_title",
        descriptionKey: "security_tools_access_desc",
        Icon: Network,
        tools: [
            { name: "Tailscale", roleKey: "security_tool_tailscale_role" },
            { name: "UFW", roleKey: "security_tool_ufw_role" },
            { name: "Nginx Proxy Manager", roleKey: "security_tool_npm_role" },
        ],
    },
    {
        titleKey: "security_tools_defense_title",
        descriptionKey: "security_tools_defense_desc",
        Icon: Shield,
        tools: [
            { name: "Pi-hole", roleKey: "security_tool_pihole_role" },
            { name: "CrowdSec", roleKey: "security_tool_crowdsec_role" },
        ],
    },
    {
        titleKey: "security_tools_data_title",
        descriptionKey: "security_tools_data_desc",
        Icon: Database,
        tools: [
            { name: "Plausible Analytics", roleKey: "security_tool_plausible_role" },
            { name: "PostgreSQL", roleKey: "security_tool_postgres_role" },
            { name: "ClickHouse", roleKey: "security_tool_clickhouse_role" },
        ],
    },
    {
        titleKey: "security_tools_observability_title",
        descriptionKey: "security_tools_observability_desc",
        Icon: Activity,
        tools: [
            { name: "Netdata", roleKey: "security_tool_netdata_role" },
            { name: "Uptime Kuma", roleKey: "security_tool_uptime_role" },
            { name: "Dozzle", roleKey: "security_tool_dozzle_role" },
        ],
    },
    {
        titleKey: "security_tools_operations_title",
        descriptionKey: "security_tools_operations_desc",
        Icon: Server,
        tools: [
            { name: "Portainer", roleKey: "security_tool_portainer_role" },
            { name: "Watchtower", roleKey: "security_tool_watchtower_role" },
        ],
    },
];

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
                    <p className="max-w-2xl rounded-md border border-subtle bg-card px-4 py-3 text-sm leading-relaxed text-muted">
                        {t("sec_public_note")}
                    </p>
                </div>

                <SecurityArchitectureDiagram t={t} />

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        {t("security_lab_title")}
                    </h2>

                    <div className="space-y-5">
                        <ArchitectureSnapshot t={t} />
                        <StatusChips t={t} />
                        <p className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100">
                            {t("security_verification_note")}
                        </p>
                        <ToolGroupGrid t={t} />
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

function SecurityArchitectureDiagram({ t }: { t: (key: string) => string }) {
    const diagramSrc = "/project-diagrams/security-platform-operations-overview.svg";

    return (
        <section className="space-y-4" aria-labelledby="security-platform-diagram">
            <div className="flex flex-col gap-3 border-y border-subtle py-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h2 id="security-platform-diagram" className="text-2xl font-semibold tracking-normal">
                            {t("security_diagram_title")}
                        </h2>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                        {t("security_diagram_desc")}
                    </p>
                </div>
                <a
                    href={diagramSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center self-start whitespace-nowrap rounded-md border border-subtle px-3 py-2 text-sm font-medium text-main transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 md:self-auto"
                >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("security_diagram_open")}
                </a>
            </div>
            <figure className="overflow-hidden rounded-lg border border-subtle bg-card shadow-sm">
                <div className="overflow-x-auto bg-white p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={diagramSrc}
                        alt={t("security_diagram_alt")}
                        className="w-full min-w-[860px] max-w-none rounded-md"
                    />
                </div>
            </figure>
        </section>
    );
}

function ArchitectureSnapshot({ t }: { t: (key: string) => string }) {
    return (
        <section className="rounded-lg border border-subtle bg-card p-5 shadow-sm md:p-6" aria-labelledby="security-architecture-snapshot">
            <div className="mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 id="security-architecture-snapshot" className="text-base font-semibold text-main">
                    {t("security_arch_title")}
                </h3>
            </div>
            <ol className="flex flex-col gap-2 md:flex-row md:items-center">
                {architectureSteps.map((stepKey, index) => (
                    <li key={stepKey} className="flex items-center gap-2 md:flex-1">
                        <div className="flex min-h-14 flex-1 items-center rounded-md border border-subtle bg-page px-3 py-2 text-sm font-medium text-main">
                            {t(stepKey)}
                        </div>
                        {index < architectureSteps.length - 1 && (
                            <span className="flex w-6 shrink-0 items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400" aria-hidden="true">
                                <span className="hidden md:inline">→</span>
                                <span className="md:hidden">↓</span>
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    );
}

function StatusChips({ t }: { t: (key: string) => string }) {
    return (
        <div className="flex flex-wrap gap-2" aria-label={t("security_status_label")}>
            {statusChips.map((chipKey) => (
                <span
                    key={chipKey}
                    className="rounded-md border border-subtle bg-card px-3 py-1.5 text-xs font-semibold text-main shadow-sm"
                >
                    {t(chipKey)}
                </span>
            ))}
        </div>
    );
}

function ToolGroupGrid({ t }: { t: (key: string) => string }) {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {toolGroups.map((group) => (
                <article key={group.titleKey} className="rounded-lg border border-subtle bg-card p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                        <span
                            role="img"
                            aria-label={`${t(group.titleKey)} ${t("security_icon_label")}`}
                            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300"
                        >
                            <group.Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                            <h3 className="text-base font-semibold text-main">{t(group.titleKey)}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted">{t(group.descriptionKey)}</p>
                        </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                        {group.tools.map((tool) => (
                            <li key={tool.name} className="flex items-start gap-3">
                                <span
                                    role="img"
                                    aria-label={`${tool.name} ${t("security_icon_label")}`}
                                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-subtle bg-page text-blue-700 dark:text-blue-300"
                                >
                                    <TechLogo name={tool.name} className="h-3.5 w-3.5" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-sm font-semibold text-main">{tool.name}</span>
                                    <span className="block text-sm leading-relaxed text-muted">{t(tool.roleKey)}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    );
}
