"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  Languages,
  Mail,
  MapPin,
  School,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { getLocalizedPath } from "../lib/localizedRoutes";
import { profile } from "../lib/profile";
import { mioProject, thesisResearch } from "../lib/research";
import { OrganizationLogo } from "./ui/OrganizationLogo";
import { TechBadge } from "./ui/TechBadge";

const selectedProjects = [
  {
    slug: "enterprise-self-hosted-infrastructure",
    title: "Self-Hosted Infrastructure",
    description: {
      de: "Hybrid-Cloud-Betrieb mit privatem Ingress, Docker, Monitoring, Deployment-Automatisierung und verifizierten Backups.",
      en: "Hybrid-cloud operations with private ingress, Docker, monitoring, deployment automation and verified backups.",
      ar: "Hybrid-cloud operations with private ingress, Docker, monitoring, deployment automation and verified backups.",
    },
    tags: ["Linux", "Docker", "Tailscale", "GitHub Actions"],
  },
  {
    slug: "edgeguardian-edge-ai-safety-bubble",
    title: "EdgeGuardian",
    description: {
      de: "Demonstrierter Edge-AI-Prototyp mit Kamera, LiDAR, ESP32 und lokaler Entscheidungslogik.",
      en: "Demonstrated edge-AI prototype with camera, LiDAR, ESP32 and local decision logic.",
      ar: "Demonstrated edge-AI prototype with camera, LiDAR, ESP32 and local decision logic.",
    },
    tags: ["Raspberry Pi 5", "Hailo-8L", "LiDAR", "ESP32"],
  },
  {
    slug: "tinyml-vibration-anomaly-detection",
    title: "TinyML Vibration Detection",
    description: {
      de: "Akademischer Arduino-Prototyp für lokale Vibrationsklassifikation mit reproduzierbarer Validierung.",
      en: "Academic Arduino prototype for local vibration classification with reproducible validation.",
      ar: "Academic Arduino prototype for local vibration classification with reproducible validation.",
    },
    tags: ["Arduino", "IMU", "C++", "TinyML"],
  },
] as const;

const skillGroups = [
  ["cv_skill_platform_title", "cv_skill_platform_items"],
  ["cv_skill_automation_title", "cv_skill_automation_items"],
  ["cv_skill_networking_title", "cv_skill_networking_items"],
  ["cv_skill_operations_title", "cv_skill_operations_items"],
  ["cv_skill_software_title", "cv_skill_software_items"],
  ["cv_skill_projectManagement_title", "cv_skill_projectManagement_items"],
] as const;

const certificationOrganizations = ["pma / IPMA", "University of Graz", "LinkedIn Learning", null] as const;

