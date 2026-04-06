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
        title: "Infrastructure, systems, security, and ongoing IoT work",
        intro: "This portfolio combines operational IT, infrastructure, networking, automation, self-hosted platforms, and current IoT and edge work. The projects are presented as case studies to show how I approach system design, troubleshooting, security, and delivery across different contexts.",
        highlights: [
            "Operations: support-minded system work, troubleshooting, virtualization, monitoring",
            "Infrastructure: Linux services, networking, DNS, reverse proxy, segmentation",
            "Ongoing specialization: IoT nodes, edge gateways, telemetry, secure connectivity",
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
        title: "Infrastruktur, Systeme, Sicherheit und laufende IoT-Arbeit",
        intro: "Das Portfolio verbindet operativen IT-Betrieb, Infrastruktur, Netzwerke, Automatisierung, Self-hosted-Plattformen und aktuelle IoT- und Edge-Arbeit. Die Projekte sind als Fallstudien aufgebaut, um meinen Umgang mit Systemdesign, Troubleshooting, Sicherheit und Delivery in unterschiedlichen Kontexten zu zeigen.",
        highlights: [
            "Betrieb: Support-nahes Systemarbeiten, Troubleshooting, Virtualisierung, Monitoring",
            "Infrastruktur: Linux-Services, Netzwerke, DNS, Reverse Proxy, Segmentierung",
            "Laufende Spezialisierung: IoT-Knoten, Edge-Gateways, Telemetrie, sichere Konnektivitaet",
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
        title: "Infrastructure, systems, security, and ongoing IoT work",
        intro: "This portfolio combines operational IT, infrastructure, networking, automation, self-hosted platforms, and current IoT and edge work. The projects are presented as case studies to show how I approach system design, troubleshooting, security, and delivery across different contexts.",
        highlights: [
            "Operations: support-minded system work, troubleshooting, virtualization, monitoring",
            "Infrastructure: Linux services, networking, DNS, reverse proxy, segmentation",
            "Ongoing specialization: IoT nodes, edge gateways, telemetry, secure connectivity",
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
                    <section className="rounded-2xl border border-subtle bg-card p-8 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                            {copy.eyebrow}
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
                            {copy.title}
                        </h2>
                        <p className="mt-4 max-w-3xl text-muted leading-relaxed">
                            {copy.intro}
                        </p>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {copy.highlights.map((item) => (
                                <div key={item} className="rounded-xl border border-subtle bg-page/60 p-4 text-sm text-main">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                {copy.listEyebrow}
                            </p>
                            <h2 className="text-2xl font-semibold tracking-tight">{copy.listTitle}</h2>
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
                "group rounded-2xl border border-subtle bg-card p-6 shadow-sm transition-colors hover:border-blue-400 dark:hover:border-blue-600",
                featured ? "lg:col-span-2 md:p-7" : "",
            ].join(" ")}
        >
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    <span className="rounded-full border border-subtle px-3 py-1 text-[11px] tracking-[0.14em] text-main">
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

            <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>

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
