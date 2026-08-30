"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { ProjectStatusBadge } from "./ui/ProjectStatusBadge";
import { TechBadge } from "./ui/TechBadge";
import { BodyLarge, CardTitle, Eyebrow, PageTitle, SectionTitle } from "./ui/Typography";
import { projects, type Project } from "../lib/projects";
import { getLocalizedPath, type ActiveLocale } from "../lib/localizedRoutes";
import type { Locale } from "../i18n/messages";

type ProjectDomain =
    | "iot-edge-ai"
    | "infrastructure-devops"
    | "software-engineering"
    | "data-automation";

type Copy = {
    title: string;
    subtitle: string;
    featuredTitle: string;
    browseTitle: string;
    archive: string;
    caseStudy: string;
    github: string;
    live: string;
    result: string;
    tech: string;
    year: string;
    domains: Record<ProjectDomain, string>;
};

const FEATURED_PROJECT_SLUGS = [
    "enterprise-self-hosted-infrastructure",
    "edgeguardian-edge-ai-safety-bubble",
    "tinyml-vibration-anomaly-detection",
];

const CURATED_PROJECT_SLUGS = [
    "rpi-ble-mqtt-gateway",
    "austria-tourism-dashboard",
    "random-walk-gravity-regression",
    "elkaza-org",
];

const PROJECT_DOMAINS: Partial<Record<string, ProjectDomain>> = {
    "edgeguardian-edge-ai-safety-bubble": "iot-edge-ai",
    "tinyml-vibration-anomaly-detection": "iot-edge-ai",
    "rpi-ble-mqtt-gateway": "iot-edge-ai",
    "ble-edge-gateway": "iot-edge-ai",
    "freertos-sensor": "iot-edge-ai",
    "enterprise-self-hosted-infrastructure": "infrastructure-devops",
    "vienna-fortress": "infrastructure-devops",
    "home-security-lab": "infrastructure-devops",
    "self-hosted-cloud": "infrastructure-devops",
    "elkaza-org": "software-engineering",
    "elkaza-at": "software-engineering",
    "austria-tourism-dashboard": "data-automation",
    "random-walk-gravity-regression": "data-automation",
    "iot-sensor-data-pipeline": "data-automation",
};

const SHORT_TITLES: Record<string, Record<Locale, string>> = {
    "edgeguardian-edge-ai-safety-bubble": {
        en: "EdgeGuardian",
        de: "EdgeGuardian",
        ar: "EdgeGuardian",
    },
    "enterprise-self-hosted-infrastructure": {
        en: "Self-Hosted Infrastructure",
        de: "Self-Hosted Infrastructure",
        ar: "Self-Hosted Infrastructure",
    },
    "elkaza-org": {
        en: "Portfolio Platform",
        de: "Portfolio Platform",
        ar: "Portfolio Platform",
    },
    "tinyml-vibration-anomaly-detection": {
        en: "TinyML Vibration Detection",
        de: "TinyML Vibration Detection",
        ar: "TinyML Vibration Detection",
    },
    "rpi-ble-mqtt-gateway": {
        en: "BLE MQTT Monitoring",
        de: "BLE-MQTT-Monitoring",
        ar: "BLE MQTT Monitoring",
    },
    "iot-sensor-data-pipeline": {
        en: "Telemetry Dashboard Layer",
        de: "Telemetry Dashboard Layer",
        ar: "Telemetry Dashboard Layer",
    },
    "freertos-sensor": {
        en: "FreeRTOS Sensor Node",
        de: "FreeRTOS-Sensorknoten",
        ar: "FreeRTOS Sensor Node",
    },
};

