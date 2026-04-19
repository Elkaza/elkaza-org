"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { projects, type Project, type ProjectCategory } from "../lib/projects";
import { getProjectTagLabel } from "../lib/projectDisplay";
import type { Locale } from "../i18n/messages";

type Copy = {
    eyebrow: string;
    title: string;
    intro: string;
    highlights: string[];
    listEyebrow: string;
    listTitle: string;
    listIntro: string;
    detailsCta: string;
    resultLabel: string;
    categoryLabels: Record<ProjectCategory, string>;
};

const COPY: Record<string, Copy> = {
    en: {
        eyebrow: "Engineering Portfolio",
        title: "Infrastructure, applications, security, automation, and delivery work",
        intro: "This portfolio shows role-relevant work across IT operations, systems administration, application engineering, software automation, cybersecurity-minded infrastructure, project delivery, and business analysis. The projects are written as case studies to show how I approach requirements, system design, troubleshooting, security, and production-minded delivery.",
        highlights: [
            "Systems: Linux, Windows, Proxmox, Docker, DNS, reverse proxying, monitoring",
            "Applications: Next.js, TypeScript, Python, Bash, PowerShell, ServiceNow-style workflows",
            "Delivery: requirements, documentation, handovers, IPMA-oriented project execution, security-aware decisions",
        ],
        listEyebrow: "Latest First",
        listTitle: "Recent project work",
        listIntro: "Projects are ordered from newer to older so the most relevant current work appears first.",
        detailsCta: "View case study",
        resultLabel: "Outcome",
        categoryLabels: {
            "security-infrastructure": "Infrastructure & Security",
            "featured-aiot": "Current IoT & Edge",
            "platform-component": "Platform Component",
            "delivery-platform": "Delivery & Web",
        },
    },
    de: {
        eyebrow: "Portfolio",
        title: "Infrastruktur, Anwendungen, Security, Automatisierung und Delivery",
        intro: "Das Portfolio zeigt rollenrelevante Arbeit ueber IT Operations, Systemadministration, Application Engineering, Software-Automatisierung, cybersecurity-orientierte Infrastruktur, technische Projektumsetzung und Business Analysis hinweg. Die Projekte sind als Fallstudien aufgebaut, um meinen Umgang mit Anforderungen, Systemdesign, Troubleshooting, Sicherheit und produktionsnahem Betrieb zu zeigen.",
        highlights: [
            "Systeme: Linux, Windows, Proxmox, Docker, DNS, Reverse Proxying, Monitoring",
            "Anwendungen: Next.js, TypeScript, Python, Bash, PowerShell, ServiceNow-nahe Workflows",
            "Delivery: Anforderungen, Dokumentation, Uebergaben, IPMA-orientierte Umsetzung, security-bewusste Entscheidungen",
        ],
        listEyebrow: "Neueste zuerst",
        listTitle: "Aktuelle Projektarbeit",
        listIntro: "Die Projekte sind von neuer nach aelter sortiert, damit die aktuellste Arbeit zuerst sichtbar ist.",
        detailsCta: "Fallstudie ansehen",
        resultLabel: "Ergebnis",
        categoryLabels: {
            "security-infrastructure": "Infrastruktur & Sicherheit",
            "featured-aiot": "Aktuelles IoT & Edge",
            "platform-component": "Plattformbaustein",
            "delivery-platform": "Bereitstellung & Web",
        },
    },
    ar: {
        eyebrow: "Engineering Portfolio",
        title: "Infrastructure, applications, security, automation, and delivery work",
        intro: "This portfolio shows role-relevant work across IT operations, systems administration, application engineering, software automation, cybersecurity-minded infrastructure, project delivery, and business analysis. The projects are written as case studies to show how I approach requirements, system design, troubleshooting, security, and production-minded delivery.",
        highlights: [
            "Systems: Linux, Windows, Proxmox, Docker, DNS, reverse proxying, monitoring",
            "Applications: Next.js, TypeScript, Python, Bash, PowerShell, ServiceNow-style workflows",
            "Delivery: requirements, documentation, handovers, IPMA-oriented project execution, security-aware decisions",
        ],
        listEyebrow: "Latest First",
        listTitle: "Recent project work",
        listIntro: "Projects are ordered from newer to older so the most relevant current work appears first.",
        detailsCta: "View case study",
        resultLabel: "Outcome",
        categoryLabels: {
            "security-infrastructure": "Infrastructure & Security",
            "featured-aiot": "Current IoT & Edge",
            "platform-component": "Platform Component",
            "delivery-platform": "Delivery & Web",
        },
    },
};

