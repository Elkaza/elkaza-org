"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  Mail,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import { ProjectStatusBadge } from "@/app/components/ui/ProjectStatusBadge";
import { TechBadge } from "@/app/components/ui/TechBadge";
import { BodyLarge, CardTitle, Eyebrow, MetaLabel, PageTitle, SectionTitle } from "@/app/components/ui/Typography";
import type { Locale } from "@/app/i18n/messages";
import { getLocalizedPath } from "@/app/lib/localizedRoutes";
import { projects, type Project } from "@/app/lib/projects";
import { profile } from "@/app/lib/profile";

type Localized<T> = Record<Locale, T>;

const FEATURED_PROJECT_SLUGS = [
  "enterprise-self-hosted-infrastructure",
  "edgeguardian-edge-ai-safety-bubble",
  "tinyml-vibration-anomaly-detection",
] as const;

type FeaturedSlug = (typeof FEATURED_PROJECT_SLUGS)[number];

const TECH_CHIPS = ["Linux", "Windows Server", "Docker", "Ansible", "PowerShell", "Tailscale", "CrowdSec", "Python", "SQL"];

const HOME_COPY: Localized<{
  heroKicker: string;
  heroTitle: string;
  heroSubheadline: string;
  heroSupportingLine: string;
  profileFacts: {
    label: string;
    value: string;
  }[];
  ctas: {
    projects: string;
    cv: string;
    contact: string;
    caseStudy: string;
    github: string;
    live: string;
  };
  cardLabels: {
    problem: string;
    responsibility: string;
    result: string;
  };
  featuredTitle: string;
  research: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; label: string }>;
    cta: string;
  };
  workTitle: string;
  finalCta: string;
}> = {
  de: {
    heroKicker: "Portfolio aus Wien - Infrastruktur, Security Operations und Application Engineering",
    heroTitle: profile.title.de,
    heroSubheadline: profile.introduction.de,
    heroSupportingLine: "Derzeit vertiefe ich Infrastruktur-Sicherheit, Monitoring und Incident-Analyse durch eigene Systeme und den Junior Cybersecurity Analyst Path der HTB Academy.",
    profileFacts: [
      { label: "Standort", value: profile.location.de },
      { label: "Arbeitsmarkt", value: profile.workAuthorization.de },
      { label: "Deutsch", value: "B2" },
      { label: "Englisch", value: "C1" },
    ],
    ctas: {
      projects: "Projekte ansehen",
      cv: "CV ansehen",
      contact: "Kontakt",
      caseStudy: "Fallstudie",
      github: "GitHub",
      live: "Live",
    },
    cardLabels: {
      problem: "Problem",
      responsibility: "Meine Rolle",
      result: "Ergebnis",
    },
    featuredTitle: "Technische Fallstudien",
    research: {
      eyebrow: "Aktuelle akademische Arbeit",
      title: "Forschung und Masterprojekt",
      description: "Aktuelle Arbeiten an TU Wien und FH Technikum Wien. Beide Themen befinden sich noch in Entwicklung.",
      items: [
        { title: "TU Wien Diplomarbeit", label: "Themen- und Betreuungsabstimmung" },
        { title: "Integritätsmanipulation authentifizierter IoT-Sensorknoten am Edge Gateway", label: "MIO-3 / geplante Masterarbeitsrichtung · Forschungsumfang Oktober 2026" },
      ],
      cta: "Akademische Arbeit ansehen",
    },
    workTitle: "Kernkompetenzen",
    finalCta:
      "Offen für Rollen in Application Engineering, Infrastruktur-Betrieb und Junior Security Operations.",
  },
  en: {
    heroKicker: "Vienna-based portfolio - infrastructure, security operations and application engineering",
    heroTitle: profile.title.en,
    heroSubheadline: profile.introduction.en,
    heroSupportingLine: "I am currently developing infrastructure-security, monitoring and incident-analysis skills through my own systems and HTB Academy's Junior Cybersecurity Analyst path.",
    profileFacts: [
      { label: "Location", value: profile.location.en },
      { label: "Work access", value: profile.workAuthorization.en },
      { label: "German", value: "B2" },
      { label: "English", value: "C1" },
    ],
    ctas: {
      projects: "View Projects",
      cv: "View CV",
      contact: "Contact",
      caseStudy: "Case Study",
      github: "GitHub",
      live: "Live",
    },
    cardLabels: {
      problem: "Problem",
      responsibility: "My role",
      result: "Result",
    },
    featuredTitle: "Engineering Case Studies",
    research: {
      eyebrow: "Current Academic Work",
      title: "Research and master's project",
      description: "Current work at TU Wien and FH Technikum Wien. Both topics are still in development.",
      items: [
        { title: "TU Wien Diploma Thesis", label: "Topic and supervision under clarification" },
        { title: "Detecting Integrity Manipulation by Authenticated IoT Sensor Nodes at a Resource-Constrained Edge Gateway", label: "MIO-3 / planned Master's thesis direction · Research scope October 2026" },
      ],
      cta: "View Academic Work",
    },
    workTitle: "Core Capabilities",
    finalCta:
      "Open to application engineering, infrastructure operations and junior security operations roles.",
  },
  ar: {
    heroKicker: "Vienna-based portfolio - software, automation and infrastructure",
    heroTitle: profile.title.en,
    heroSubheadline: profile.introduction.en,
    heroSupportingLine:
      "Arabic localization is in progress. Until then, the technical portfolio content is shown in English.",
    profileFacts: [
      { label: "Location", value: profile.location.en },
      { label: "Work access", value: profile.workAuthorization.en },
      { label: "German", value: "B2" },
      { label: "English", value: "C1" },
    ],
    ctas: {
      projects: "View Projects",
      cv: "View CV",
      contact: "Contact",
      caseStudy: "Case Study",
      github: "GitHub",
      live: "Live",
    },
    cardLabels: {
      problem: "Problem",
      responsibility: "My role",
      result: "Result",
    },
    featuredTitle: "Featured Work",
    research: {
      eyebrow: "Current Academic Work",
      title: "Research and master's project",
      description: "Current work at TU Wien and FH Technikum Wien. Both topics are still in development.",
      items: [
        { title: "TU Wien Diploma Thesis", label: "Topic and supervision under clarification" },
        { title: "Detecting Integrity Manipulation by Authenticated IoT Sensor Nodes at a Resource-Constrained Edge Gateway", label: "MIO-3 / planned Master's thesis direction · Research scope October 2026" },
      ],
      cta: "View Academic Work",
    },
    workTitle: "Capabilities & Stack",
    finalCta:
      "Open to application engineering, infrastructure operations and junior security operations roles.",
  },
};

