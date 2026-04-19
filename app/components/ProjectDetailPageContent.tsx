"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
    Activity,
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    ExternalLink,
    Github,
    Layers,
    Shield,
    Target,
    Waypoints,
    Wrench,
    type LucideIcon,
} from "lucide-react";
import { notFound } from "next/navigation";
import { useLocale } from "@/app/LocaleProvider";
import { projects } from "@/app/lib/projects";
import { getProjectTagLabel } from "@/app/lib/projectDisplay";
import type { Locale } from "@/app/i18n/messages";

type DetailCopy = {
    category: Record<string, string>;
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    node: string;
    edge: string;
    cloud: string;
    security: string;
    reliability: string;
    features: string;
    results: string;
    tech: string;
    artifacts: string;
    related: string;
    relatedDescription: string;
    githubLabel: string;
    externalLabel: string;
};

const COPY: Record<string, DetailCopy> = {
    en: {
        category: {
            "featured-aiot": "Current IoT and Edge Project",
            "platform-component": "Platform Component",
            "security-infrastructure": "Infrastructure and Security",
            "delivery-platform": "Delivery Platform",
        },
        overview: "Overview",
        problem: "Problem",
        solution: "Solution",
        architecture: "Architecture",
        node: "Node",
        edge: "Edge",
        cloud: "Cloud",
        security: "Security",
        reliability: "Reliability",
        features: "Key Features",
        results: "Results and Impact",
        tech: "Tech Stack",
        artifacts: "Artifacts",
        related: "Related Project",
        relatedDescription: "Follow the adjacent case study to see how this project fits into the wider portfolio narrative.",
        githubLabel: "View source on GitHub",
        externalLabel: "Open link",
    },
    de: {
        category: {
            "featured-aiot": "Aktuelles IoT- und Edge-Projekt",
            "platform-component": "Plattformbaustein",
            "security-infrastructure": "Infrastruktur und Sicherheit",
            "delivery-platform": "Bereitstellung und Web",
        },
        overview: "Ueberblick",
        problem: "Problem",
        solution: "Loesung",
        architecture: "Architektur",
        node: "Node",
        edge: "Edge",
        cloud: "Cloud",
        security: "Sicherheit",
        reliability: "Zuverlaessigkeit",
        features: "Wesentliche Merkmale",
        results: "Ergebnisse und Wirkung",
        tech: "Tech-Stack",
        artifacts: "Artefakte",
        related: "Verwandtes Projekt",
        relatedDescription: "Die angrenzende Fallstudie zeigt, wie dieses Projekt in die groessere Portfolio-Story passt.",
        githubLabel: "Quellcode auf GitHub ansehen",
        externalLabel: "Link oeffnen",
    },
    ar: {
        category: {
            "featured-aiot": "Current IoT and Edge Project",
            "platform-component": "Platform Component",
            "security-infrastructure": "Infrastructure and Security",
            "delivery-platform": "Delivery Platform",
        },
        overview: "Overview",
        problem: "Problem",
        solution: "Solution",
        architecture: "Architecture",
        node: "Node",
        edge: "Edge",
        cloud: "Cloud",
        security: "Security",
        reliability: "Reliability",
        features: "Key Features",
        results: "Results and Impact",
        tech: "Tech Stack",
        artifacts: "Artifacts",
        related: "Related Project",
        relatedDescription: "Follow the adjacent case study to see how this project fits into the wider portfolio narrative.",
        githubLabel: "View source on GitHub",
        externalLabel: "Open link",
    },
};