const FEATURED_SUMMARIES: Record<string, Record<Locale, string>> = {
    "edgeguardian-edge-ai-safety-bubble": {
        en: "Edge AI safety monitoring with camera, LiDAR, and local decision logic.",
        de: "Edge-AI-Sicherheitsmonitoring mit Kamera, LiDAR und lokaler Entscheidungslogik.",
        ar: "Edge AI safety monitoring with camera, LiDAR, and local decision logic.",
    },
    "enterprise-self-hosted-infrastructure": {
        en: "Hybrid Linux infrastructure with public VPS ingress, private Tailscale administration, Ansible-managed configuration, monitoring and tested recovery.",
        de: "Hybride Linux-Infrastruktur mit öffentlichem VPS-Ingress, privater Tailscale-Administration, Ansible-verwalteter Konfiguration, Monitoring und getesteter Wiederherstellung.",
        ar: "Hybrid Linux infrastructure with public VPS ingress, private Tailscale administration, Ansible-managed configuration, monitoring and tested recovery.",
    },
    "tinyml-vibration-anomaly-detection": {
        en: "Embedded vibration classification from IMU features through model export and device-side inference.",
        de: "Embedded-Vibrationsklassifikation von IMU-Features bis Modellexport und Inferenz auf dem Gerät.",
        ar: "Embedded vibration classification from IMU features through model export and device-side inference.",
    },
    "elkaza-org": {
        en: "Multilingual TypeScript portfolio platform with structured content and CI-enabled publishing.",
        de: "Mehrsprachige TypeScript-Portfolio-Plattform mit strukturierten Inhalten und CI-gestütztem Publishing.",
        ar: "Multilingual TypeScript portfolio platform with structured content and CI-enabled publishing.",
    },
};

const CARD_SUMMARIES: Record<string, Record<Locale, string>> = {
    "tinyml-vibration-anomaly-detection": {
        en: "Runs real-time vibration classification on Arduino IMU data.",
        de: "Klassifiziert Vibrationen in Echtzeit aus Arduino-IMU-Daten.",
        ar: "Runs real-time vibration classification on Arduino IMU data.",
    },
    "rpi-ble-mqtt-gateway": {
        en: "Collects BLE sensor data and moves it through a secured MQTT path.",
        de: "Erfasst BLE-Sensordaten und transportiert sie über einen abgesicherten MQTT-Pfad.",
        ar: "Collects BLE sensor data and moves it through a secured MQTT path.",
    },
    "ble-edge-gateway": {
        en: "Containerized BLE gateway that forwards sensor data into an edge pipeline.",
        de: "Containerisiertes BLE-Gateway für Sensordaten in einer Edge-Pipeline.",
        ar: "Containerized BLE gateway that forwards sensor data into an edge pipeline.",
    },
    "freertos-sensor": {
        en: "FreeRTOS sensor node for structured embedded telemetry.",
        de: "FreeRTOS-Sensorknoten für strukturierte Embedded-Telemetrie.",
        ar: "FreeRTOS sensor node for structured embedded telemetry.",
    },
    "vienna-fortress": {
        en: "Hardened Proxmox and Docker operations platform.",
        de: "Gehärtete Proxmox- und Docker-Betriebsplattform.",
        ar: "Hardened Proxmox and Docker operations platform.",
    },
    "home-security-lab": {
        en: "Layered security lab with DNS filtering, access control, and monitoring.",
        de: "Mehrschichtiges Security-Lab mit DNS-Filterung, Zugriffspfaden und Monitoring.",
        ar: "Layered security lab with DNS filtering, access control, and monitoring.",
    },
    "self-hosted-cloud": {
        en: "Private cloud stack for files, sync, and controlled access.",
        de: "Private Cloud-Umgebung für Dateien, Sync und kontrollierten Zugriff.",
        ar: "Private cloud stack for files, sync, and controlled access.",
    },
    "elkaza-at": {
        en: "Static Next.js site with lightweight deployment workflow.",
        de: "Statische Next.js-Seite mit leichtgewichtigem Deployment-Workflow.",
        ar: "Static Next.js site with lightweight deployment workflow.",
    },
    "austria-tourism-dashboard": {
        en: "Python-generated dashboard for Austrian tourism analysis.",
        de: "Python-generiertes Dashboard für österreichische Tourismusanalyse.",
        ar: "Python-generated dashboard for Austrian tourism analysis.",
    },
    "random-walk-gravity-regression": {
        en: "Regression workflow for random-walk gravity simulation data.",
        de: "Regressionsworkflow für Random-Walk-Gravity-Simulationsdaten.",
        ar: "Regression workflow for random-walk gravity simulation data.",
    },
    "iot-sensor-data-pipeline": {
        en: "Telemetry dashboard layer for MQTT, storage, and visualization.",
        de: "Telemetry-Dashboard-Layer für MQTT, Speicherung und Visualisierung.",
        ar: "Telemetry dashboard layer for MQTT, storage, and visualization.",
    },
};

