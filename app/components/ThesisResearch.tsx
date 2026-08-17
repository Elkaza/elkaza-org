import type { Locale } from "@/lib/siteContent";

const copy = {
  de: {
    eyebrow: "Aktuelle Forschung",
    compactMeta: "Diplomarbeit · TU Wien · In Arbeit",
    education: "TU Wien · Wirtschaftsinformatik",
    detailMeta: "Diplomarbeit · In Arbeit · 2026",
    compactTitle: "Rahmenwerk für Enterprise Coherence Governance",
    detailTitle:
      "Rahmenwerk für Enterprise Coherence Governance: Methodenintegration bei Unternehmenstransformationen in Österreich",
    summary:
      "Untersuchung, wie Methoden und Disziplinen wie Enterprise Architecture, IT-Governance, IT Service Management, Projekt- und Portfoliomanagement, Agile und Change Management bei Unternehmenstransformationen koordiniert werden können.",
    compactMethods:
      "Systematische Literaturrecherche · Analyse österreichischer Stellenanzeigen · Experteninterviews · Design Science Research",
    methodsLabel: "Methoden",
    detailMethods:
      "Systematische Literaturrecherche, Analyse österreichischer Stellenanzeigen, Experteninterviews, Design Science Research und Method Engineering.",
    advisorLabel: "Betreuung",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
  },
  en: {
    eyebrow: "Current research",
    compactMeta: "Master's Thesis / Diplomarbeit · TU Wien · In progress",
    education: "TU Wien · Business Informatics",
    detailMeta: "Master's Thesis / Diplomarbeit · In progress · 2026",
    compactTitle: "A Framework for Enterprise Coherence Governance",
    detailTitle:
      "A Framework for Enterprise Coherence Governance: Method Integration During Organizational Transformation in Austria",
    summary:
      "Research on how methods and disciplines such as enterprise architecture, IT governance, IT service management, project and portfolio management, Agile and change management can be coordinated during organizational transformation.",
    compactMethods:
      "Systematic Literature Review · Austrian Job-Market Analysis · Expert Interviews · Design Science Research",
    methodsLabel: "Research methods",
    detailMethods:
      "Systematic Literature Review, Austrian job-advertisement analysis, expert interviews, Design Science Research and method engineering.",
    advisorLabel: "Advisor",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
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
          <h2 id="thesis-education-title" className="mt-4 max-w-[35ch] text-2xl font-semibold leading-snug text-[var(--text)]">
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
