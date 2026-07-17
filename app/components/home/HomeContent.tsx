"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  Mail,
  Server,
  SquareTerminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import { TechBadge } from "@/app/components/ui/TechBadge";
import type { Locale } from "@/app/i18n/messages";
import { projects, type Project } from "@/app/lib/projects";

type Localized<T> = Record<Locale, T>;

const FEATURED_PROJECT_SLUGS = [
  "edgeguardian-edge-ai-safety-bubble",
  "enterprise-self-hosted-infrastructure",
  "elkaza-org",
] as const;

type FeaturedSlug = (typeof FEATURED_PROJECT_SLUGS)[number];

const TECH_CHIPS = ["TypeScript", "Python", "Docker", "Linux", "SQL", "IoT", "GitHub Actions"];

const HOME_COPY: Localized<{
  heroTitle: string;
  heroSubheadline: string;
  heroSupportingLine: string;
  ctas: {
    projects: string;
    cv: string;
    contact: string;
    caseStudy: string;
    github: string;
    live: string;
  };
  featuredTitle: string;
  workTitle: string;
  finalCta: string;
}> = {
  de: {
    heroTitle: "Software, Automation & Infrastructure Engineer",
    heroSubheadline:
      "Ich verbinde Application Engineering, Automatisierung und betreibbare Infrastruktur: von Next.js und Python bis Docker, Monitoring und Edge-AI-Prototypen.",
    heroSupportingLine:
      "Das Portfolio zeigt technische Arbeit mit nachvollziehbaren Delivery-Pfaden, klarer Dokumentation, privaten Betriebsumgebungen und reproduzierbaren Daten-Workflows.",
    ctas: {
      projects: "Projekte ansehen",
      cv: "CV ansehen",
      contact: "Kontakt",
      caseStudy: "Fallstudie",
      github: "GitHub",
      live: "Live",
    },
    featuredTitle: "Ausgewählte Engineering-Arbeiten",
    workTitle: "Arbeitsbereiche, Stack & Nachweise",
    finalCta:
      "Offen für Rollen, in denen Software, Automatisierung, Infrastruktur und technische Dokumentation zusammenkommen.",
  },
  en: {
    heroTitle: "Software, Automation & Infrastructure Engineer",
    heroSubheadline:
      "I connect application engineering, automation and operable infrastructure: from Next.js and Python to Docker, monitoring and Edge AI prototypes.",
    heroSupportingLine:
      "This portfolio shows technical work with traceable delivery paths, clear documentation, private operations environments and reproducible data workflows.",
    ctas: {
      projects: "View Projects",
      cv: "View CV",
      contact: "Contact",
      caseStudy: "Case Study",
      github: "GitHub",
      live: "Live",
    },
    featuredTitle: "Selected Engineering Work",
    workTitle: "Capabilities, Stack & Evidence",
    finalCta:
      "Open to roles where software, automation, infrastructure and technical documentation meet.",
  },
  ar: {
    heroTitle: "Software, Automation & Infrastructure Engineer in Vienna",
    heroSubheadline:
      "I build operable web, automation and infrastructure systems: from Next.js and Python to Docker, monitoring and Edge AI prototypes.",
    heroSupportingLine:
      "Arabic localization is in progress. Until then, the technical portfolio content is shown in English.",
    ctas: {
      projects: "View Projects",
      cv: "View CV",
      contact: "Contact",
      caseStudy: "Case Study",
      github: "GitHub",
      live: "Live",
    },
    featuredTitle: "Featured Work",
    workTitle: "Capabilities & Stack",
    finalCta:
      "Looking for someone who can build, automate and operate practical technical systems?",
  },
};

const FEATURED_COPY: Record<
  FeaturedSlug,
  {
    title: Localized<string>;
    summary: Localized<string>;
    tech: string[];
    visualLabel: Localized<string>;
  }
