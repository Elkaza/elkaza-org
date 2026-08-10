"use client";

import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    ExternalLink,
    Github,
    Layers,
    Waypoints,
} from "lucide-react";
import { notFound } from "next/navigation";
import { useLocale } from "@/app/LocaleProvider";
import { TechBadge } from "@/app/components/ui/TechBadge";
import { Body, BodyLarge, CardTitle, MetaLabel, PageTitle, SectionTitle } from "@/app/components/ui/Typography";
import { projects } from "@/app/lib/projects";
import { getProjectStatusLabel, getProjectTagLabel } from "@/app/lib/projectDisplay";
import type { Locale } from "@/app/i18n/messages";

type DetailCopy = {
    category: Record<string, string>;
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    architectureCaption: string;
    node: string;
    edge: string;
    cloud: string;
    security: string;
    reliability: string;
    features: string;
    results: string;
    snapshot: string;
    summary: string;
    role: string;
    scope: string;
    constraints: string;
    resultLabel: string;
    result: string;
    technicalDecisions: string;
    challenges: string;
    lessons: string;
    future: string;
    tech: string;
    artifacts: string;
    diagrams: string;
    diagramsIntro: string;
    diagramReviewFocus: string;
    openDiagram: string;
    diagramPreviewTitle: string;
    diagramPreviewIntro: string;
    systemOverviewDiagram: string;
    deploymentDiagram: string;
    dataFlowDiagram: string;
    status: string;
    related: string;
    relatedDescription: string;
    githubLabel: string;
    externalLabel: string;
    stackPreview: string;
};

type FeaturedProjectSlug =
    | "enterprise-self-hosted-infrastructure"
    | "edgeguardian-edge-ai-safety-bubble"
    | "tinyml-vibration-anomaly-detection";

type LocalizedString = Record<Locale, string>;

type FeaturedDetailConfig = {
    outcome: LocalizedString;
    role: LocalizedString;
    keyResultIndex: number;
    limitation?: LocalizedString;
    validation: Record<Locale, string[]>;
    nextStep: LocalizedString;
    stackGroups: {
        label: LocalizedString;
        tech: string[];
    }[];
};

const COPY: Record<string, DetailCopy> = {
    en: {
        category: {
            "featured-aiot": "Current IoT and Edge Project",
            "platform-component": "Platform Component",
            "security-infrastructure": "Infrastructure and Security",
            "delivery-platform": "Deployment Platform",
        },
        overview: "Overview",
        problem: "Problem",
        solution: "Goal and Implementation",
        architecture: "Architecture",
        architectureCaption: "System design flow",
        node: "Node",
        edge: "Edge",
        cloud: "Cloud",
        security: "Security",
        reliability: "Reliability",
        features: "Implementation Highlights",
        results: "Results",
        snapshot: "Case Snapshot",
        summary: "Summary",
        role: "Role",
        scope: "Scope",
        constraints: "Constraints",
        resultLabel: "Result",
        result: "Result",
        technicalDecisions: "Technical Decisions",
        challenges: "Challenges",
        lessons: "Lessons Learned",
        future: "Future Improvements",
        tech: "Tech Stack",
        artifacts: "Artifacts",
        diagrams: "Technical Diagrams",
        diagramsIntro: "Architecture diagrams show the system boundary, runtime flow, and operational decisions in a compact review format.",
        diagramReviewFocus: "What the diagram shows",
        openDiagram: "Open full diagram",
        diagramPreviewTitle: "Architecture Views",
        diagramPreviewIntro: "Concise system views summarize the project boundary, deployment path, and data flow without adding implementation claims.",
        systemOverviewDiagram: "System overview diagram",
        deploymentDiagram: "Deployment diagram",
        dataFlowDiagram: "Data flow diagram",
        status: "Status",
        related: "Related Project",
        relatedDescription: "Follow the adjacent case study to see how this project connects with the rest of the work.",
        githubLabel: "View source on GitHub",
        externalLabel: "Open link",
        stackPreview: "Core stack",
    },
    de: {
        category: {
            "featured-aiot": "Aktuelles IoT- und Edge-Projekt",
            "platform-component": "Plattformbaustein",
            "security-infrastructure": "Infrastruktur und Sicherheit",
            "delivery-platform": "Bereitstellung und Web",
        },
        overview: "Überblick",
        problem: "Problem",
        solution: "Ziel und Umsetzung",
        architecture: "Architektur",
        architectureCaption: "Architekturdiagramme",
        node: "Node",
        edge: "Edge",
        cloud: "Cloud",
        security: "Sicherheit",
        reliability: "Zuverlässigkeit",
        features: "Implementation-Highlights",
        results: "Ergebnisse",
        snapshot: "Kurzüberblick",
        summary: "Zusammenfassung",
        role: "Rolle",
        scope: "Umfang",
        constraints: "Rahmenbedingungen",
        resultLabel: "Ergebnis",
        result: "Ergebnis",
        technicalDecisions: "Technische Entscheidungen",
        challenges: "Herausforderungen",
        lessons: "Lessons Learned",
        future: "Nächste Verbesserungen",
        tech: "Tech-Stack",
        artifacts: "Artefakte",
        diagrams: "Technische Diagramme",
        diagramsIntro: "Die Architekturdiagramme zeigen Systemgrenzen, Runtime-Flüsse und operative Entscheidungen in kompakter Prüfform.",
        diagramReviewFocus: "Was das Diagramm zeigt",
        diagramPreviewTitle: "Architekturansichten",
        diagramPreviewIntro: "Kompakte Systemansichten fassen Projektgrenze, Deployment-Pfad und Datenfluss zusammen, ohne zusätzliche Implementierungsannahmen zu ergänzen.",
        systemOverviewDiagram: "Systemübersicht",
        deploymentDiagram: "Deployment-Diagramm",
        dataFlowDiagram: "Datenfluss-Diagramm",
        openDiagram: "Diagramm öffnen",
        status: "Status",
        related: "Verwandtes Projekt",
        relatedDescription: "Die angrenzende Fallstudie zeigt, wie dieses Projekt mit der restlichen Arbeit zusammenhängt.",
        githubLabel: "Quellcode auf GitHub ansehen",
        externalLabel: "Link öffnen",
        stackPreview: "Kernstack",
    },
    ar: {
        category: {
            "featured-aiot": "Current IoT and Edge Project",
            "platform-component": "Platform Component",
            "security-infrastructure": "Infrastructure and Security",
            "delivery-platform": "Deployment Platform",
        },
        overview: "Overview",
        problem: "Problem",
        solution: "Solution",
        architecture: "Architecture",
        architectureCaption: "System design flow",
        node: "Node",
        edge: "Edge",
        cloud: "Cloud",
        security: "Security",
        reliability: "Reliability",
        features: "Key Features",
        results: "Results and Impact",
        snapshot: "Case Snapshot",
        summary: "Summary",
        role: "Role",
        scope: "Scope",
        constraints: "Constraints",
        resultLabel: "Result",
        result: "Result",
        technicalDecisions: "Technical Decisions",
        challenges: "Challenges",
        lessons: "Lessons Learned",
        future: "Future Improvements",
        tech: "Tech Stack",
        artifacts: "Artifacts",
        diagrams: "Technical Diagrams",
        diagramsIntro: "Architecture diagrams show the system boundary, runtime flow, and operational decisions in a compact review format.",
        diagramReviewFocus: "What the diagram shows",
        openDiagram: "Open full diagram",
        diagramPreviewTitle: "Architecture Views",
        diagramPreviewIntro: "Concise system views summarize the project boundary, deployment path, and data flow without adding implementation claims.",
        systemOverviewDiagram: "System overview diagram",
        deploymentDiagram: "Deployment diagram",
        dataFlowDiagram: "Data flow diagram",
        status: "Status",
        related: "Related Project",
        relatedDescription: "Follow the adjacent case study to see how this project connects with the rest of the work.",
        githubLabel: "View source on GitHub",
        externalLabel: "Open link",
        stackPreview: "Core stack",
    },
};

