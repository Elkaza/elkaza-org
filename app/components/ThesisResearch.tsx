import type { Locale } from "@/lib/siteContent";

const copy = {
  de: {
    eyebrow: "Aktuelle Forschung",
    compactMeta: "MIO-3 Master's Project · FH Technikum Wien · In Arbeit",
    education: "FH Technikum Wien · MSc Internet of Things & Intelligent Systems",
    detailMeta: "MIO-3 Master's Project · In Arbeit · 2026",
    compactTitle: "Secure Edge AI Gateway for IoT Networks",
    detailTitle: "Secure Edge AI Gateway for IoT Networks",
    summary:
      "Entwurf und prototypische Evaluation eines sicheren Edge-AI-Gateways für IoT-Netzwerke mit Fokus auf verständliche, wartbare und kontrollierte Betriebsmodelle.",
    compactMethods:
      "Systematische Literaturrecherche · Architektur- und Prototypentwicklung · Evaluationskonzept",
    methodsLabel: "Methoden",
    detailMethods:
      "Systematische Literaturrecherche, Architektur- und Prototypentwicklung sowie evaluative Analyse mit Design Science Research.",
    advisorLabel: "Status",
    advisor: "Thema und Betreuung noch in Abstimmung.",
  },
  en: {
    eyebrow: "Current research",
    compactMeta: "MIO-3 Master's Project · FH Technikum Wien · In progress",
    education: "FH Technikum Wien · MSc Internet of Things & Intelligent Systems",
    detailMeta: "MIO-3 Master's Project · In progress · 2026",
    compactTitle: "Secure Edge AI Gateway for IoT Networks",
    detailTitle: "Secure Edge AI Gateway for IoT Networks",
    summary:
      "Design and prototypical evaluation of a secure edge AI gateway for IoT networks with a focus on understandable, maintainable, and governable operations.",
    compactMethods:
      "Systematic Literature Review · Architecture and Prototype Development · Evaluation Concept",
    methodsLabel: "Research methods",
    detailMethods:
      "Systematic literature review, architecture and prototype development, and evaluative analysis using Design Science Research.",
    advisorLabel: "Status",
    advisor: "Topic and supervision under clarification.",
  },
} as const;

export function CurrentResearch({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section className="bg-[var(--surface)] py-16 md:py-20" aria-labelledby="current-research-title">
      <div className="mx-auto max-w-[960px] px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{c.eyebrow}</p>
        <p className="mt-3 text-sm font-medium text-[var(--text-secondary)]">{c.compactMeta}</p>
        <h2 id="current-research-title" className="mt-2 text-2xl font-bold tracking-tight text-[var(--text)] md:text-3xl">
          {c.compactTitle}
        </h2>
        <p className="mt-4 max-w-[75ch] leading-relaxed text-[var(--text-secondary)]">{c.summary}</p>
        <p className="mt-5 text-sm font-medium leading-relaxed text-[var(--text)]">{c.compactMethods}</p>
      </div>
    </section>
  );
}

export function ThesisEducation({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section className="bg-[var(--surface)] py-16 md:py-20" aria-labelledby="thesis-education-title">
      <div className="mx-auto max-w-[960px] px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{c.eyebrow}</p>
        <div className="mt-4 border-t border-[var(--border)] pt-6">
          <p className="font-semibold text-[var(--text)]">{c.education}</p>
          <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">{c.detailMeta}</p>
          <h2
            id="thesis-education-title"
            className={`mt-4 max-w-[35ch] text-2xl font-semibold leading-snug text-[var(--text)] ${locale === "de" ? "[overflow-wrap:anywhere]" : ""}`}
          >
            {c.detailTitle}
          </h2>
          <dl className="mt-6 grid gap-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-[var(--text)]">{c.methodsLabel}</dt>
              <dd className="mt-1 leading-relaxed text-[var(--text-secondary)]">{c.detailMethods}</dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--text)]">{c.advisorLabel}</dt>
              <dd className="mt-1 leading-relaxed text-[var(--text-secondary)]">{c.advisor}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