const CARD_RESULTS: Record<string, Record<Locale, string>> = {
    "edgeguardian-edge-ai-safety-bubble": {
        en: "Local SAFE / WARNING / ALERT monitoring with camera, LiDAR, dashboard, and logs.",
        de: "Lokales SAFE / WARNING / ALERT-Monitoring mit Kamera, LiDAR, Dashboard und Logs.",
        ar: "Local SAFE / WARNING / ALERT monitoring with camera, LiDAR, dashboard, and logs.",
    },
    "enterprise-self-hosted-infrastructure": {
        en: "Public and private paths are separated, configuration is repeatable, and application/data recovery has been rehearsed against an isolated target.",
        de: "Öffentliche und private Pfade sind getrennt, Konfigurationen sind wiederholbar, und die Wiederherstellung von Anwendungen und Daten wurde gegen ein isoliertes Ziel geprobt.",
        ar: "Public and private paths are separated, configuration is repeatable, and application/data recovery has been rehearsed against an isolated target.",
    },
    "tinyml-vibration-anomaly-detection": {
        en: "The Arduino demo shows NORMAL, ANOMALY, and ALERT states with recovery to NORMAL.",
        de: "Die Arduino-Demo zeigt NORMAL-, ANOMALY- und ALERT-Zustände mit Rückkehr zu NORMAL.",
        ar: "The Arduino demo shows NORMAL, ANOMALY, and ALERT states with recovery to NORMAL.",
    },
};

const COPY: Record<Locale, Copy> = {
    en: {
        title: "Engineering Case Studies",
        subtitle: "A curated set of implemented systems across software engineering, IoT, edge AI, infrastructure, and data automation.",
        featuredTitle: "Featured Case Studies",
        browseTitle: "More Projects",
        archive: "View Archive",
        caseStudy: "Case Study",
        github: "GitHub",
        live: "Live",
        result: "Result",
        tech: "Tech",
        year: "Year",
        domains: {
            "iot-edge-ai": "IoT & Edge AI",
            "infrastructure-devops": "Infrastructure & DevOps",
            "software-engineering": "Software Engineering",
            "data-automation": "Data & Automation",
        },
    },
    de: {
        title: "Technische Fallstudien",
        subtitle: "Kuratierte technische Fallstudien aus Software Engineering, IoT, Edge AI, Infrastruktur und Datenautomatisierung.",
        featuredTitle: "Ausgewählte Fallstudien",
        browseTitle: "Weitere Projekte",
        archive: "Archiv ansehen",
        caseStudy: "Fallstudie",
        github: "GitHub",
        live: "Live",
        result: "Ergebnis",
        tech: "Tech",
        year: "Jahr",
        domains: {
            "iot-edge-ai": "IoT & Edge AI",
            "infrastructure-devops": "Infrastructure & DevOps",
            "software-engineering": "Software Engineering",
            "data-automation": "Data & Automation",
        },
    },
    ar: {
        title: "Engineering Projects",
        subtitle: "Selected case studies across software engineering, IoT, edge AI, infrastructure, and data automation.",
        featuredTitle: "Featured Case Studies",
        browseTitle: "More Projects",
        archive: "View Archive",
        caseStudy: "Case Study",
        github: "GitHub",
        live: "Live",
        result: "Result",
        tech: "Tech",
        year: "Year",
        domains: {
            "iot-edge-ai": "IoT & Edge AI",
            "infrastructure-devops": "Infrastructure & DevOps",
            "software-engineering": "Software Engineering",
            "data-automation": "Data & Automation",
        },
    },
};

