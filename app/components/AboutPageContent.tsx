"use client";

import Image from "next/image";
import Link from "next/link";
import { AppWindow, ArrowRight, BookOpen, Languages, Mail, Server, Workflow } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { getLocalizedPath } from "../lib/localizedRoutes";
import { profile } from "../lib/profile";
import { mioProject, thesisResearch } from "../lib/research";
import Certifications from "./Certifications";
import { OrganizationLogo } from "./ui/OrganizationLogo";
import { TechBadge } from "./ui/TechBadge";

const profileTools = ["Linux", "Docker", "Python", "SQL", "GitHub Actions"];

const strongestAreas = {
  de: [
    { title: "Application Engineering", body: "Anforderungen, Fehlerbilder, Datenflüsse, Schnittstellen und technische Dokumentation strukturiert bearbeiten.", Icon: AppWindow },
    { title: "Infrastructure & Operations", body: "Linux-, Docker-, Netzwerk- und Monitoring-Umgebungen nachvollziehbar betreiben und übergeben.", Icon: Server },
    { title: "Automation & Data", body: "Wiederkehrende Abläufe mit Python, SQL und CI/CD vereinfachen und Ergebnisse transparent darstellen.", Icon: Workflow },
  ],
  en: [
    { title: "Application Engineering", body: "Work systematically with requirements, defects, data flows, interfaces and technical documentation.", Icon: AppWindow },
    { title: "Infrastructure & Operations", body: "Operate and hand over Linux, Docker, networking and monitoring environments clearly.", Icon: Server },
    { title: "Automation & Data", body: "Simplify recurring work with Python, SQL and CI/CD while keeping results transparent.", Icon: Workflow },
  ],
  ar: [
    { title: "Application Engineering", body: "Work systematically with requirements, defects, data flows, interfaces and technical documentation.", Icon: AppWindow },
    { title: "Infrastructure & Operations", body: "Operate and hand over Linux, Docker, networking and monitoring environments clearly.", Icon: Server },
    { title: "Automation & Data", body: "Simplify recurring work with Python, SQL and CI/CD while keeping results transparent.", Icon: Workflow },
  ],
} as const;

export default function AboutPageContent() {
  const { t, locale } = useLocale();
  const activeLocale = locale === "en" ? "en" : "de";
  const research = thesisResearch[locale];
  const mio = mioProject[locale];

  return (
    <main className="min-h-screen bg-page text-main transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
        <section className="grid items-center gap-7 rounded-xl border border-subtle bg-card p-5 shadow-sm md:grid-cols-[260px_1fr] md:p-7">
          <figure className="mx-auto w-full max-w-[260px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-subtle bg-slate-100 dark:bg-slate-900">
              <Image src="/images/me.jpg" alt="Mohamed Elkaza" fill sizes="260px" priority className="object-contain" />
            </div>
          </figure>
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
          <h2 id="strongest-areas" className="text-2xl font-semibold text-main">{locale === "de" ? "Drei stärkste Bereiche" : "Three strongest areas"}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {strongestAreas[locale].map(({ title, body, Icon }) => (
              <article key={title} className="rounded-lg border border-subtle bg-card p-5 shadow-sm">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-main">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              </article>
            ))}
          </div>
          <Link href={getLocalizedPath("/cv", activeLocale)} className="mt-5 inline-flex items-center font-semibold text-blue-700 hover:underline dark:text-blue-300">
            {locale === "de" ? "Berufserfahrung im CV" : "Professional experience in the CV"}<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </section>

        <section className="mt-12 border-t border-subtle pt-10" aria-labelledby="academic-foundation">
          <h2 id="academic-foundation" className="text-2xl font-semibold text-main">{t("about_education_title")}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">{t("about_education_intro")}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {profile.education.map((education) => (
              <article key={education.institution} className="rounded-lg border border-subtle bg-card p-5 shadow-sm">
                <OrganizationLogo name={education.institution} size="sm" decorative={false} />
                <h3 className="mt-4 font-semibold leading-snug text-main">{education.program[locale]} · {education.institution}</h3>
                <p className="mt-2 text-sm font-medium text-muted">{education.period[locale]}</p>
                {education.details[locale].map((detail) => <p key={detail} className="mt-1 text-sm leading-6 text-secondary">{detail}</p>)}
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
                <article className="rounded-lg border border-subtle bg-card p-4">
                  <h3 className="font-semibold text-main">Enterprise Coherence Governance</h3>
                  <p className="mt-2 text-sm text-muted">{research.thesisLabel}</p>
                </article>
                <article className="rounded-lg border border-subtle bg-card p-4">
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