export default function CvPageContent() {
  const { locale, t } = useLocale();
  const activeLocale = locale === "en" ? "en" : "de";
  const research = thesisResearch[locale];
  const mio = mioProject[locale];
  const researchMethods = locale === "de"
    ? "Systematische Literaturrecherche · Analyse österreichischer Stellenanzeigen · Design Science Research"
    : "Systematic Literature Review · Austrian Job-Ad Analysis · Design Science Research";

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-main sm:px-6 md:py-14 print:max-w-none print:px-0 print:py-0">
      <section className="rounded-xl border border-subtle bg-card p-5 shadow-sm md:p-8 print:border-0 print:p-0 print:shadow-none">
        <p className="text-sm font-extrabold uppercase tracking-normal text-main">{t("cv_title")}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-normal text-main md:text-4xl">{profile.name}</h1>
        <p className="mt-2 text-lg font-semibold text-secondary">{profile.title[locale]}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2 rounded-md border border-subtle bg-page px-3 py-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {profile.location[locale]}
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-subtle bg-page px-3 py-1.5">
            {profile.workAuthorization[locale]}
          </span>
          <a className="inline-flex items-center gap-2 rounded-md border border-subtle bg-page px-3 py-1.5 hover:text-blue-700" href={`mailto:${profile.email}`}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
          <a className="rounded-md border border-subtle bg-page px-3 py-1.5 hover:text-blue-700" href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="rounded-md border border-subtle bg-page px-3 py-1.5 hover:text-blue-700" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <div className="mt-8 space-y-8 print:mt-6 print:space-y-5">
        <CvSection icon={FileText} title={t("cv_summary_title")}>
          <p className="max-w-4xl text-sm leading-7 text-secondary md:text-base">{t("cv_summary_text")}</p>
        </CvSection>

        <CvSection icon={BriefcaseBusiness} title={t("cv_exp_title")}>
          <div className="space-y-5">
            {profile.employment.map((experience) => (
              <article key={`${experience.organization.en}-${experience.period}`} className="border-t border-subtle pt-5 first:border-t-0 first:pt-0 print:break-inside-avoid">
                <div className="flex items-start gap-3">
                  <OrganizationLogo name={experience.organization.en} size="sm" decorative={false} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="font-semibold text-main">{experience.title[locale]}</h3>
                        <p className="mt-1 text-sm text-muted">{experience.organization[locale]}{experience.location ? ` · ${experience.location[locale]}` : ""}</p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold tabular-nums text-main">{experience.period}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-sm leading-6 text-secondary">
                      {experience.bullets[locale].map((bullet) => (
                        <li key={bullet} className="flex gap-2"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" /><span>{bullet}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </CvSection>

        <CvSection icon={School} title={locale === "de" ? "Ausbildung" : "Education"}>
          <div className="grid gap-4 md:grid-cols-3">
            {profile.education.map((education) => (
              <article key={education.institution} className="rounded-lg border border-subtle bg-page/70 p-4 print:break-inside-avoid">
                <div className="flex items-start gap-3">
                  <OrganizationLogo name={education.institution} size="sm" decorative={false} />
                  <div>
                    <h3 className="font-semibold leading-snug text-main">{education.program[locale]} · {education.institution}</h3>
                    <p className="mt-2 text-sm font-medium text-muted">{education.period[locale]}</p>
                    {education.details[locale].map((detail) => <p key={detail} className="mt-1 text-sm leading-6 text-secondary">{detail}</p>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </CvSection>

        <CvSection icon={BookOpen} title={locale === "de" ? "Aktuelle akademische Arbeit" : "Current Academic Work"} accent>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-blue-200/70 bg-card p-5 dark:border-blue-900/70 print:break-inside-avoid">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">{research.thesisLabel}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-main">{research.thesisTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{research.question}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{researchMethods}</p>
              <Link href={getLocalizedPath("/research", activeLocale)} className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300">
                {locale === "de" ? "Forschung ansehen" : "View research"}
              </Link>
            </article>
            <article className="rounded-lg border border-subtle bg-card p-5 print:break-inside-avoid">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">{mio.label}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-main">{mio.title}</h3>
              <p className="mt-2 text-sm text-muted">{mio.programme}</p>
              <p className="mt-3 text-sm leading-7 text-secondary">{mio.description}</p>
            </article>
          </div>
        </CvSection>

        <CvSection icon={Code2} title={locale === "de" ? "Ausgewählte Projekte" : "Selected Projects"}>
          <div className="grid gap-4 md:grid-cols-3">
            {selectedProjects.map((project) => (
              <Link key={project.slug} href={getLocalizedPath(`/projects/${project.slug}`, activeLocale)} className="flex flex-col rounded-lg border border-subtle bg-page/70 p-4 transition hover:border-blue-400">
                <h3 className="font-semibold text-main">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.description[locale]}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.tags.map((tag) => <TechBadge key={tag} name={tag} className="bg-card text-muted" />)}</div>
              </Link>
            ))}
          </div>
        </CvSection>

        <CvSection icon={Code2} title={t("cv_skills_title")}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map(([titleKey, itemsKey]) => (
              <article key={titleKey} className="rounded-lg border border-subtle bg-page/70 p-4 print:break-inside-avoid">
                <h3 className="font-semibold text-main">{t(titleKey)}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {t(itemsKey).split("|").map((item) => item.trim()).filter(Boolean).map((item) => <TechBadge key={item} name={item} className="bg-card text-muted" />)}
                </div>
              </article>
            ))}
          </div>
        </CvSection>

        <CvSection icon={Award} title={locale === "de" ? "Zertifizierungen" : "Certifications"}>
          <div className="grid gap-3 sm:grid-cols-2">
            {profile.certifications.map((certification, index) => (
              <article key={certification.title} className="flex items-start gap-3 rounded-lg border border-subtle bg-page/70 p-4 print:break-inside-avoid">
                {certificationOrganizations[index] && <OrganizationLogo name={certificationOrganizations[index]} size="sm" decorative={false} />}
                <div><h3 className="text-sm font-semibold leading-6 text-main">{certification.title}</h3><p className="mt-1 text-sm text-muted">{certification.issuer} · {certification.year}</p></div>
              </article>
            ))}
          </div>
        </CvSection>

        <CvSection icon={Languages} title={locale === "de" ? "Sprachen" : "Languages"}>
          <div className="flex flex-wrap gap-3">
            {profile.languages.map((language) => <p key={language.code} className="rounded-md border border-subtle bg-page px-3 py-2 text-sm"><span className="font-semibold text-main">{language.name[locale]}</span><span className="text-muted"> · {language.level[locale]}</span></p>)}
          </div>
        </CvSection>

        <section className="rounded-xl border border-blue-200/70 bg-blue-50/70 p-5 shadow-sm dark:border-blue-900/70 dark:bg-blue-950/20 md:p-6 print:hidden">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div><h2 className="text-xl font-semibold text-main">{t("cv_request_title")}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{t("cv_request_desc")}</p></div>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"><Mail className="h-4 w-4" aria-hidden="true" />{t("cv_request_cta")}</a>
          </div>
        </section>
      </div>
    </main>
  );
}

function CvSection({ icon: Icon, title, children, accent = false }: { icon: LucideIcon; title: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <section className={`rounded-xl border p-5 shadow-sm md:p-6 print:p-4 print:shadow-none ${accent ? "border-blue-200/70 bg-blue-50/50 dark:border-blue-900/70 dark:bg-blue-950/20" : "border-subtle bg-card"}`}>
      <div className="mb-5 flex items-center gap-3"><span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-subtle bg-accent/10 text-accent"><Icon className="h-5 w-5" aria-hidden="true" /></span><h2 className="text-xl font-semibold text-main md:text-2xl">{title}</h2></div>
      {children}
    </section>
  );
}