const CATEGORY_PRIORITY: Record<ProjectCategory, number> = {
    "security-infrastructure": 0,
    "featured-aiot": 1,
    "platform-component": 2,
    "delivery-platform": 3,
};

export default function ProjectsPageContent() {
    const { locale, t } = useLocale();
    const copy = COPY[locale] ?? COPY.en;

    const originalOrder = new Map(projects.map((project, index) => [project.slug, index]));
    const sortedProjects = [...projects].sort((left, right) => {
        const yearDiff = Number(right.year) - Number(left.year);
        if (yearDiff !== 0) {
            return yearDiff;
        }

        const categoryDiff = CATEGORY_PRIORITY[left.category] - CATEGORY_PRIORITY[right.category];
        if (categoryDiff !== 0) {
            return categoryDiff;
        }

        return (originalOrder.get(left.slug) ?? 0) - (originalOrder.get(right.slug) ?? 0);
    });

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300">
            <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
                <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
                    <div className="w-20 h-1.5 bg-blue-600 mb-3" />
                    <h1 className="text-3xl font-bold">{t("nav_projects")}</h1>
                </aside>

                <div className="lg:col-span-9 space-y-14">
                    <section className="border-y border-subtle py-8">
                        <p className="text-xs font-semibold uppercase tracking-normal text-blue-600 dark:text-blue-400">
                            {copy.eyebrow}
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-normal max-w-3xl">
                            {copy.title}
                        </h2>
                        <p className="mt-4 max-w-3xl text-muted leading-relaxed">
                            {copy.intro}
                        </p>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {copy.highlights.map((item) => (
                                <div key={item} className="border-l-2 border-blue-500 pl-4 text-sm text-main">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-normal text-blue-600 dark:text-blue-400">
                                {copy.listEyebrow}
                            </p>
                            <h2 className="text-2xl font-semibold tracking-normal">{copy.listTitle}</h2>
                            <p className="text-muted max-w-3xl">{copy.listIntro}</p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {sortedProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.slug}
                                    locale={locale}
                                    project={project}
                                    ctaLabel={copy.detailsCta}
                                    resultLabel={copy.resultLabel}
                                    categoryLabel={copy.categoryLabels[project.category]}
                                    featured={index === 0}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

function ProjectCard({
    locale,
    project,
    ctaLabel,
    resultLabel,
    categoryLabel,
    featured,
}: {
    locale: Locale;
    project: Project;
    ctaLabel: string;
    resultLabel: string;
    categoryLabel: string;
    featured: boolean;
}) {
    const title = project.title[locale];
    const oneLiner = project.oneLiner[locale];
    const primaryResult = project.results[locale][0];

    return (
        <article
            className={[
                "group rounded-lg border border-subtle bg-card p-6 shadow-sm transition-colors hover:border-blue-400 dark:hover:border-blue-600",
                featured ? "lg:col-span-2 md:p-7" : "",
            ].join(" ")}
        >
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-normal text-muted">
                    <span className="rounded-full border border-subtle px-3 py-1 text-[11px] tracking-normal text-main">
                        {categoryLabel}
                    </span>
                    <span>{project.year}</span>
                </div>
                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex shrink-0 items-center whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400"
                >
                    {ctaLabel}
                    <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-normal md:text-2xl">{title}</h3>

            <p className="mt-4 text-main leading-relaxed">{oneLiner}</p>

            <p className="mt-3 text-sm text-muted leading-relaxed">
                <span className="font-medium text-main">{resultLabel}:</span> {primaryResult}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="badge badge-neutral">
                        {getProjectTagLabel(tag, locale)}
                    </span>
                ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.slice(0, featured ? 6 : 4).map((tech) => (
                    <span key={tech} className="rounded-md border border-subtle px-2.5 py-1 text-xs text-muted">
                        {tech}
                    </span>
                ))}
            </div>
        </article>
    );
}