export default function ProjectDetailPageContent({ slug }: { slug: string }) {
    const { locale, t } = useLocale();
    const copy = COPY[locale] ?? COPY.en;
    const project = projects.find((entry) => entry.slug === slug);

    if (!project) {
        notFound();
        return null;
    }

    const relatedProject = project.relatedProjectSlug
        ? projects.find((entry) => entry.slug === project.relatedProjectSlug)
        : undefined;

    const localized = <T extends string | string[]>(value: Record<Locale, T>) => value[locale];

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300 py-12 px-6">
            <article className="max-w-5xl mx-auto space-y-10">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("nav_projects")}
                </Link>

                <header className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                        <span className="rounded-full border border-subtle px-3 py-1">
                            {copy.category[project.category]}
                        </span>
                        <span>{project.year}</span>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-normal">
                            {localized(project.title)}
                        </h1>
                        <p className="max-w-3xl text-lg md:text-xl text-muted leading-relaxed">
                            {localized(project.oneLiner)}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="badge badge-neutral">
                                {getProjectTagLabel(tag, locale)}
                            </span>
                        ))}
                    </div>
                </header>

                {project.images && project.images.length > 0 && (
                    project.images.length === 1 ? (
                        <section className="rounded-lg border border-subtle bg-card p-2 md:p-3 shadow-sm">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.images[0]}
                                alt={`${project.title.en} dashboard screenshot`}
                                className="w-full h-auto rounded-lg"
                            />
                        </section>
                    ) : (
                        <section className="grid gap-4 md:grid-cols-2">
                            {project.images.map((image, index) => (
                                <div key={image} className="overflow-hidden rounded-lg border border-subtle bg-card p-2 shadow-sm">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={image}
                                        alt={`${project.title.en} image ${index + 1}`}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            ))}
                        </section>
                    )
                )}

                <div className="grid gap-6 lg:grid-cols-2">
                    <DetailCard icon={Layers} title={copy.overview}>
                        <p className="text-main leading-relaxed">{localized(project.overview)}</p>
                    </DetailCard>

                    <DetailCard icon={Target} title={copy.problem}>
                        <p className="text-main leading-relaxed">{localized(project.problem)}</p>
                    </DetailCard>
                </div>

                <DetailCard icon={Wrench} title={copy.solution}>
                    <p className="text-main leading-relaxed">{localized(project.solution)}</p>
                </DetailCard>

                <section className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Waypoints className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-2xl font-semibold tracking-normal">{copy.architecture}</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        <ArchitectureCard
                            title={project.architectureLabels ? localized(project.architectureLabels.node) : copy.node}
                            body={localized(project.architecture.node)}
                        />
                        <ArchitectureCard
                            title={project.architectureLabels ? localized(project.architectureLabels.edge) : copy.edge}
                            body={localized(project.architecture.edge)}
                        />
                        <ArchitectureCard
                            title={project.architectureLabels ? localized(project.architectureLabels.cloud) : copy.cloud}
                            body={localized(project.architecture.cloud)}
                        />
                    </div>
                </section>

                <div className="grid gap-6 lg:grid-cols-2">
                    <DetailCard icon={Shield} title={copy.security}>
                        <p className="text-main leading-relaxed">{localized(project.security)}</p>
                    </DetailCard>

                    <DetailCard icon={Activity} title={copy.reliability}>
                        <p className="text-main leading-relaxed">{localized(project.reliability)}</p>
                    </DetailCard>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <ListCard title={copy.features} items={localized(project.keyFeatures)} />
                    <ListCard title={copy.results} items={localized(project.results)} />
                </div>

                <section className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-2xl font-semibold tracking-normal">{copy.tech}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span key={tech} className="rounded-md border border-subtle px-3 py-1.5 text-sm text-muted">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {project.links.length > 0 && (
                    <section className="space-y-4 pt-2">
                        <h2 className="text-2xl font-semibold tracking-normal">{copy.artifacts}</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.links.map((link) => {
                                const isGitHub = link.url.includes("github.com");

                                return (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-md bg-main px-4 py-2.5 font-medium text-page transition-opacity hover:opacity-90"
                                    >
                                        {isGitHub ? <Github className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                                        {isGitHub ? copy.githubLabel : `${copy.externalLabel}: ${link.label}`}
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                )}

                {relatedProject && (
                    <section className="border-t border-subtle pt-8">
                        <h2 className="text-2xl font-semibold tracking-normal">{copy.related}</h2>
                        <p className="mt-2 text-muted max-w-2xl">{copy.relatedDescription}</p>
                        <Link
                            href={`/projects/${relatedProject.slug}`}
                            className="group mt-5 block rounded-lg border border-subtle bg-card p-5 transition-colors hover:border-blue-400 dark:hover:border-blue-600"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {localized(relatedProject.title)}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted">{localized(relatedProject.oneLiner)}</p>
                                </div>
                                <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            </div>
                        </Link>
                    </section>
                )}
            </article>
        </main>
    );
}

function DetailCard({
    icon: Icon,
    title,
    children,
}: {
    icon: LucideIcon;
    title: string;
    children: ReactNode;
}) {
    return (
        <section className="rounded-lg border border-subtle bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold tracking-normal">{title}</h2>
            </div>
            {children}
        </section>
    );
}

function ArchitectureCard({ title, body }: { title: string; body: string }) {
    return (
        <div className="rounded-lg border border-subtle bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-normal text-blue-600 dark:text-blue-400">
                {title}
            </p>
            <p className="mt-3 text-main leading-relaxed">{body}</p>
        </div>
    );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
    return (
        <section className="rounded-lg border border-subtle bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold tracking-normal">{title}</h2>
            </div>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-main">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
