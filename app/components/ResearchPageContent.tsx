"use client";

import { School } from "lucide-react";
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

        <section className="mt-8 rounded-xl border border-subtle bg-card p-6 shadow-sm md:p-8" aria-labelledby="mio-title">
          <div className="flex items-start gap-4">
            <School className="mt-1 h-8 w-8 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">{mio.institution}</p>
              <h2 id="mio-title" className="mt-3 break-words text-2xl font-semibold leading-snug text-main md:text-3xl">{mio.title}</h2>
              <p className="mt-3 text-sm font-semibold text-secondary">{mio.label}</p>
              <p className="mt-2 text-sm text-muted">{mio.programme}</p>
              <p className="mt-5 max-w-4xl leading-8 text-secondary">{mio.description}</p>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-subtle pt-8" aria-labelledby="research-interests">
          <h2 id="research-interests" className="text-xl font-semibold">{research.interestsTitle}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">{research.interests.map((interest) => <li key={interest} className="rounded-lg border border-subtle bg-card p-4 text-sm font-medium text-main">{interest}</li>)}</ul>
        </section>
      </div>
    </main>
  );
}