const FEATURED_COPY: Record<
  FeaturedSlug,
  {
    title: Localized<string>;
    problem: Localized<string>;
    responsibility: Localized<string>;
    result: Localized<string>;
    tech: string[];
    visualLabel: Localized<string>;
  }
> = {
  "enterprise-self-hosted-infrastructure": {
    title: {
      de: "Self-Hosted Infrastructure",
      en: "Self-Hosted Infrastructure",
      ar: "Self-Hosted Infrastructure",
    },
    problem: {
      de: "Öffentliche Dienste benötigten einen kontrollierten Internet-Einstieg, ohne die private Administration offenzulegen.",
      en: "Public services needed a controlled internet entry point without exposing private administration.",
      ar: "Public services needed a controlled internet entry point without exposing private administration.",
    },
    responsibility: {
      de: "Die hybride Linux-/Windows-Infrastruktur mit getrenntem öffentlichem Ingress, privater Tailscale-Administration, Ansible-Automatisierung, Host-Firewalls und CrowdSec-Erkennung entworfen und umgesetzt.",
      en: "Designed and implemented the hybrid Linux/Windows environment with separated public ingress, private Tailscale administration, Ansible automation, host firewalls and CrowdSec detection.",
      ar: "Designed and implemented the hybrid Linux/Windows environment with separated public ingress, private Tailscale administration, Ansible automation, host firewalls and CrowdSec detection.",
    },
    result: {
      de: "Private Administration, wiederholbare Linux- und Windows-Konfiguration, überwachter Backup-Zustand und verifizierte Wiederherstellung von Anwendungen und Daten.",
      en: "Private administration, repeatable Linux and Windows configuration, monitored backup health and verified application/data recovery.",
      ar: "Private administration, repeatable Linux and Windows configuration, monitored backup health and verified application/data recovery.",
    },
    tech: ["Ansible", "Linux", "Tailscale", "CrowdSec", "Restic"],
    visualLabel: {
      de: "Hybrid-Infrastruktur mit Public Edge VPS, lokaler Proxmox-/Debian-Plattform, Windows-Server-Labor, privater Tailscale-Administration und Azure-Arc-Governance.",
      en: "Hybrid infrastructure with a Public Edge VPS, on-site Proxmox/Debian platform, Windows Server lab, private Tailscale administration and Azure Arc governance.",
      ar: "Hybrid infrastructure with a Public Edge VPS, on-site Proxmox/Debian platform, Windows Server lab, private Tailscale administration and Azure Arc governance.",
    },
  },
  "edgeguardian-edge-ai-safety-bubble": {
    title: {
      de: "EdgeGuardian",
      en: "EdgeGuardian",
      ar: "EdgeGuardian",
    },
    problem: {
      de: "Lokale Sicherheitszustände sollten direkt am Edge aus Sensor- und Kameradaten abgeleitet werden.",
      en: "Local safety states needed to be inferred at the edge from sensor and camera input.",
      ar: "Local safety states needed to be inferred at the edge from sensor and camera input.",
    },
    responsibility: {
      de: "Raspberry Pi, Hailo, Kamera, LiDAR und ESP32 zu einem prototypischen Entscheidungsfluss verbunden.",
      en: "Connected Raspberry Pi, Hailo, camera, LiDAR, and ESP32 into a prototype decision flow.",
      ar: "Connected Raspberry Pi, Hailo, camera, LiDAR, and ESP32 into a prototype decision flow.",
    },
    result: {
      de: "Architekturdiagramme, Code und sichtbare SAFE/WARNING/ALERT-Logik dokumentieren den Entscheidungsfluss.",
      en: "Architecture diagrams, code, and visible SAFE/WARNING/ALERT logic document the decision flow.",
      ar: "Architecture diagrams, code, and visible SAFE/WARNING/ALERT logic document the decision flow.",
    },
    tech: ["Raspberry Pi 5", "Hailo-8L", "YOLOv8", "LiDAR", "ESP32"],
    visualLabel: {
      de: "Edge AI Architektur",
      en: "Edge AI architecture",
      ar: "Edge AI architecture",
    },
  },
  "tinyml-vibration-anomaly-detection": {
    title: {
      de: "TinyML Vibration Detection",
      en: "TinyML Vibration Detection",
      ar: "TinyML Vibration Detection",
    },
    problem: {
      de: "Vibrationsmuster sollten auf einem kleinen Embedded-Gerät klassifiziert werden, ohne Cloud-Inferenz.",
      en: "Vibration patterns needed to be classified on a small embedded device without cloud inference.",
      ar: "Vibration patterns needed to be classified on a small embedded device without cloud inference.",
    },
    responsibility: {
      de: "IMU-Features, Softmax-Modell, C++-Export und Serial-Monitor-Demo umgesetzt.",
      en: "Implemented IMU features, softmax model, C++ export, and Serial Monitor demo.",
      ar: "Implemented IMU features, softmax model, C++ export, and Serial Monitor demo.",
    },
    result: {
      de: "Quellcode, Modellvergleich und reproduzierbare Validierung dokumentieren den Embedded-Workflow.",
      en: "Source code, model comparison, and reproducible validation document the embedded workflow.",
      ar: "Source code, model comparison, and reproducible validation document the embedded workflow.",
    },
    tech: ["Arduino Nano 33", "IMU", "C++", "Softmax", "TinyML"],
    visualLabel: {
      de: "TinyML Architektur",
      en: "TinyML architecture",
      ar: "TinyML architecture",
    },
  },
};
const WORK_AREAS: {
  title: Localized<string>;
  bullets: Localized<string[]>;
  Icon: LucideIcon;
  tools: string[];
}[] = [
  {
    title: {
      de: "Application Support & Engineering",
      en: "Application Support & Engineering",
      ar: "Application Engineering & Automation",
    },
    bullets: {
      de: ["Analysiert Anwendungsprobleme und Datenflüsse", "Bewertet Anforderungen und dokumentiert technische Nachverfolgung"],
      en: ["Troubleshoots application issues and data flows", "Analyzes requirements and documents technical follow-up"],
      ar: ["Analyzes requirements, defects and data flows", "Automates workflows with TypeScript, Python and SQL"],
    },
    Icon: Workflow,
    tools: ["ServiceNow", "Jira", "Documentation"],
  },
  {
    title: {
      de: "Infrastructure & Security Operations",
      en: "Infrastructure & Security Operations",
      ar: "Infrastructure & Security Operations",
    },
    bullets: {
      de: ["Betreibt überwachte Linux-, Windows-Server-, Docker- und Netzwerkumgebungen", "Härtet Zugriff und Ingress mit Tailscale, UFW/iptables, CrowdSec und wiederholbarer Konfiguration"],
      en: ["Operates monitored Linux, Windows Server, Docker and network environments", "Hardens access and ingress with Tailscale, UFW/iptables, CrowdSec and repeatable configuration"],
      ar: ["Operates monitored Linux, Windows Server, Docker and network environments", "Hardens access and ingress with Tailscale, UFW/iptables, CrowdSec and repeatable configuration"],
    },
    Icon: Server,
    tools: ["Linux", "Ansible", "Tailscale", "CrowdSec"],
  },
  {
    title: {
      de: "Automation & Data",
      en: "Automation & Data",
      ar: "IoT, Edge & Data",
    },
    bullets: {
      de: ["Automatisiert Abläufe mit Python und Skripting", "Nutzt SQL, Logs und Datenprüfungen zur Fehleranalyse"],
      en: ["Automates workflows with Python and scripting", "Uses SQL, logs and data checks for troubleshooting"],
      ar: ["Connects sensors, telemetry and edge prototypes", "Makes data paths inspectable through dashboards, logs and reports"],
    },
    Icon: Cpu,
    tools: ["Python", "SQL", "Bash"],
  },
];