> = {
  "edgeguardian-edge-ai-safety-bubble": {
    title: {
      de: "EdgeGuardian",
      en: "EdgeGuardian",
      ar: "EdgeGuardian",
    },
    summary: {
      de: "Edge-AI-Sicherheitsüberwachung mit Kamera, LiDAR und lokaler Entscheidungslogik.",
      en: "Edge AI safety monitoring with camera, LiDAR and local decision logic.",
      ar: "Edge AI safety monitoring with camera, LiDAR and local decision logic.",
    },
    tech: ["Raspberry Pi 5", "Hailo-8L", "YOLOv8", "LiDAR", "ESP32"],
    visualLabel: {
      de: "Edge AI Architektur",
      en: "Edge AI architecture",
      ar: "Edge AI architecture",
    },
  },
  "enterprise-self-hosted-infrastructure": {
    title: {
      de: "Self-Hosted Infrastructure",
      en: "Self-Hosted Infrastructure",
      ar: "Self-Hosted Infrastructure",
    },
    summary: {
      de: "Hybrid-Plattform mit privatem Betrieb, Monitoring, Backups und First-Party Analytics.",
      en: "Hybrid platform with private operations, monitoring, backups and first-party analytics.",
      ar: "Hybrid platform with private operations, monitoring, backups and first-party analytics.",
    },
    tech: ["Proxmox", "Docker", "Tailscale", "Plausible", "GitHub Actions"],
    visualLabel: {
      de: "Hybrid Cloud Architektur",
      en: "Hybrid cloud architecture",
      ar: "Hybrid cloud architecture",
    },
  },
  "elkaza-org": {
    title: {
      de: "Portfolio Platform",
      en: "Portfolio Platform",
      ar: "Portfolio Platform",
    },
    summary: {
      de: "Mehrsprachige Next.js-Plattform für Projekte, CV und technische Fallstudien.",
      en: "Multilingual Next.js platform for projects, CV content and technical case studies.",
      ar: "Multilingual Next.js platform for projects, CV content and technical case studies.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    visualLabel: {
      de: "Web Delivery Architektur",
      en: "Web delivery architecture",
      ar: "Web delivery architecture",
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
      de: "Application Engineering",
      en: "Application Engineering",
      ar: "Application Engineering",
    },
    bullets: {
      de: ["Analysiert Anforderungen und Fehlerbilder", "Dokumentiert Lösungen und technische Übergaben"],
      en: ["Analyzes requirements and defects", "Documents fixes and technical handovers"],
      ar: ["Analyzes requirements and defects", "Documents fixes and technical handovers"],
    },
    Icon: Workflow,
    tools: ["Jira", "Confluence", "Documentation"],
  },
  {
    title: {
      de: "Fullstack / Software",
      en: "Fullstack / Software",
      ar: "Fullstack / Software",
    },
    bullets: {
      de: ["Baut Next.js/TypeScript Oberflächen", "Automatisiert Workflows mit Python und SQL"],
      en: ["Builds Next.js/TypeScript interfaces", "Automates workflows with Python and SQL"],
      ar: ["Builds Next.js/TypeScript interfaces", "Automates workflows with Python and SQL"],
    },
    Icon: SquareTerminal,
    tools: ["Next.js", "TypeScript", "Python"],
  },
  {
    title: {
      de: "Infrastructure / Platform",
      en: "Infrastructure / Platform",
      ar: "Infrastructure / Platform",
    },
    bullets: {
      de: ["Deployt Linux/Docker Services", "Betreibt Monitoring, Backups und Zugriffswege"],
      en: ["Deploys Linux/Docker services", "Operates monitoring, backups and access paths"],
      ar: ["Deploys Linux/Docker services", "Operates monitoring, backups and access paths"],
    },
    Icon: Server,
    tools: ["Linux", "Docker", "GitHub Actions"],
  },
  {
    title: {
      de: "IoT / Edge AI",
      en: "IoT / Edge AI",
      ar: "IoT / Edge AI",
    },
    bullets: {
      de: ["Testet Sensorik, Edge Inference und Aktuatorik", "Verbindet Dashboards, Logs und Embedded Geräte"],
      en: ["Tests sensors, edge inference and actuation", "Connects dashboards, logs and embedded devices"],
      ar: ["Tests sensors, edge inference and actuation", "Connects dashboards, logs and embedded devices"],
    },
    Icon: Cpu,
    tools: ["Raspberry Pi", "ESP32", "MQTT"],
  },
  {
    title: {
      de: "Data Automation",
      en: "Data Automation",
      ar: "Data Automation",
    },
    bullets: {
      de: ["Automatisiert Datenaufbereitung und Reports", "Verbessert reproduzierbare Analysepfade"],
      en: ["Automates data preparation and reports", "Improves reproducible analysis paths"],
      ar: ["Automates data preparation and reports", "Improves reproducible analysis paths"],
    },
    Icon: Database,
    tools: ["Python", "SQL", "Dashboard"],
  },
];

