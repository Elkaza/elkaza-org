"use client";

import Link from "next/link";
import {
  Activity,
  Archive,
  BarChart3,
  BrainCircuit,
  ClipboardList,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Lock,
  Mail,
  MapPin,
  Network,
  Server,
  Shield,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { TechBadge } from "./ui/TechBadge";
import { OrganizationLogo } from "./ui/OrganizationLogo";
import type { Locale } from "../i18n/messages";

type SummaryFocus = {
  key: number;
  Icon: LucideIcon;
};

type InfrastructureItem = {
  key: number;
  Icon: LucideIcon;
};

type RecentProject = {
  key: "edgeguardian" | "tinyml" | "tourism" | "regression";
  href: string;
  category: Record<Locale, string>;
  tags: string[];
  Icon: LucideIcon;
};

type SkillGroup = {
  key: "platform" | "automation" | "networking" | "operations" | "software" | "delivery";
  Icon: LucideIcon;
};

const summaryFocus: SummaryFocus[] = [
  { key: 1, Icon: Server },
  { key: 2, Icon: Workflow },
  { key: 3, Icon: Shield },
  { key: 4, Icon: Users },
];

const infrastructureItems: InfrastructureItem[] = [
  { key: 1, Icon: Cloud },
  { key: 2, Icon: GitBranch },
  { key: 3, Icon: Network },
  { key: 4, Icon: Archive },
];

const recentProjects: RecentProject[] = [
  {
    key: "edgeguardian",
    href: "/projects/edgeguardian-edge-ai-safety-bubble",
    category: {
      de: "Edge AI / IoT",
      en: "Edge AI / IoT",
      ar: "Edge AI / IoT",
    },
    tags: ["Raspberry Pi 5", "Hailo-8L", "LiDAR", "ESP32"],
    Icon: Cpu,
  },
  {
    key: "tinyml",
    href: "/projects/tinyml-vibration-anomaly-detection",
    category: {
      de: "Embedded / TinyML",
      en: "Embedded / TinyML",
      ar: "Embedded / TinyML",
    },
    tags: ["Arduino Nano 33", "IMU", "C++", "Softmax"],
    Icon: Activity,
  },
  {
    key: "tourism",
    href: "/projects/austria-tourism-dashboard",
    category: {
      de: "Data / Dashboard",
      en: "Data / Dashboard",
      ar: "Data / Dashboard",
    },
    tags: ["Python", "HTML", "CSV", "Dashboard"],
    Icon: BarChart3,
  },
  {
    key: "regression",
    href: "/projects/random-walk-gravity-regression",
    category: {
      de: "Machine Learning",
      en: "Machine Learning",
      ar: "Machine Learning",
    },
    tags: ["scikit-learn", "Regression", "Validation", "Python"],
    Icon: BrainCircuit,
  },
];

const skillGroups: SkillGroup[] = [
  { key: "platform", Icon: Server },
  { key: "automation", Icon: Code2 },
  { key: "networking", Icon: Lock },
  { key: "operations", Icon: Activity },
  { key: "software", Icon: Database },
  { key: "delivery", Icon: ClipboardList },
];

const cvHighlights: Record<Locale, { label: string; value: string }[]> = {
  de: [
    { label: "Schwerpunkt", value: "Application Engineering, Automatisierung und belastbare Infrastruktur" },
    { label: "Nachweis", value: "Deployed Projekte mit CI/CD, Monitoring, Backups und Betriebsdokumentation" },
    { label: "Arbeitsweise", value: "Systeme verstehen, vereinfachen, automatisieren und sauber übergeben" },
  ],
  en: [
    { label: "Focus", value: "Application engineering, automation, and reliable infrastructure" },
    { label: "Evidence", value: "Deployed projects with CI/CD, monitoring, backups, and operations notes" },
    { label: "Working style", value: "Understand the system, simplify it, automate it, and hand it over clearly" },
  ],
  ar: [
    { label: "Focus", value: "Application engineering, automation, and infrastructure" },
    { label: "Evidence", value: "Deployed projects with CI/CD, monitoring, backups, and operations notes" },
    { label: "Working style", value: "Understand the system, simplify it, automate it, and hand it over clearly" },
  ],
};

export default function CvPageContent() {
  const { locale, t } = useLocale();
  const experienceItems = [
    { key: "1", organization: "HiCo-ICS" },
    { key: "2", organization: "Raiffeisen Bank International" },
    { key: "3", organization: "BOC Group" },
    { key: "4", organization: "University of Benghazi" },
  ] as const;
  const educationItems = [
    { text: t("cv_education_item1"), organization: "FH Technikum Wien" },
    { text: t("cv_education_item2"), organization: "TU Wien" },
    { text: t("cv_education_item3"), organization: "University of Benghazi" },
    { text: t("cert_ipma_title"), organization: "pma / IPMA" },
    { text: t("cert_graz_title"), organization: "University of Graz" },
    { text: t("cert_li_title"), organization: "LinkedIn Learning" },
    { text: t("cert_excel_title"), organization: "Microsoft Excel" },
  ] as const;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-main sm:px-6 md:py-16 print:max-w-none print:px-0 print:py-0">
      <section className="rounded-xl border border-subtle bg-card p-4 shadow-sm sm:p-6 md:p-8 print:border-0 print:p-0 print:shadow-none">
        <div className="grid gap-5 md:grid-cols-[1.4fr_0.6fr] md:items-start">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-extrabold uppercase tracking-normal text-main">{t("cv_title")}</p>
              <h1 className="break-words text-3xl font-bold tracking-normal text-main md:text-4xl">{t("brand")}</h1>
              <p className="max-w-3xl text-base leading-7 text-secondary md:text-lg">{t("cv_role_title")}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-md border border-subtle bg-page px-3 py-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t("legal_location")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-subtle bg-page px-3 py-1.5">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a className="transition hover:text-blue-700 dark:hover:text-blue-300" href="mailto:contact@elkaza.org">
                  contact@elkaza.org
                </a>
              </span>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-3 rounded-lg border border-subtle bg-page/70 p-4 text-sm text-muted print:hidden">
            <p className="text-xs font-extrabold uppercase tracking-normal text-main">
              {locale === "de" ? "Online-Profil" : "Online Profile"}
            </p>
            <a className="transition hover:text-blue-700 dark:hover:text-blue-300" href="https://elkaza.org" target="_blank" rel="noreferrer">
              elkaza.org
            </a>
            <a className="transition hover:text-blue-700 dark:hover:text-blue-300" href="https://github.com/Elkaza" target="_blank" rel="noreferrer">
              github.com/Elkaza
            </a>
            <a
              className="transition hover:text-blue-700 dark:hover:text-blue-300"
              href="https://linkedin.com/in/moalkhalil"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/moalkhalil
            </a>
          </div>
        </div>
        <div className="mt-6 grid gap-3 border-t border-subtle pt-5 md:grid-cols-3">
          {cvHighlights[locale].map((item) => (
            <div key={item.label} className="min-w-0">
              <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 space-y-8 md:mt-10 print:mt-6 print:space-y-5">
        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-subtle bg-card p-5 shadow-sm md:p-6 print:break-inside-avoid print:p-4 print:shadow-none">
            <SectionHeading icon={ClipboardList} title={t("cv_summary_title")} />
            <p className="mt-4 max-w-3xl text-sm leading-7 text-secondary md:text-base">{t("cv_summary_text")}</p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {summaryFocus.map(({ key, Icon }) => (
                <div key={key} className="flex items-start gap-3 rounded-lg border border-subtle bg-page/70 p-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-subtle bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-6 text-main">{t(`cv_summary_focus${key}`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-subtle bg-card p-5 shadow-sm md:p-6 print:break-inside-avoid print:p-4 print:shadow-none">
            <SectionHeading icon={Cloud} title={t("cv_infra_title")} />
            <p className="mt-4 text-sm leading-7 text-secondary">{t("cv_infra_intro")}</p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {infrastructureItems.map(({ key, Icon }) => (
                <div key={key} className="flex items-start gap-3 rounded-lg border border-subtle bg-page/70 px-3 py-2.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-subtle bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-6 text-main">{t(`cv_infra_short${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-subtle bg-card p-4 shadow-sm md:p-6 print:break-inside-avoid print:p-4 print:shadow-none">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading icon={Network} title={t("cv_recent_projects_title")} />
            <p className="max-w-xl text-sm leading-6 text-muted">{t("cv_recent_projects_desc")}</p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {recentProjects.map(({ key, href, category, tags, Icon }) => (
              <Link
                key={key}
                href={href}
                className="group flex h-full min-w-0 flex-col rounded-lg border border-subtle bg-page/70 p-4 transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-card hover:shadow-md dark:hover:border-blue-500 print:break-inside-avoid"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">{category[locale]}</p>
                    <h3 className="text-base font-semibold text-main group-hover:text-blue-700 dark:group-hover:text-blue-300">
                      {t(`cv_recent_${key}_title`)}
                    </h3>
                  </div>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-subtle bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-secondary">{t(`cv_recent_${key}_desc`)}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {tags.map((tag) => (
                    <TechBadge key={tag} name={tag} className="bg-card text-muted" />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-subtle bg-card p-5 shadow-sm md:p-6 print:p-4 print:shadow-none">
          <SectionHeading icon={Code2} title={t("cv_skills_title")} />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map(({ key, Icon }) => (
              <div
                key={key}
                className="rounded-lg border border-subtle bg-page/70 p-4 print:break-inside-avoid"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-subtle bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-main">{t(`cv_skill_${key}_title`)}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t(`cv_skill_${key}_items`)
                    .split("|")
                    .map((item) => item.trim())
                    .filter(Boolean)
                    .map((item) => (
                      <TechBadge key={item} name={item} className="bg-card text-muted" />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-subtle bg-card p-5 shadow-sm md:p-6 print:p-4 print:shadow-none">
          <SectionHeading icon={Users} title={t("cv_exp_title")} />
          <div className="mt-5 grid gap-4">
            {experienceItems.map(({ key, organization }) => {
              const experienceTitle = splitExperienceTitle(t(`exp${key}_title`));

              return (
                <div
                  key={key}
                  className="rounded-lg border border-subtle bg-page/70 p-4 print:break-inside-avoid"
                >
                  <div className="flex items-start gap-3">
                    <OrganizationLogo name={organization} size="sm" decorative={false} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="font-semibold leading-snug text-main">{experienceTitle.title}</h3>
                        {experienceTitle.period && (
                          <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-subtle bg-card px-2.5 py-1 text-xs font-semibold leading-none text-muted">
                            {experienceTitle.period}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">{t(`exp${key}_desc`)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border border-subtle bg-card p-5 shadow-sm md:p-6 print:break-inside-avoid print:p-4 print:shadow-none">
          <SectionHeading icon={ClipboardList} title={t("cv_edu_title")} />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {educationItems.map((item) => {
              const educationTitle = splitExperienceTitle(item.text);
              return (
                <div key={item.text} className="flex items-start gap-3 rounded-lg border border-subtle bg-page/70 p-4">
                  <OrganizationLogo name={item.organization} size="sm" decorative={false} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <span className="text-sm leading-6 text-muted">{educationTitle.title}</span>
                      {educationTitle.period && (
                        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-subtle bg-card px-2.5 py-1 text-xs font-semibold leading-none text-muted">
                          {educationTitle.period}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border border-blue-200/70 bg-blue-50/70 p-5 shadow-sm dark:border-blue-900/70 dark:bg-blue-950/20 md:p-6 print:hidden">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-main">{t("cv_request_title")}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{t("cv_request_desc")}</p>
            </div>
            <a
              href="mailto:contact@elkaza.org"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t("cv_request_cta")}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionHeading({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-subtle bg-accent/10 text-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h2 className="text-xl font-semibold tracking-normal text-main md:text-2xl">{title}</h2>
    </div>
  );
}

function splitExperienceTitle(title: string) {
  const match = title.match(/\s*\(([^()]+)\)\s*$/u);

  if (!match || match.index === undefined) {
    return { title, period: null };
  }

  return {
    title: title.slice(0, match.index).trim(),
    period: match[1],
  };
}