const FEATURED_DETAIL_SLUGS = new Set<string>([
    "enterprise-self-hosted-infrastructure",
    "edgeguardian-edge-ai-safety-bubble",
    "tinyml-vibration-anomaly-detection",
]);

const stackLabel = (en: string, de: string): LocalizedString => ({ en, de, ar: en });

const FEATURED_LABELS: Record<Locale, Record<string, string>> = {
    en: {
        keyResult: "Key result",
        problemConstraints: "Problem and constraints",
        whatBuilt: "What I built",
        implementation: "Implementation",
        validation: "Validation",
        completeStack: "Complete stack",
        nextTechnicalStep: "Next technical step",
        artefactKind: "Test artefact",
        plannedWork: "Planned work",
    },
    de: {
        keyResult: "Wichtigstes Ergebnis",
        problemConstraints: "Problem und Rahmenbedingungen",
        whatBuilt: "Was ich gebaut habe",
        implementation: "Umsetzung",
        validation: "Validierung",
        completeStack: "Vollständiger Stack",
        nextTechnicalStep: "Nächster technischer Schritt",
        artefactKind: "Testartefakt",
        plannedWork: "Geplante Arbeit",
    },
    ar: {
        keyResult: "Key result",
        problemConstraints: "Problem and constraints",
        whatBuilt: "What I built",
        implementation: "Implementation",
        validation: "Validation",
        completeStack: "Complete stack",
        nextTechnicalStep: "Next technical step",
        artefactKind: "Test artefact",
        plannedWork: "Planned work",
    },
};