export default function HomeContent() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale] ?? HOME_COPY.en;
  const featuredProjects = FEATURED_PROJECT_SLUGS
    .map((slug) => {
      const project = projects.find((candidate) => candidate.slug === slug);
      return project ? { slug, project } : null;
    })
    .filter((item): item is { slug: FeaturedSlug; project: Project } => item !== null);

  return (
    <main className="mx-auto flex w-full max-w-6xl min-w-0 flex-col overflow-hidden px-5 py-10 text-main sm:px-6 md:py-14">
      <section className="max-w-4xl space-y-7 border-b border-subtle pb-10 md:pb-12">
        <div className="space-y-4">
          <h1 className="break-words !text-3xl font-extrabold leading-tight tracking-normal text-main sm:!text-4xl md:!text-6xl">
            {copy.heroTitle}
          </h1>
          <p className="max-w-3xl break-words text-base font-semibold text-secondary sm:text-lg md:text-xl">
            {copy.heroSubheadline}
          </p>
          <p className="max-w-2xl break-words text-base leading-relaxed text-muted md:text-lg">
            {copy.heroSupportingLine}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {TECH_CHIPS.map((chip) => (
            <TechBadge
              key={chip}
              name={chip}
              className="bg-card px-3 py-1.5 text-sm shadow-sm"
              iconClassName="h-4 w-4"
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-700/25 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            {copy.ctas.projects}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center rounded-md border border-subtle bg-card px-5 py-2.5 text-sm font-semibold text-secondary shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page dark:hover:bg-blue-950/30 dark:hover:text-blue-200"
          >
            <FileText className="mr-2 h-4 w-4" />
            {copy.ctas.cv}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-subtle bg-card px-5 py-2.5 text-sm font-semibold text-main shadow-sm transition-colors hover:bg-subtle"
          >
            <Mail className="mr-2 h-4 w-4" />
            {copy.ctas.contact}
          </Link>
        </div>
      </section>

      <section className="mt-14 space-y-6" aria-labelledby="featured-work">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 id="featured-work" className="!text-2xl font-semibold tracking-normal text-main">
              {copy.featuredTitle}
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center self-start rounded-md border border-subtle bg-card px-3.5 py-2 text-sm font-semibold text-main shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page dark:hover:bg-blue-950/30 dark:hover:text-blue-200 md:self-auto"
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

      <section className="mt-16 space-y-6 border-y border-subtle py-10" aria-labelledby="work-on">
        <h2 id="work-on" className="!text-2xl font-semibold tracking-normal text-main">
          {copy.workTitle}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {WORK_AREAS.map(({ title, bullets, Icon, tools }, index) => (
            <article
              key={title.en}
              className={`flex h-full min-w-0 flex-col rounded-lg border border-subtle bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:hover:border-blue-500 ${
                index < 3 ? "xl:col-span-2" : "xl:col-span-3"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-700 bg-blue-600 text-white shadow-sm shadow-blue-600/20 dark:border-blue-400 dark:bg-blue-500">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-4 text-balance break-normal !text-lg font-semibold leading-tight tracking-normal text-main">
                {title[locale]}
              </h3>
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

      <section className="mt-16 rounded-lg border border-blue-200/70 bg-blue-50/70 p-6 shadow-sm dark:border-blue-900/70 dark:bg-blue-950/20 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-xl font-semibold leading-snug text-main">
            {copy.finalCta}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-700/25 transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              <Mail className="mr-2 h-4 w-4" />
              {copy.ctas.contact}
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center rounded-md border border-subtle bg-page px-5 py-2.5 text-sm font-semibold text-main shadow-sm transition-colors hover:bg-subtle"
            >
              <FileText className="mr-2 h-4 w-4" />
              {copy.ctas.cv}
            </Link>
            <a
              href="https://github.com/Elkaza"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-subtle bg-page px-5 py-2.5 text-sm font-semibold text-main shadow-sm transition-colors hover:bg-subtle"
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

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-subtle bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-950/5 dark:hover:border-blue-500">
      <ProjectVisual
        label={projectCopy.visualLabel[locale]}
        src={visualSrc}
      />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="break-words !text-xl font-semibold tracking-normal text-main">
          {projectCopy.title[locale]}
        </h3>
        <p className="mt-2 min-h-[3rem] break-words text-sm leading-relaxed text-muted">
          {projectCopy.summary[locale]}
        </p>

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
            href={`/projects/${project.slug}`}
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
        <div className="rounded-lg border border-subtle bg-card p-4 shadow-sm">
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
