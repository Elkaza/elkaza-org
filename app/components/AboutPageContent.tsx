"use client";

import Link from "next/link";
import { AppWindow, ArrowRight, BookOpen, BriefcaseBusiness, Languages, Mail, Server, ShieldCheck, Workflow } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { getLocalizedPath } from "../lib/localizedRoutes";
import { profile } from "../lib/profile";
import { mioProject } from "../lib/research";
import Certifications from "./Certifications";
import { OrganizationLogo } from "./ui/OrganizationLogo";
import { TechBadge } from "./ui/TechBadge";

const profileTools = ["Linux", "Ansible", "CrowdSec", "Python"];

const strongestAreas = {
  de: [
    { title: "Application Engineering", body: "Ich verfolge Anwendungsprobleme über Anforderungen, Datenflüsse und Schnittstellen und dokumentiere, was als Nächstes zu tun ist.", Icon: AppWindow },
    { title: "Infrastructure & Security Operations", body: "In meinem Lab trenne ich öffentlichen Ingress von privater Administration, prüfe Logs und stelle Dienste aus Backups wieder her.", Icon: Server },
    { title: "Research & Automation", body: "Ich nutze Python und SQL für Automatisierung und baue kontrollierte Experimente für Edge AI und IoT-Sicherheit auf.", Icon: Workflow },
  ],
  en: [
    { title: "Application Engineering", body: "I trace application problems across requirements, data flows and interfaces, then document what needs to happen next.", Icon: AppWindow },
    { title: "Infrastructure & Security Operations", body: "In my lab, I separate public ingress from private administration, inspect logs and restore services from backups.", Icon: Server },
    { title: "Research & Automation", body: "I use Python and SQL for automation and build controlled experiments for edge AI and IoT security.", Icon: Workflow },
  ],
  ar: [
    { title: "Application Engineering", body: "I trace application problems across requirements, data flows and interfaces, then document what needs to happen next.", Icon: AppWindow },
    { title: "Infrastructure & Security Operations", body: "In my lab, I separate public ingress from private administration, inspect logs and restore services from backups.", Icon: Server },
    { title: "Research & Automation", body: "I use Python and SQL for automation and build controlled experiments for edge AI and IoT security.", Icon: Workflow },
  ],
} as const;