const FEATURED_DETAIL_CONFIGS: Record<FeaturedProjectSlug, FeaturedDetailConfig> = {
    "enterprise-self-hosted-infrastructure": {
        outcome: {
            en: "Live in operation",
            de: "Im Betrieb",
            ar: "Live in operation",
        },
        role: {
            en: "I designed and operated the hybrid architecture, including VPS hardening, Tailscale routing, container deployment, monitoring and VM backups.",
            de: "Ich entwarf und betrieb die Hybrid-Architektur einschließlich VPS-Härtung, Tailscale-Routing, Container-Deployment, Monitoring und VM-Backups.",
            ar: "I designed and operated the hybrid architecture, including VPS hardening, Tailscale routing, container deployment, monitoring and VM backups.",
        },
        keyResultIndex: 2,
        validation: {
            en: [
                "Checked public reachability for ports 80 and 443 and confirmed management services were not reachable from the public internet.",
                "Verified SSH access through the intended keys after reloading the hardened SSH configuration.",
                "Created and tested a zstd Proxmox VM backup archive before removing old snapshots.",
            ],
            de: [
                "Öffentliche Erreichbarkeit für Ports 80 und 443 geprüft und bestätigt, dass Management-Services nicht öffentlich erreichbar waren.",
                "SSH-Zugriff über die vorgesehenen Schlüssel nach Reload der gehärteten SSH-Konfiguration verifiziert.",
                "Ein zstd-Proxmox-VM-Backup-Archiv erstellt und geprüft, bevor alte Snapshots entfernt wurden.",
            ],
            ar: [
                "Checked public reachability for ports 80 and 443 and confirmed management services were not reachable from the public internet.",
                "Verified SSH access through the intended keys after reloading the hardened SSH configuration.",
                "Created and tested a zstd Proxmox VM backup archive before removing old snapshots.",
            ],
        },
        nextStep: {
            en: "Add an encrypted off-site backup copy and complete an isolated restore test.",
            de: "Eine verschlüsselte Offsite-Backup-Kopie ergänzen und einen isolierten Restore-Test vollständig durchführen.",
            ar: "Add an encrypted off-site backup copy and complete an isolated restore test.",
        },
        stackGroups: [
            {
                label: stackLabel("Platform", "Plattform"),
                tech: ["Proxmox VE", "Debian 13", "Docker Compose", "Nginx Proxy Manager"],
            },
            {
                label: stackLabel("Networking & Security", "Netzwerk & Sicherheit"),
                tech: ["Tailscale", "UFW", "CrowdSec", "Pi-hole"],
            },
            {
                label: stackLabel("Data Services", "Datendienste"),
                tech: ["Plausible Analytics", "PostgreSQL", "ClickHouse"],
            },
            {
                label: stackLabel("Automation & Operations", "Automatisierung & Betrieb"),
                tech: ["GitHub Actions", "Bash", "Uptime Kuma", "Netdata", "Portainer", "Dozzle", "Watchtower"],
            },
        ],
    },
    "edgeguardian-edge-ai-safety-bubble": {
        outcome: {
            en: "Demonstrated prototype",
            de: "Demonstrierter Prototyp",
            ar: "Demonstrated prototype",
        },
        role: {
            en: "I integrated the camera, Hailo accelerator, LiDAR and ESP32, then implemented the fusion logic, dashboard and CSV logging.",
            de: "Ich integrierte Kamera, Hailo-Beschleuniger, LiDAR und ESP32 und implementierte anschließend die Fusionslogik, das Dashboard und die CSV-Protokollierung.",
            ar: "I integrated the camera, Hailo accelerator, LiDAR and ESP32, then implemented the fusion logic, dashboard and CSV logging.",
        },
        keyResultIndex: 1,
        limitation: {
            en: "Prototype only - not a certified safety system.",
            de: "Nur ein Prototyp - kein zertifiziertes Sicherheitssystem.",
            ar: "Prototype only - not a certified safety system.",
        },
        validation: {
            en: [
                "Ran the local demo path with camera detection, LiDAR distance input, ESP32 serial commands and dashboard updates.",
                "Logged SAFE -> WARNING -> ALERT -> SAFE transitions during the demo.",
                "Kept final CSV and terminal logs for inspection after the run.",
            ],
            de: [
                "Lokalen Demo-Pfad mit Kameraerkennung, LiDAR-Distanzinput, ESP32-Serial-Kommandos und Dashboard-Updates ausgeführt.",
                "SAFE -> WARNING -> ALERT -> SAFE-Übergänge während der Demo protokolliert.",
                "Finale CSV- und Terminal-Logs für die Prüfung nach dem Lauf aufbewahrt.",
            ],
            ar: [
                "Ran the local demo path with camera detection, LiDAR distance input, ESP32 serial commands and dashboard updates.",
                "Logged SAFE -> WARNING -> ALERT -> SAFE transitions during the demo.",
                "Kept final CSV and terminal logs for inspection after the run.",
            ],
        },
        nextStep: {
            en: "Broaden validation logs across more distance and lighting scenarios before any safety-critical use.",
            de: "Validierungslogs über mehr Distanz- und Lichtszenarien erweitern, bevor sicherheitskritische Nutzung überhaupt betrachtet wird.",
            ar: "Broaden validation logs across more distance and lighting scenarios before any safety-critical use.",
        },
        stackGroups: [
            {
                label: stackLabel("Hardware", "Hardware"),
                tech: ["Raspberry Pi 5", "Hailo-8L", "Hokuyo LiDAR", "ESP32-S3"],
            },
            {
                label: stackLabel("Edge Software", "Edge-Software"),
                tech: ["Python", "Flask", "YOLOv8n"],
            },
            {
                label: stackLabel("Sensor Fusion", "Sensorfusion"),
                tech: ["Camera", "LiDAR", "State machine", "Hysteresis"],
            },
            {
                label: stackLabel("Monitoring & Outputs", "Monitoring & Ausgaben"),
                tech: ["Dashboard", "CSV logs", "Telegram alerts", "Serial output"],
            },
        ],
    },
    "tinyml-vibration-anomaly-detection": {
        outcome: {
            en: "Academic prototype",
            de: "Akademischer Prototyp",
            ar: "Academic prototype",
        },
        role: {
            en: "I built the pipeline from synthetic-data generation and feature extraction to model training, C++ export and on-device inference.",
            de: "Ich entwickelte die Pipeline von der synthetischen Datengenerierung und Merkmalsextraktion bis zum Modelltraining, C++-Export und zur Inferenz auf dem Arduino.",
            ar: "I built the pipeline from synthetic-data generation and feature extraction to model training, C++ export and on-device inference.",
        },
        keyResultIndex: 0,
        validation: {
            en: [
                "Trained and evaluated the classifier offline on the synthetic balanced dataset.",
                "Checked Serial Monitor output for state, probabilities, persistence counter and latency.",
                "Compiled the sketch on Arduino Nano 33 BLE Sense Rev2 and recorded flash/RAM usage.",
            ],
            de: [
                "Klassifikator offline auf dem synthetischen balancierten Datensatz trainiert und bewertet.",
                "Serial-Monitor-Ausgabe für Zustand, Wahrscheinlichkeiten, Persistenzzähler und Latenz geprüft.",
                "Sketch auf dem Arduino Nano 33 BLE Sense Rev2 kompiliert und Flash-/RAM-Nutzung festgehalten.",
            ],
            ar: [
                "Trained and evaluated the classifier offline on the synthetic balanced dataset.",
                "Checked Serial Monitor output for state, probabilities, persistence counter and latency.",
                "Compiled the sketch on Arduino Nano 33 BLE Sense Rev2 and recorded flash/RAM usage.",
            ],
        },
        nextStep: {
            en: "Validate the model with real measured vibration data beyond the synthetic balanced dataset.",
            de: "Das Modell mit real gemessenen Vibrationsdaten zusätzlich zum synthetischen balancierten Datensatz validieren.",
            ar: "Validate the model with real measured vibration data beyond the synthetic balanced dataset.",
        },
        stackGroups: [
            {
                label: stackLabel("Embedded Hardware", "Embedded-Hardware"),
                tech: ["Arduino Nano 33 BLE Sense Rev2", "IMU", "Built-in LED"],
            },
            {
                label: stackLabel("Training Pipeline", "Training-Pipeline"),
                tech: ["Python", "Synthetic dataset", "20 vibration features"],
            },
            {
                label: stackLabel("Runtime Model", "Runtime-Modell"),
                tech: ["C++", "TinyML", "Softmax", "Model export"],
            },
            {
                label: stackLabel("Validation", "Validierung"),
                tech: ["Serial Monitor", "Offline test set", "Flash/RAM report"],
            },
        ],
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
    const localizedResults = localized(project.results);
    const localizedFeatures = localized(project.keyFeatures);
    const hasDiagrams = Boolean(project.diagrams && project.diagrams.length > 0);
    const snapshotItems = [
        { label: copy.role, body: getRoleDescription(project.category, locale) },
        { label: copy.scope, body: conciseText(localized(project.solution), 230) },
        { label: copy.constraints, body: conciseText(`${localized(project.security)} ${localized(project.reliability)}`, 230) },
        ...(localizedResults[0] ? [{ label: copy.resultLabel, body: localizedResults[0] }] : []),
    ];
    const challengeItems = [
        conciseText(localized(project.problem), 190),
        conciseText(localized(project.security), 190),
        conciseText(localized(project.reliability), 190),
    ];
    const futureItems = getFutureItems(locale, hasDiagrams);
    const githubLink = project.links.find((link) => link.url.includes("github.com"));
    const externalLinks = project.links.filter((link) => !link.url.includes("github.com"));

    if (isFeaturedProjectSlug(project.slug)) {
        return (
            <FeaturedProjectDetailLayout
                copy={copy}
                config={FEATURED_DETAIL_CONFIGS[project.slug]}
                locale={locale}
                project={project}
                t={t}
            />
        );
    }

    return (
        <main className="min-h-screen bg-page px-4 py-8 text-main transition-colors duration-300 sm:px-6 md:py-12">
            <article className="mx-auto max-w-5xl space-y-8 md:space-y-10">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("nav_projects")}
                </Link>

                <header className="grid gap-5 rounded-lg border border-subtle bg-card p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_280px] md:gap-6 md:p-7">
                    <div className="space-y-5">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                            <span className="rounded-full border border-subtle bg-page px-3 py-1">
                                {copy.category[project.category]}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-page px-3 py-1 font-medium text-main">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                                {copy.status}: {getProjectStatusLabel(project.status, locale)}
                            </span>
                            <span>{project.year}</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold leading-tight tracking-normal md:text-5xl">
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
                    </div>

                    <aside className="min-w-0 rounded-lg border border-subtle bg-page/70 p-4">
                        <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">
                            {copy.stackPreview}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.slice(0, 5).map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>
                        {project.links.length > 0 && (
                            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap md:flex-col">
                                {githubLink && (
                                    <a
                                        href={githubLink.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-md bg-main px-3 py-2 text-sm font-medium text-page transition-opacity hover:opacity-90"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </a>
                                )}
                                {externalLinks.slice(0, 2).map((link) => (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-md border border-subtle bg-card px-3 py-2 text-sm font-medium text-main transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </aside>
                </header>

                {project.images && project.images.length > 0 && (
                    project.images.length === 1 ? (
                        <section className="rounded-lg border border-subtle bg-card p-2 md:p-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.images[0]}
                                alt={`${project.title.en} dashboard screenshot`}
                                className="h-auto w-full rounded-lg"
                            />
                        </section>
                    ) : (
                        <section className="grid gap-4 md:grid-cols-2">
                            {project.images.map((image, index) => (
                                <div key={image} className="overflow-hidden rounded-lg border border-subtle bg-card p-2">
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

                <CaseSnapshot title={copy.snapshot} items={snapshotItems} />

                <section className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Waypoints className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-2xl font-semibold tracking-normal">{copy.architecture}</h2>
                    </div>
                    <ArchitectureFlow
                        caption={copy.architectureCaption}
                        nodes={[
                            {
                                title: project.architectureLabels ? localized(project.architectureLabels.node) : copy.node,
                                body: localized(project.architecture.node),
                            },
                            {
                                title: project.architectureLabels ? localized(project.architectureLabels.edge) : copy.edge,
                                body: localized(project.architecture.edge),
                            },
                            {
                                title: project.architectureLabels ? localized(project.architectureLabels.cloud) : copy.cloud,
                                body: localized(project.architecture.cloud),
                            },
                        ]}
                    />
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

                {project.diagrams && project.diagrams.length > 0 && (
                    <section className="space-y-5">
                        <div className="flex flex-col gap-3 border-y border-subtle py-5 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <h2 className="text-2xl font-semibold tracking-normal">{copy.diagrams}</h2>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-muted">{copy.diagramsIntro}</p>
                            </div>
                            <span className="rounded-md border border-subtle px-3 py-1.5 text-xs font-medium text-muted">
                                {project.diagrams.length} {copy.diagrams}
                            </span>
                        </div>
                        <div className="space-y-5">
                            {project.diagrams.map((diagram) => {
                                const summary = diagram.summary ? localized(diagram.summary) : [];

                                return (
                                    <figure key={diagram.src} className="overflow-hidden rounded-lg border border-subtle bg-card">
                                        <div className="flex flex-col gap-3 border-b border-subtle p-4 md:flex-row md:items-start md:justify-between">
                                            <figcaption className="max-w-3xl space-y-1">
                                                <p className="text-base font-semibold text-main">{localized(diagram.title)}</p>
                                                <p className="text-sm leading-relaxed text-muted">{localized(diagram.caption)}</p>
                                            </figcaption>
                                            <a
                                                href={diagram.src}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex shrink-0 items-center self-start whitespace-nowrap rounded-md border border-subtle px-3 py-2 text-sm font-medium text-main transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                {copy.openDiagram}
                                            </a>
                                        </div>
                                        <div className="overflow-x-auto bg-white p-3">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={diagram.src}
                                                alt={`${localized(diagram.title)} diagram for ${project.title.en}`}
                                                className="w-full min-w-[640px] max-w-none rounded-md md:min-w-[720px]"
                                            />
                                        </div>
                                        {summary.length > 0 && (
                                            <div className="border-t border-subtle p-4">
                                                <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">
                                                    {copy.diagramReviewFocus}
                                                </p>
                                                <ul className="mt-3 grid gap-3 md:grid-cols-3">
                                                    {summary.map((item) => (
                                                        <li key={item} className="border-l-2 border-blue-500 pl-3 text-sm leading-relaxed text-muted">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </figure>
                                );
                            })}
                        </div>
                    </section>
                )}

                {!hasDiagrams && (
                    <DiagramOverview
                        copy={copy}
                        architectureLabels={[
                            project.architectureLabels ? localized(project.architectureLabels.node) : copy.node,
                            project.architectureLabels ? localized(project.architectureLabels.edge) : copy.edge,
                            project.architectureLabels ? localized(project.architectureLabels.cloud) : copy.cloud,
                        ]}
                    />
                )}

                <div className="grid gap-6 lg:grid-cols-2">
                    <ListCard title={copy.technicalDecisions} items={localizedFeatures.slice(0, 5)} />
                    <ListCard title={copy.challenges} items={challengeItems} />
                    <ListCard title={copy.lessons} items={localizedResults.slice(0, 4)} />
                    <ListCard title={copy.future} items={futureItems} />
                </div>

                <section className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-2xl font-semibold tracking-normal">{copy.tech}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <TechBadge key={tech} name={tech} className="px-3 py-1.5 text-sm text-muted" iconClassName="h-4 w-4" />
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

function ArchitectureFlow({
    caption,
    nodes,
}: {
    caption: string;
    nodes: { title: string; body: string }[];
}) {
    return (
        <figure className="rounded-lg border border-subtle bg-card p-5">
            <div
                className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]"
                role="img"
                aria-label={caption}
            >
                {nodes.map((node, index) => (
                    <Fragment key={node.title}>
                        <div className="rounded-md border border-cyan-500/30 bg-page p-4">
                            <MetaLabel className="text-cyan-800 dark:text-cyan-300">{node.title}</MetaLabel>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{node.body}</p>
                        </div>
                        {index < nodes.length - 1 && (
                            <div className="flex items-center justify-center text-cyan-600 dark:text-cyan-300" aria-hidden="true">
                                <ArrowRight className="hidden h-5 w-5 md:block" />
                                <span className="h-8 border-l border-cyan-500/40 md:hidden" />
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
            <figcaption className="mt-3 text-xs text-muted">{caption}</figcaption>
        </figure>
    );
}

function CaseSnapshot({
    title,
    items,
}: {
    title: string;
    items: { label: string; body: string }[];
}) {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-semibold tracking-normal">{title}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <article key={item.label} className="rounded-lg border border-subtle bg-card p-5">
                        <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">
                            {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

function DiagramOverview({
    copy,
    architectureLabels,
}: {
    copy: DetailCopy;
    architectureLabels: string[];
}) {
    const views = [
        copy.systemOverviewDiagram,
        copy.deploymentDiagram,
        copy.dataFlowDiagram,
    ];

    return (
        <section className="space-y-4">
            <div className="flex flex-col gap-2 border-y border-subtle py-5">
                <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl font-semibold tracking-normal">{copy.diagramPreviewTitle}</h2>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-muted">{copy.diagramPreviewIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                {views.map((view, index) => (
                    <div key={view} className="rounded-lg border border-subtle bg-card p-5">
                        <div className="h-16 rounded-md border border-subtle bg-page p-3">
                            <span className="block h-2 w-8/12 rounded-full bg-blue-500/60" />
                            <div className="mt-4 grid grid-cols-3 gap-2">
                                <span className="h-4 rounded bg-slate-400/25" />
                                <span className="h-4 rounded bg-emerald-500/20" />
                                <span className="h-4 rounded bg-slate-400/25" />
                            </div>
                        </div>
                        <h3 className="mt-3 text-base font-semibold tracking-normal text-main">{view}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {architectureLabels[index] ?? architectureLabels[0]}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function FeaturedProjectDetailLayout({
    copy,
    config,
    locale,
    project,
    t,
}: {
    copy: DetailCopy;
    config: FeaturedDetailConfig;
    locale: Locale;
    project: (typeof projects)[number];
    t: (key: string) => string;
}) {
    const labels = FEATURED_LABELS[locale] ?? FEATURED_LABELS.en;
    const localized = <T extends string | string[]>(value: Record<Locale, T>) => value[locale] ?? value.en;
    const localizedResults = localized(project.results);
    const localizedFeatures = localized(project.keyFeatures);
    const localizedValidation = localized(config.validation);
    const githubLink = project.links.find((link) => link.url.includes("github.com"));
    const externalLinks = project.links.filter((link) => !link.url.includes("github.com"));
    const keyResult = localizedResults[config.keyResultIndex] ?? localizedResults[0];
    const outcomeValue = localized(config.outcome);
    const tocItems = useMemo(
        () => [
            { id: "overview", label: locale === "de" ? "Überblick" : "Overview" },
            { id: "problem", label: locale === "de" ? "Problem" : "Problem" },
            { id: "architecture", label: locale === "de" ? "Architektur" : "Architecture" },
            { id: "technical-decisions", label: locale === "de" ? "Entscheidungen" : "Technical decisions" },
            { id: "validation", label: locale === "de" ? "Validierung" : "Validation" },
            { id: "results", label: locale === "de" ? "Ergebnisse" : "Results" },
            { id: "stack", label: locale === "de" ? "Stack" : "Stack" },
            { id: "artefacts", label: locale === "de" ? "Artefakte" : "Artefacts" },
            { id: "next-step", label: locale === "de" ? "Nächster Schritt" : "Next step" },
        ],
        [locale]
    );
    const tocIds = useMemo(() => tocItems.map((item) => item.id), [tocItems]);
    const activeSection = useActiveSection(tocIds);
    const architectureNodes = [
        {
            title: project.architectureLabels ? localized(project.architectureLabels.node) : copy.node,
            body: localized(project.architecture.node),
        },
        {
            title: project.architectureLabels ? localized(project.architectureLabels.edge) : copy.edge,
            body: localized(project.architecture.edge),
        },
        {
            title: project.architectureLabels ? localized(project.architectureLabels.cloud) : copy.cloud,
            body: localized(project.architecture.cloud),
        },
    ];

    return (
        <main className="min-h-screen bg-page px-4 py-8 text-main transition-colors duration-300 sm:px-6 md:py-12">
            <article className="mx-auto max-w-7xl space-y-8 md:space-y-10">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-muted transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t("nav_projects")}
                </Link>

                <header id="overview" className="scroll-mt-28 grid gap-6 border-b border-subtle pb-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
                    <div className="space-y-5">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-normal">
                            <span className={`rounded-full border px-3 py-1 ${getOutcomeClassName(outcomeValue)}`}>
                                {outcomeValue}
                            </span>
                            <span className="rounded-full border border-subtle bg-card px-3 py-1 text-muted">
                                {project.year}
                            </span>
                            {project.tech.slice(0, 5).map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>

                        <div className="space-y-3">
                            <PageTitle className="md:text-5xl">{localized(project.title)}</PageTitle>
                            <BodyLarge className="max-w-3xl text-muted">{localized(project.oneLiner)}</BodyLarge>
                            {config.limitation && (
                                <p className="inline-flex rounded-md border border-amber-700/30 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-950 dark:border-amber-400/40 dark:bg-amber-950/20 dark:text-amber-100">
                                    {localized(config.limitation)}
                                </p>
                            )}
                        </div>
                    </div>

                    <aside className="grid gap-3 rounded-lg border border-subtle bg-card p-4">
                        <FeaturedFact label={copy.role} value={localized(config.role)} />
                        {keyResult && <FeaturedFact label={labels.keyResult} value={keyResult} />}
                    </aside>
                </header>

                <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
                    <FeaturedTableOfContents activeId={activeSection} items={tocItems} locale={locale} />

                    <div className="min-w-0 space-y-10">
                        <FeaturedSection id="problem" title={labels.problemConstraints}>
                            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                                <Body className="text-main">{localized(project.problem)}</Body>
                                <div className="divide-y divide-subtle border-y border-subtle">
                                    <InlineFact label={copy.security} value={localized(project.security)} />
                                    <InlineFact label={copy.reliability} value={localized(project.reliability)} />
                                </div>
                            </div>
                        </FeaturedSection>

                        <FeaturedSection id="what-i-built" title={labels.whatBuilt}>
                            <Body className="max-w-4xl text-main">{localized(project.solution)}</Body>
                        </FeaturedSection>

                        <FeaturedSection id="architecture" title={copy.architecture}>
                            <ArchitectureFlow caption={copy.architectureCaption} nodes={architectureNodes} />
                            {project.diagrams && project.diagrams.length > 0 && (
                                <FeaturedDiagramGallery copy={copy} diagrams={project.diagrams} locale={locale} projectTitle={project.title.en} />
                            )}
                        </FeaturedSection>

                        <FeaturedSection id="technical-decisions" title={copy.technicalDecisions}>
                            <FlatList items={localizedFeatures.slice(0, 5)} />
                        </FeaturedSection>

                        <FeaturedSection id="validation" title={labels.validation}>
                            <ValidationList items={localizedValidation} />
                            {project.images && project.images.length > 0 && (
                                <div className="grid gap-4 md:grid-cols-2">
                                    {project.images.map((image, index) => (
                                        <figure key={image} className="overflow-hidden rounded-lg border border-subtle bg-card p-2">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={image}
                                                alt={`${project.title.en} validation image ${index + 1}`}
                                                className="h-auto w-full rounded-md"
                                            />
                                        </figure>
                                    ))}
                                </div>
                            )}
                        </FeaturedSection>

                        <FeaturedSection id="results" title={copy.results}>
                            <ResultGrid items={localizedResults} />
                        </FeaturedSection>

                        <FeaturedSection id="stack" title={labels.completeStack}>
                            <div className="divide-y divide-subtle border-y border-subtle">
                                {config.stackGroups.map((group) => (
                                    <section key={group.label.en} className="grid gap-3 py-4 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
                                        <MetaLabel className="text-main">{localized(group.label)}</MetaLabel>
                                        <div className="flex flex-wrap gap-2">
                                            {group.tech.map((tech) => (
                                                <TechBadge key={tech} name={tech} />
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </FeaturedSection>

                        <FeaturedSection id="artefacts" title={copy.artifacts}>
                            <div className="flex flex-wrap gap-3">
                                {githubLink && (
                                    <a
                                        href={githubLink.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-800"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        {copy.githubLabel}
                                    </a>
                                )}
                                {externalLinks.map((link) => (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-md border border-subtle bg-card px-4 py-2.5 font-medium text-main transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {link.label}
                                    </a>
                                ))}
                                {project.diagrams?.map((diagram) => (
                                    <a
                                        key={diagram.src}
                                        href={diagram.src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-md border border-subtle bg-card px-4 py-2.5 font-medium text-main transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {localized(diagram.title)}
                                    </a>
                                ))}
                            </div>
                        </FeaturedSection>

                        <FeaturedSection id="next-step" title={labels.nextTechnicalStep}>
                            <article className="rounded-lg border border-amber-700/30 bg-amber-50 p-5 dark:border-amber-400/40 dark:bg-amber-950/20">
                                <MetaLabel className="text-amber-900 dark:text-amber-200">{labels.plannedWork}</MetaLabel>
                                <p className="mt-2 leading-relaxed text-main">{localized(config.nextStep)}</p>
                            </article>
                        </FeaturedSection>
                    </div>
                </div>
            </article>
        </main>
    );
}

function FeaturedFact({ label, value }: { label: string; value: string }) {
    return (
        <article className="rounded-lg border border-subtle bg-card p-4">
            <MetaLabel>{label}</MetaLabel>
            <p className="mt-2 text-sm leading-relaxed text-main">{value}</p>
        </article>
    );
}

function InlineFact({ label, value }: { label: string; value: string }) {
    return (
        <div className="py-4">
            <MetaLabel>{label}</MetaLabel>
            <p className="mt-2 text-sm leading-relaxed text-muted">{value}</p>
        </div>
    );
}

function FeaturedSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
    return (
        <section id={id} className="scroll-mt-28 space-y-4">
            <SectionTitle className="border-l-2 border-blue-700 pl-3">{title}</SectionTitle>
            {children}
        </section>
    );
}

function FlatList({ items }: { items: string[] }) {
    return (
        <ul className="divide-y divide-subtle border-y border-subtle">
            {items.map((item) => (
                <li key={item} className="py-3 text-sm leading-relaxed text-main">
                    {item}
                </li>
            ))}
        </ul>
    );
}

function ValidationList({ items }: { items: string[] }) {
    return (
        <ul className="divide-y divide-subtle border-y border-subtle">
            {items.map((item) => (
                <li key={item} className="flex gap-3 py-3 text-sm leading-relaxed text-main">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function ResultGrid({ items }: { items: string[] }) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => {
                const metric = item.match(/(?:\d+[.,]?\d* ?%|ca\. ?\d+ ?ms|about ?\d+ ?ms|\d+ ?FPS|\d+ ?GB|\d+ ?GiB)/iu)?.[0];

                return (
                    <article key={item} className="border-l-2 border-emerald-500 bg-card/40 py-1 pl-4">
                        {metric && <p className="text-2xl font-extrabold tracking-tight text-main">{metric}</p>}
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item}</p>
                    </article>
                );
            })}
        </div>
    );
}

function getOutcomeClassName(outcome: string) {
    const normalized = outcome.toLowerCase();
    if (normalized.includes("live") || normalized.includes("betrieb")) {
        return "border-emerald-700/30 bg-emerald-50 text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200";
    }

    return "border-amber-700/30 bg-amber-50 text-amber-950 dark:border-amber-400/40 dark:bg-amber-950/20 dark:text-amber-100";
}

function FeaturedTableOfContents({
    activeId,
    items,
    locale,
}: {
    activeId: string;
    items: { id: string; label: string }[];
    locale: Locale;
}) {
    const labels =
        locale === "de"
            ? {
                nav: "Projektabschnitte",
                select: "Projektabschnitt",
                sections: "Abschnitte",
                onPage: "Auf dieser Seite",
            }
            : {
                nav: "Project sections",
                select: "Project section",
                sections: "Sections",
                onPage: "On this page",
            };
    const jumpTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "smooth" });
        window.history.replaceState(null, "", `#${id}`);
    };

    return (
        <nav className="lg:sticky lg:top-24" aria-label={labels.nav}>
            <select
                value={activeId}
                onChange={(event) => jumpTo(event.target.value)}
                className="w-full rounded-md border border-subtle bg-card px-3 py-2 text-sm text-main focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
                aria-label={labels.select}
            >
                {items.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.label}
                    </option>
                ))}
            </select>
            <div className="hidden border-l border-subtle pl-4 lg:block">
                <MetaLabel className="mb-3">{activeId === "overview" ? labels.sections : labels.onPage}</MetaLabel>
                <div className="grid gap-1">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => jumpTo(item.id)}
                            className={[
                                "rounded-md px-2 py-1.5 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
                                activeId === item.id
                                    ? "bg-blue-50 font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-200"
                                    : "text-muted hover:bg-card hover:text-main",
                            ].join(" ")}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

function useActiveSection(sectionIds: string[]) {
    const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

    useEffect(() => {
        if (!sectionIds.length) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

                if (visible?.target.id) {
                    setActiveId(visible.target.id);
                }
            },
            { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5] }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeId;
}

function FeaturedDiagramGallery({
    copy,
    diagrams,
    locale,
    projectTitle,
}: {
    copy: DetailCopy;
    diagrams: NonNullable<(typeof projects)[number]["diagrams"]>;
    locale: Locale;
    projectTitle: string;
}) {
    const localized = <T extends string | string[]>(value: Record<Locale, T>) => value[locale] ?? value.en;

    return (
        <div className="space-y-5">
            {diagrams.map((diagram) => {
                const summary = diagram.summary ? localized(diagram.summary) : [];

                return (
                    <details key={diagram.src} className="overflow-hidden rounded-lg border border-subtle bg-card" open>
                        <summary className="cursor-pointer list-none border-b border-subtle p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div className="max-w-3xl space-y-1">
                                    <CardTitle className="text-base">{localized(diagram.title)}</CardTitle>
                                    <p className="text-sm leading-relaxed text-muted">{localized(diagram.caption)}</p>
                                </div>
                                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                                    {copy.openDiagram}
                                </span>
                            </div>
                        </summary>
                        <figure>
                            <div className="bg-white p-3">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={diagram.src}
                                    alt={`${localized(diagram.title)} diagram for ${projectTitle}`}
                                    className="h-auto w-full rounded-md"
                                />
                            </div>
                            <a
                                href={diagram.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-4 mb-4 inline-flex items-center rounded-md border border-subtle px-3 py-2 text-sm font-medium text-main transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                {localized(diagram.title)}
                            </a>
                            {summary.length > 0 && (
                                <div className="border-t border-subtle p-4">
                                    <MetaLabel className="text-main">{copy.diagramReviewFocus}</MetaLabel>
                                    <ul className="mt-3 grid gap-3 md:grid-cols-3">
                                        {summary.map((item) => (
                                            <li key={item} className="border-l-2 border-cyan-500 pl-3 text-sm leading-relaxed text-muted">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </figure>
                    </details>
                );
            })}
        </div>
    );
}

function isFeaturedProjectSlug(slug: string): slug is FeaturedProjectSlug {
    return FEATURED_DETAIL_SLUGS.has(slug);
}

function conciseText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text;
    }

    const clipped = text.slice(0, maxLength).trimEnd();
    const lastSpace = clipped.lastIndexOf(" ");

    return `${clipped.slice(0, lastSpace > 120 ? lastSpace : maxLength).trimEnd()}...`;
}

function getRoleDescription(category: string, locale: Locale) {
    const roles: Record<Locale, Record<string, string>> = {
        en: {
            "featured-aiot": "End-to-end engineering: hardware integration, edge inference, sensor fusion, dashboard output, and operational documentation.",
            "platform-component": "Product-minded implementation: data model, interface behavior, integration path, and maintainable implementation artifacts.",
            "security-infrastructure": "Infrastructure ownership: architecture, hardening, access model, monitoring, recovery path, and operating notes.",
            "delivery-platform": "Platform ownership: frontend implementation, deployment workflow, content structure, CI validation, and production release path.",
        },
        de: {
            "featured-aiot": "Praxisrolle: Hardware-Integration, Edge-Inferenz, Sensorfusion, Dashboard, Logs und technische Dokumentation.",
            "platform-component": "Produktorientierte Umsetzung: Datenmodell, Interface-Verhalten, Integrationspfad und wartbare Umsetzungsartefakte.",
            "security-infrastructure": "Infrastruktur-Verantwortung: Architektur, Hardening, Zugriffsmodell, Monitoring, Recovery-Pfad und Betriebsdokumentation.",
            "delivery-platform": "Plattform-Verantwortung: Frontend-Umsetzung, Deployment-Workflow, Inhaltsstruktur, CI-Validierung und Produktionspfad.",
        },
        ar: {
            "featured-aiot": "End-to-end engineering: hardware integration, edge inference, sensor fusion, dashboard output, and operational documentation.",
            "platform-component": "Product-minded implementation: data model, interface behavior, integration path, and maintainable implementation artifacts.",
            "security-infrastructure": "Infrastructure ownership: architecture, hardening, access model, monitoring, recovery path, and operating notes.",
            "delivery-platform": "Platform ownership: frontend implementation, deployment workflow, content structure, CI validation, and production release path.",
        },
    };

    return roles[locale]?.[category] ?? roles.en[category] ?? roles.en["delivery-platform"];
}

function getFutureItems(locale: Locale, hasDiagrams: boolean) {
    const documentationItem = locale === "de"
        ? "Dokumentation weiter verdichten: README, Architekturentscheidungen und Screenshots synchron halten."
        : "Keep documentation concise: align README, architecture decisions, and screenshots.";
    const diagramItem = hasDiagrams
        ? locale === "de"
            ? "Diagramme bei größeren Architekturänderungen aktualisieren."
            : "Update diagrams when the architecture changes materially."
        : locale === "de"
            ? "Architekturansichten mit der Implementierung synchron halten."
            : "Keep architecture views aligned with the implementation.";

    return [diagramItem, documentationItem];
}

function ArchitectureCard({ title, body }: { title: string; body: string }) {
    return (
        <div className="rounded-lg border border-subtle bg-card p-5">
            <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">
                {title}
            </p>
            <p className="mt-3 text-main leading-relaxed">{body}</p>
        </div>
    );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
    return (
        <section className="rounded-lg border border-subtle bg-card p-6">
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
