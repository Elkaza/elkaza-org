import type { Locale } from "@/app/i18n/messages";
import type { ProjectHighlight } from "@/app/lib/projects";

export function ProjectHighlights({
  highlights,
  locale,
  className = "",
}: {
  highlights: ProjectHighlight[];
  locale: Locale;
  className?: string;
}) {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <section className={["rounded-lg border border-subtle bg-card p-4 sm:p-5", className].join(" ")}>
      <h2 className="text-xs font-extrabold uppercase tracking-normal text-muted">
        {locale === "de" ? "Kernergebnisse" : "Key results"}
      </h2>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((highlight) => (
          <div key={highlight.value.en} className="min-w-0 border-l-2 border-blue-500 pl-3">
            <dt className="break-words text-base font-bold leading-snug text-main">
              {highlight.value[locale] ?? highlight.value.en}
            </dt>
            <dd className="mt-1 break-words text-sm leading-relaxed text-muted">
              {highlight.label[locale] ?? highlight.label.en}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