export default function HomeContent() {
  const { locale } = useLocale();
  const activeLocale = locale === "en" ? "en" : "de";
  const copy = HOME_COPY[locale] ?? HOME_COPY.en;
  const featuredProjects = FEATURED_PROJECT_SLUGS
    .map((slug) => {
      const project = projects.find((candidate) => candidate.slug === slug);
      return project ? { slug, project } : null;
    })
    .filter((item): item is { slug: FeaturedSlug; project: Project } => item !== null);

  return (
    <main className="mx-auto flex w-full max-w-6xl min-w-0 flex-col overflow-hidden px-5 py-10 text-main sm:px-6 md:py-14">
      <section className="border-b border-subtle pb-10 md:pb-14">
        <div className="max-w-4xl space-y-7">
          <div className="space-y-5">
            <Eyebrow>{copy.heroKicker}</Eyebrow>
            <PageTitle>{copy.heroTitle}</PageTitle>
            <div className="max-w-3xl space-y-2">
              <BodyLarge className="font-semibold text-secondary">{copy.heroSubheadline}</BodyLarge>
              <BodyLarge className="text-muted">{copy.heroSupportingLine}</BodyLarge>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-subtle py-3 text-sm font-semibold text-secondary lg:min-h-[6.375rem]">
            {copy.profileFacts.map((item, index) => (
              <span key={item.label} className="inline-flex items-center gap-2">
                <span className="text-muted">{item.label}</span>
                <span>{item.value}</span>
                {index < copy.profileFacts.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-cyan-500" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {TECH_CHIPS.map((chip) => (
              <TechBadge
                key={chip}
                name={chip}
                className="bg-card px-3 py-1.5 text-sm"
                iconClassName="h-4 w-4"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={getLocalizedPath("/projects", activeLocale)}
              className="inline-flex items-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-blue-700/25 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              {copy.ctas.projects}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={locale === "de" ? "/kontakt" : "/en/contact"}
              className="inline-flex items-center rounded-md border border-subtle bg-card px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:border-blue-700 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page dark:hover:bg-blue-950/30 dark:hover:text-blue-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              {copy.ctas.contact}
            </Link>
            <Link
              href={getLocalizedPath("/cv", activeLocale)}
              className="inline-flex items-center px-1 py-2.5 text-sm font-semibold text-muted underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:hover:text-blue-300"
            >
              {copy.ctas.cv}
            </Link>
          </div>
        </div>

      </section>

      <section className="mt-14 space-y-6" aria-labelledby="featured-work">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <SectionTitle id="featured-work">{copy.featuredTitle}</SectionTitle>
          </div>
          <Link
            href={getLocalizedPath("/projects", activeLocale)}
              className="inline-flex items-center self-start rounded-md border border-subtle bg-card px-3.5 py-2 text-sm font-semibold text-main transition-colors hover:border-blue-700 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page dark:hover:bg-blue-950/30 dark:hover:text-blue-200 md:self-auto"
          >
            {copy.ctas.projects}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map(({ slug, project }) => (
            <FeaturedProjectCard
              key={slug}
              copy={copy}
              locale={locale}
              project={project}
              slug={slug}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-subtle bg-card p-5 md:p-6" aria-labelledby="current-research">
        <Eyebrow>{copy.research.eyebrow}</Eyebrow>
        <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 id="current-research" className="text-2xl font-semibold text-main">{copy.research.title}</h2>
            <p className="mt-3 leading-7 text-muted">{copy.research.description}</p>
            <ul className="mt-4 space-y-2">
              {copy.research.items.map((item) => (
                <li key={item.title} className="text-sm text-secondary">
                  <span className="font-semibold text-main">{item.title}</span>
                  <span className="block text-muted sm:ml-2 sm:inline">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href={getLocalizedPath("/research", activeLocale)} className="inline-flex shrink-0 items-center font-semibold text-blue-700 hover:underline dark:text-blue-300">
            {copy.research.cta}<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mt-16 space-y-6 border-y border-subtle py-10" aria-labelledby="work-on">
        <SectionTitle id="work-on">{copy.workTitle}</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          {WORK_AREAS.map(({ title, bullets, Icon, tools }) => (
            <article
              key={title.en}
              className="flex h-full min-w-0 flex-col rounded-lg border border-subtle bg-card p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-700 bg-blue-600 text-white shadow-blue-600/20 dark:border-blue-400 dark:bg-blue-500">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
              </div>
              <CardTitle className="mt-4">{title[locale]}</CardTitle>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {bullets[locale].map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {tools.map((tool) => (
                  <TechBadge
                    key={tool}
                    name={tool}
                    className="bg-page px-2 py-0.5 text-[11px]"
                    iconClassName="h-3.5 w-3.5"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-blue-200/70 bg-blue-50/70 p-6 dark:border-blue-900/70 dark:bg-blue-950/20 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-xl font-semibold leading-snug text-main">
            {copy.finalCta}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={locale === "de" ? "/kontakt" : "/en/contact"}
              className="inline-flex items-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-blue-700/25 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              <Mail className="mr-2 h-4 w-4" />
              {copy.ctas.contact}
            </Link>
            <Link
              href={getLocalizedPath("/cv", activeLocale)}
              className="inline-flex items-center rounded-md border border-subtle bg-page px-5 py-2.5 text-sm font-semibold text-main transition-colors hover:bg-subtle"
            >
              <FileText className="mr-2 h-4 w-4" />
              {copy.ctas.cv}
            </Link>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-subtle bg-page px-5 py-2.5 text-sm font-semibold text-main transition-colors hover:bg-subtle"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeaturedProjectCard({
  copy,
  locale,
  project,
  slug,
}: {
  copy: (typeof HOME_COPY)["en"];
  locale: Locale;
  project: Project;
  slug: FeaturedSlug;
}) {
  const projectCopy = FEATURED_COPY[slug];
  const visualSrc = project.diagrams?.[0]?.src ?? project.images?.[0];
  const githubLink = project.links.find((link) => link.url.includes("github.com"));
  const liveLink = project.links.find((link) => !link.url.includes("github.com"));
  const activeLocale = locale === "en" ? "en" : "de";

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-subtle bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-950/5 dark:hover:border-blue-500">
      <ProjectVisual
        label={projectCopy.visualLabel[locale]}
        src={visualSrc}
      />

      <div className="flex flex-1 flex-col p-5">
        <ProjectStatusBadge status={project.status} locale={locale} className="mb-3 self-start" />
        <CardTitle className="text-xl">{projectCopy.title[locale]}</CardTitle>
        <div className="mt-4 divide-y divide-subtle border-y border-subtle text-sm leading-relaxed">
          {[
            [copy.cardLabels.problem, projectCopy.problem[locale]],
            [copy.cardLabels.responsibility, projectCopy.responsibility[locale]],
            [copy.cardLabels.result, projectCopy.result[locale]],
          ].map(([label, value]) => (
            <div key={label} className="py-3">
              <MetaLabel>{label}</MetaLabel>
              <p className="mt-1 text-muted">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {projectCopy.tech.slice(0, 3).map((tech) => (
            <TechBadge
              key={tech}
              name={tech}
            />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Link
            href={getLocalizedPath(`/projects/${project.slug}`, activeLocale)}
            className="inline-flex items-center rounded-md bg-blue-700 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            {copy.ctas.caseStudy}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-subtle bg-page px-3.5 py-2 text-sm font-semibold text-main transition-colors hover:bg-subtle"
            >
              <Github className="mr-1.5 h-4 w-4" />
              {copy.ctas.github}
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-subtle bg-page px-3.5 py-2 text-sm font-semibold text-main transition-colors hover:bg-subtle"
            >
              <ExternalLink className="mr-1.5 h-4 w-4" />
              {copy.ctas.live}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({
  label,
  src,
}: {
  label: string;
  src?: string;
}) {
  if (!src) {
    return (
      <div className="h-44 w-full min-w-0 border-b border-subtle bg-page p-4" aria-label={label}>
        <div className="rounded-lg border border-subtle bg-card p-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="mt-5 grid grid-cols-[0.7fr_1fr] gap-3">
            <div className="space-y-2">
              <span className="block h-2 rounded-full bg-blue-500/70" />
              <span className="block h-2 w-10/12 rounded-full bg-slate-400/40" />
              <span className="block h-2 w-7/12 rounded-full bg-slate-400/30" />
            </div>
            <div className="rounded-md border border-subtle bg-page p-2">
              <span className="block h-2 w-9/12 rounded-full bg-slate-400/40" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <span className="h-6 rounded bg-blue-500/20" />
                <span className="h-6 rounded bg-emerald-500/20" />
                <span className="h-6 rounded bg-slate-400/20" />
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
            <span className="h-8 rounded-md border border-subtle bg-page" />
            <span className="h-px w-4 bg-blue-500/60" />
            <span className="h-8 rounded-md border border-subtle bg-page" />
            <span className="h-px w-4 bg-blue-500/60" />
            <span className="h-8 rounded-md border border-subtle bg-page" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-44 w-full min-w-0 border-b border-subtle bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-4">
      <div className="relative h-full w-full overflow-hidden rounded-md border border-subtle bg-white shadow-inner shadow-slate-200/60">
        <Image
          src={src}
          alt={label}
          fill
          unoptimized={src.toLowerCase().endsWith(".svg")}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-contain p-2.5"
        />
      </div>
    </div>
  );
}