export default function AboutPageContent() {
  const { t, locale } = useLocale();
  const activeLocale = locale === "en" ? "en" : "de";
  const mio = mioProject[locale];

  return (
    <main className="min-h-screen bg-page text-main transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
        <section className="max-w-4xl border-b border-subtle pb-10">
          <div>
            <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase text-blue-800 dark:text-blue-300">{t("about_profile_h2")}</p>
            <h1 className="mt-4 text-3xl font-bold text-main">{t("nav_about")}</h1>
            <p className="mt-4 text-lg font-semibold leading-8 text-main">{t("about_profile_intro")}</p>
            <p className="mt-4 leading-7 text-secondary">{t("about_p1")}</p>
            <p className="mt-4 text-sm font-medium text-muted">{profile.workAuthorization[locale]}</p>
            <div className="mt-5 flex flex-wrap gap-2">{profileTools.map((tool) => <TechBadge key={tool} name={tool} className="bg-page px-3 py-1.5 text-sm" />)}</div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="strongest-areas">
          <h2 id="strongest-areas" className="text-2xl font-semibold text-main">{locale === "de" ? "Aktuelle Schwerpunkte" : "Current focus"}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {strongestAreas[locale].map(({ title, body, Icon }) => (
              <article key={title} className="border-t border-subtle pt-4">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-main">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-subtle pt-10" aria-labelledby="professional-experience">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-7 w-7 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <h2 id="professional-experience" className="text-2xl font-semibold text-main">
              {locale === "de" ? "Berufserfahrung" : "Professional experience"}
            </h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {profile.employment.map((experience) => (
              <article key={`${experience.organization.en}-${experience.period}`} className="border-t border-subtle pt-4">
                <div className="flex items-start gap-3">
                  <OrganizationLogo name={experience.organization.en} size="sm" decorative={false} />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-main">{experience.title[locale]}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {experience.organization[locale]} · {experience.period}
                    </p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-secondary">
                  {experience.bullets[locale].slice(0, 2).map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link href={getLocalizedPath("/cv", activeLocale)} className="mt-6 inline-flex items-center font-semibold text-blue-700 hover:underline dark:text-blue-300">
            {locale === "de" ? "Vollständigen CV ansehen" : "View full CV"}<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </section>

        <section className="mt-12 border-t border-subtle pt-10" aria-labelledby="cybersecurity-development">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <div className="max-w-4xl">
              <h2 id="cybersecurity-development" className="text-2xl font-semibold text-main">
                {locale === "de" ? "Cybersecurity-Weiterbildung" : "Cybersecurity development"}
              </h2>
              <p className="mt-3 leading-7 text-secondary">
                {locale === "de"
                  ? "Ich arbeite derzeit am Junior Cybersecurity Analyst Path der HTB Academy und wende die Inhalte direkt in meinem Lab an: durch Log-Analyse, gehärtete Zugriffswege sowie dokumentierte Incident- und Recovery-Abläufe."
                  : "I am currently working through HTB Academy's Junior Cybersecurity Analyst path and applying the material directly in my lab through log analysis, hardened access paths, and documented incident and recovery procedures."}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t border-subtle pt-10" aria-labelledby="academic-foundation">
          <h2 id="academic-foundation" className="text-2xl font-semibold text-main">{t("about_education_title")}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">{t("about_education_intro")}</p>
          <p className="mt-3 max-w-3xl leading-7 text-secondary">
            {locale === "de"
              ? "Nach den laufenden Masterarbeiten erwäge ich eine Promotion. Mich interessieren dabei sichere IoT- und Edge-Systeme sowie Versuche, deren Aufbau und Ergebnisse sich nachvollziehen lassen."
              : "I am considering doctoral research after the current master's work. I am particularly interested in secure IoT and edge systems and in experiments whose setup and results can be reproduced."}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {profile.education.map((education) => (
              <article key={education.institution} className="rounded-xl border border-subtle bg-card p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">{education.institution}</p>
                    <h3 className="mt-2 font-semibold leading-snug text-main">{education.program[locale]}</h3>
                  </div>
                  <OrganizationLogo name={education.institution} size="sm" decorative={false} />
                </div>
                <p className="mt-4 text-sm font-semibold text-muted">{education.period[locale]}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-secondary">
                  {education.details[locale].map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-subtle pt-10" aria-labelledby="about-research">
          <div className="flex items-start gap-4">
            <BookOpen className="mt-1 h-7 w-7 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <h2 id="about-research" className="text-2xl font-semibold leading-snug text-main">{locale === "de" ? "Aktuelle akademische Arbeit" : "Current Academic Work"}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <article className="border-l-2 border-blue-600 pl-4">
                  <h3 className="font-semibold text-main">Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers</h3>
                  <p className="mt-2 text-sm text-muted">
                    {locale === "de"
                      ? "TU Wien Masterarbeit · in Arbeit seit 10/2026"
                      : "TU Wien master's thesis · in progress since 10/2026"}
                  </p>
                </article>
                <article className="border-l-2 border-blue-600 pl-4">
                  <h3 className="font-semibold text-main">{mio.title}</h3>
                  <p className="mt-2 text-sm text-muted">{mio.label}</p>
                </article>
              </div>
              <Link href={getLocalizedPath("/research", activeLocale)} className="mt-5 inline-flex items-center font-semibold text-blue-700 hover:underline dark:text-blue-300">{locale === "de" ? "Akademische Arbeit ansehen" : "View Academic Work"}<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="about-certifications">
          <h2 id="about-certifications" className="text-2xl font-semibold text-main">{locale === "de" ? "Zertifizierungen" : "Certifications"}</h2>
          <Certifications />
        </section>

        <section className="mt-12 flex flex-col gap-6 border-t border-subtle pt-10 md:flex-row md:items-center md:justify-between" aria-labelledby="languages-contact">
          <div>
            <div className="flex items-center gap-3"><Languages className="h-6 w-6 text-blue-600" aria-hidden="true" /><h2 id="languages-contact" className="text-2xl font-semibold text-main">{locale === "de" ? "Sprachen" : "Languages"}</h2></div>
            <p className="mt-3 text-muted">{profile.languages.map((language) => `${language.name[locale]}: ${language.level[locale]}`).join(" · ")}</p>
          </div>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"><Mail className="mr-2 h-4 w-4" aria-hidden="true" />{profile.email}</a>
        </section>
      </div>
    </main>
  );
}
