"use client";

import { BookOpen, School } from "lucide-react";
import Link from "next/link";
import { useLocale } from "../LocaleProvider";
import { mioProject, thesisResearch } from "../lib/research";

export default function ResearchPageContent() {
  const { locale } = useLocale();
  const research = thesisResearch[locale];
  const mio = mioProject[locale];

  return (
    <main className="min-h-screen bg-page text-main">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-16">
        <header className="border-b border-subtle pb-8">
          <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase text-blue-800 dark:text-blue-300">{research.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal md:text-5xl">{research.pageTitle}</h1>
          <p className="mt-4 max-w-3xl text-secondary">{research.pageIntro}</p>
        </header>

        <section className="mt-10" aria-labelledby="tu-research-title">
          <div className="flex items-start gap-4">
            <BookOpen className="mt-1 h-8 w-8 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">{research.institution}</p>
              <h2 id="tu-research-title" className="mt-3 text-2xl font-semibold leading-snug text-main md:text-3xl">{research.thesisTitle}</h2>
              <p className="mt-3 text-sm font-semibold text-secondary">{research.thesisLabel} · {research.status}</p>
              <p className="mt-5 max-w-4xl leading-8 text-secondary">{research.question}</p>
              <h3 className="mt-6 font-semibold text-main">{research.methodsTitle}</h3>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={research.methodsTitle}>
                {research.methods.map((method) => <li key={method} className="rounded-md border border-subtle px-3 py-1 text-xs text-secondary">{method}</li>)}
              </ul>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-muted">{research.currentStatus}</p>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-subtle pt-10" aria-labelledby="mio-title">
          <div className="flex items-start gap-4">
            <School className="mt-1 h-8 w-8 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">{mio.institution}</p>
              <h2 id="mio-title" className="mt-3 break-words text-2xl font-semibold leading-snug text-main md:text-3xl">{mio.title}</h2>
              <p className="mt-3 text-sm font-semibold text-secondary">{mio.label}</p>
              <p className="mt-2 text-sm text-muted">{mio.programme}</p>
              <p className="mt-5 max-w-4xl leading-8 text-secondary">{mio.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Research topics">
                {["IoT Security", "Sensor-Data Integrity", "Edge Anomaly Detection", "MQTT", "Edge Computing"].map((tag) => <li key={tag} className="rounded-md border border-subtle px-3 py-1 text-xs text-secondary">{tag}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-blue-800 dark:text-blue-300">
                <Link className="underline underline-offset-4" href={`${locale === "de" ? "" : "/en"}/research/secure-edge-ai-iot-gateway`}>{locale === "de" ? "Projekt ansehen" : "View project"}</Link>
                <a className="underline underline-offset-4" href="https://github.com/Elkaza/secure-edge-ai-iot-gateway">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-subtle pt-8" aria-labelledby="research-interests">
          <h2 id="research-interests" className="text-xl font-semibold">{research.interestsTitle}</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">{research.interests.map((interest) => <li key={interest} className="border-t border-subtle pt-3 text-sm font-medium text-main">{interest}</li>)}</ul>
        </section>

        <section className="mt-10 border-t border-subtle pt-8" aria-labelledby="doctoral-direction">
          <h2 id="doctoral-direction" className="text-xl font-semibold">
            {locale === "de" ? "Langfristige Forschungsrichtung" : "Longer-term research direction"}
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-secondary">
            {locale === "de"
              ? "Nach Abschluss meiner laufenden Masterstudien erwäge ich ernsthaft eine Promotion. Besonders interessieren mich sichere IoT- und Edge-Systeme sowie Sicherheitsmechanismen, deren Wirksamkeit und Ressourcenbedarf sich experimentell bewerten lassen."
              : "After completing my current master's studies, I am seriously considering doctoral research. I am particularly interested in secure IoT and edge systems, and in security mechanisms whose effectiveness and resource cost can be evaluated experimentally."}
          </p>
        </section>
      </div>
    </main>
  );
}