export default function ProjectsPageContent() {
    const { locale } = useLocale();
    const activeLocale = locale === "en" ? "en" : "de";
    const copy = COPY[locale] ?? COPY.en;
    const featuredProjects = FEATURED_PROJECT_SLUGS
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is Project => Boolean(project));
    const curatedProjects = CURATED_PROJECT_SLUGS
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is Project => Boolean(project));
    const statsLine =
        locale === "de"
            ? `${featuredProjects.length} ausgewählte Fallstudien · ${curatedProjects.length} weitere Projekte · vollständiges Archiv`
            : `${featuredProjects.length} featured case studies · ${curatedProjects.length} additional projects · complete archive`;

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300">
            <div className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-8 sm:px-6 md:py-14">
                <section className="border-b border-subtle pb-8">
                    <div>
                        <Eyebrow>{locale === "de" ? "Projektportfolio" : "Project portfolio"}</Eyebrow>
                        <PageTitle className="mt-4 md:text-5xl">{copy.title}</PageTitle>
                        <BodyLarge className="mt-4 max-w-2xl text-muted">{copy.subtitle}</BodyLarge>
                        <p className="mt-6 border-y border-subtle py-3 text-sm font-semibold text-secondary">
                            {statsLine}
                        </p>
                    </div>
                </section>

                <section className="py-8 md:py-10">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <SectionTitle>{copy.featuredTitle}</SectionTitle>
                    </div>
                    <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
                        {featuredProjects.map((project) => (
                            <FeaturedProjectCard
                                key={project.slug}
                                locale={locale}
                                project={project}
                                copy={copy}
                                activeLocale={activeLocale}
                            />
                        ))}
                    </div>
                </section>

                <section className="border-t border-subtle pt-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <SectionTitle>{copy.browseTitle}</SectionTitle>
                        <Link href={getLocalizedPath("/archives", activeLocale)} className="inline-flex shrink-0 items-center text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300">{copy.archive}<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
                        {curatedProjects.map((project) => (
                            <CompactProjectCard
                                key={project.slug}
                                locale={locale}
                                project={project}
                                copy={copy}
                                activeLocale={activeLocale}
                            />
                        ))}
                    </div>
                    <Link href={getLocalizedPath("/archives", activeLocale)} className="mt-6 inline-flex items-center font-semibold text-blue-700 hover:underline dark:text-blue-300">{copy.archive}<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></Link>
                </section>
            </div>
        </main>
    );
}

