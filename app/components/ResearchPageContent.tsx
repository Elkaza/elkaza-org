"use client";

import { BookOpen, CheckCircle2, Compass, FlaskConical, Network } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { thesisResearch } from "../lib/research";

export default function ResearchPageContent() {
  const { locale } = useLocale();
  const research = thesisResearch[locale];

  return (
    <main className="min-h-screen bg-page text-main">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-16">
        <header className="border-b border-subtle pb-8">
          <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase text-blue-800 dark:text-blue-300">{research.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal md:text-5xl">{research.pageTitle}</h1>
          <p className="mt-4 text-sm font-semibold text-secondary">{research.institution}</p>
        </header>

        <section className="mt-8 rounded-xl border border-blue-200/70 bg-blue-50/60 p-6 dark:border-blue-900/70 dark:bg-blue-950/20 md:p-8" aria-labelledby="thesis-title">
          <div className="flex items-start gap-4">
            <BookOpen className="mt-1 h-8 w-8 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">{research.thesisLabel}</p>
              <h2 id="thesis-title" className="mt-3 max-w-4xl break-words text-2xl font-semibold leading-snug text-main md:text-3xl">{research.thesisTitle}</h2>
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <div><dt className="font-semibold text-main">{research.advisorLabel}</dt><dd className="mt-1 text-muted">{research.advisor}</dd></div>
                <div><dt className="font-semibold text-main">Status</dt><dd className="mt-1 text-muted">{research.status}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="research-problem">
          <div className="flex items-center gap-3"><Compass className="h-6 w-6 text-blue-600" aria-hidden="true" /><h2 id="research-problem" className="text-2xl font-semibold">{research.questionTitle}</h2></div>
          <p className="mt-4 max-w-4xl leading-8 text-secondary">{research.question}</p>
          <h3 className="mt-7 font-semibold text-main">{research.areasTitle}</h3>
          <div className="mt-3 flex flex-wrap gap-2">{research.areas.map((area) => <span key={area} className="rounded-md border border-subtle bg-card px-3 py-1.5 text-sm text-secondary">{area}</span>)}</div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-subtle bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3"><FlaskConical className="h-6 w-6 text-blue-600" aria-hidden="true" /><h2 className="text-xl font-semibold">{research.methodsTitle}</h2></div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-secondary">{research.methods.map((method) => <li key={method} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /><span>{method}</span></li>)}</ul>
          </article>
          <article className="rounded-xl border border-subtle bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3"><Network className="h-6 w-6 text-blue-600" aria-hidden="true" /><h2 className="text-xl font-semibold">{research.artifactTitle}</h2></div>
            <p className="mt-5 text-sm leading-7 text-secondary">{research.artifact}</p>
          </article>
        </section>

        <section className="mt-10 rounded-xl border border-subtle bg-card p-6" aria-labelledby="research-status">
          <h2 id="research-status" className="text-xl font-semibold">{research.currentStatusTitle}</h2>
          <p className="mt-3 max-w-4xl leading-7 text-secondary">{research.currentStatus}</p>
        </section>

        <section className="mt-10 border-t border-subtle pt-8" aria-labelledby="research-interests">
          <h2 id="research-interests" className="text-xl font-semibold">{research.interestsTitle}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">{research.interests.map((interest) => <li key={interest} className="rounded-lg border border-subtle bg-card p-4 text-sm font-medium text-main">{interest}</li>)}</ul>
        </section>
      </div>
    </main>
  );
}