function FeaturedProjectCard({
    locale,
    project,
    copy,
    activeLocale,
}: {
    locale: Locale;
    project: Project;
    copy: Copy;
    activeLocale: ActiveLocale;
}) {
    const githubLink = project.links.find((link) => link.url.includes("github.com"));
    const liveLink = project.links.find((link) => !link.url.includes("github.com"));
    const result = project.results[locale][0];

    return (
        <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-subtle bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-950/5 dark:hover:border-blue-500">
            <ProjectVisual project={project} featured />
            <div className="flex flex-1 flex-col p-5">
                <ProjectMeta copy={copy} locale={locale} project={project} />
                <CardTitle className="text-xl">{getShortTitle(project, locale)}</CardTitle>
                <p className="mt-3 break-words text-sm leading-relaxed text-muted">
                    {FEATURED_SUMMARIES[project.slug]?.[locale] ?? compactText(project.oneLiner[locale], 145)}
                </p>

                {result && (
                    <p className="mt-4 break-words text-sm leading-relaxed text-main">
                        <span className="font-medium">{copy.result}:</span> {getCardResult(project, locale, result)}
                    </p>
                )}

                <div className="mt-5">
                    <p className="sr-only">{copy.tech}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                            <TechBadge key={tech} name={tech} />
                        ))}
                        {project.tech.length > 4 && (
                            <span className="inline-flex items-center rounded-md border border-subtle bg-page px-2.5 py-1 text-xs font-medium text-muted">
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <Link
                        href={getLocalizedPath(`/projects/${project.slug}`, activeLocale)}
                        className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        {copy.caseStudy}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    {githubLink && (
                        <a
                            href={githubLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-md border border-subtle px-3 py-2 text-sm font-medium text-main transition-colors hover:border-blue-500 hover:bg-page"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            {copy.github}
                        </a>
                    )}
                    {!githubLink && liveLink && (
                        <a
                            href={liveLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-md border border-subtle px-3 py-2 text-sm font-medium text-main transition-colors hover:border-blue-500 hover:bg-page"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {copy.live}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

function CompactProjectCard({
    locale,
    project,
    copy,
    activeLocale,
}: {
    locale: Locale;
    project: Project;
    copy: Copy;
    activeLocale: ActiveLocale;
}) {
    const result = project.results[locale][0];

    return (
        <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-subtle bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:hover:border-blue-500">
            <ProjectVisual project={project} />
            <div className="flex flex-1 flex-col p-4">
                <ProjectMeta copy={copy} locale={locale} project={project} compact />
                <CardTitle className="text-base">{getShortTitle(project, locale)}</CardTitle>
                <p className="mt-2 break-words text-sm leading-relaxed text-muted sm:min-h-[3rem]">
                    {getCardSummary(project, locale)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                    {project.tech.length > 3 && (
                        <span className="inline-flex items-center rounded-md border border-subtle bg-page px-2.5 py-1 text-xs font-medium text-muted">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>
                {result && (
                    <p className="mt-4 break-words text-sm leading-relaxed text-main">
                        <span className="font-medium">{copy.result}:</span> {getCardResult(project, locale, result)}
                    </p>
                )}
                <Link
                    href={getLocalizedPath(`/projects/${project.slug}`, activeLocale)}
                    className="mt-auto inline-flex w-fit items-center rounded-md border border-subtle px-3 py-2 text-sm font-semibold text-blue-800 transition-colors hover:border-blue-500 hover:bg-page dark:text-blue-200"
                >
                    {copy.caseStudy}
                    <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </article>
    );
}

function ProjectMeta({
    copy,
    locale,
    project,
    compact = false,
}: {
    copy: Copy;
    locale: Locale;
    project: Project;
    compact?: boolean;
}) {
    return (
        <div className={`mb-3 flex flex-wrap items-center gap-2 ${compact ? "text-[11px]" : "text-xs"}`}>
            <span className="rounded-full border border-subtle bg-page px-2.5 py-1 font-semibold text-muted">
                {copy.domains[getProjectDomain(project)]}
            </span>
            <ProjectStatusBadge status={project.status} locale={locale} size="xs" />
            <span className="rounded-full border border-subtle bg-page px-2.5 py-1 font-semibold text-muted">
                {copy.year}: {project.year}
            </span>
        </div>
    );
}

function ProjectVisual({
    project,
    featured = false,
}: {
    project: Project;
    featured?: boolean;
}) {
    const src = project.diagrams?.[0]?.src ?? project.images?.[0];

    if (src) {
        return (
            <div
                className={[
                    "w-full min-w-0 border-b border-subtle bg-gradient-to-br from-slate-50 via-white to-blue-50/40",
                    featured ? "h-44 p-3 sm:h-52 sm:p-4" : "h-28 p-3 sm:h-32",
                ].join(" ")}
            >
                <div className="h-full w-full overflow-hidden rounded-md border border-subtle bg-white shadow-inner shadow-slate-200/60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt={`${project.title.en} visual`}
                        className="h-full w-full object-contain p-2"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={[
            "w-full min-w-0 border-b border-subtle bg-page p-4",
            featured ? "h-44 sm:h-52" : "h-28 sm:h-32",
        ].join(" ")}
        >
            <div className="h-full rounded-lg border border-subtle bg-card p-3">
                <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-4 grid grid-cols-[0.8fr_1fr] gap-3">
                    <div className="space-y-2">
                        <span className="block h-2 rounded-full bg-blue-500/60" />
                        <span className="block h-2 w-10/12 rounded-full bg-slate-400/40" />
                        <span className="block h-2 w-7/12 rounded-full bg-slate-400/30" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <span className="h-8 rounded-md border border-subtle bg-page" />
                        <span className="h-8 rounded-md border border-subtle bg-page" />
                        <span className="h-8 rounded-md border border-subtle bg-page" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function getProjectDomain(project: Project): ProjectDomain {
    const mappedDomain = PROJECT_DOMAINS[project.slug];
    if (mappedDomain) {
        return mappedDomain;
    }

    if (project.category === "featured-aiot") {
        return "iot-edge-ai";
    }

    if (project.category === "security-infrastructure") {
        return "infrastructure-devops";
    }

    if (project.category === "delivery-platform") {
        return "software-engineering";
    }

    return "data-automation";
}

function getShortTitle(project: Project, locale: Locale) {
    return SHORT_TITLES[project.slug]?.[locale] ?? project.title[locale];
}

function getCardSummary(project: Project, locale: Locale) {
    return CARD_SUMMARIES[project.slug]?.[locale] ?? compactText(project.oneLiner[locale], 150);
}

function getCardResult(project: Project, locale: Locale, result: string) {
    return CARD_RESULTS[project.slug]?.[locale] ?? compactText(result, 145);
}

function compactText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text;
    }

    const clipped = text.slice(0, maxLength).trimEnd();
    const lastSpace = clipped.lastIndexOf(" ");

    return clipped.slice(0, lastSpace > 60 ? lastSpace : maxLength).replace(/[,:;.-]+$/u, "").trimEnd();
}
