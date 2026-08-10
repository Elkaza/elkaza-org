"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import type { Locale } from "@/app/i18n/messages";
import { getLocalizedPath } from "@/app/lib/localizedRoutes";

export type ArchiveItem = {
  title: Pick<Record<Locale, string>, "de" | "en">;
  summary: Pick<Record<Locale, string>, "de" | "en">;
  href: string;
  type: "page" | "project" | "blog";
  tags: string[];
  year: number;
};

const TYPE_LABELS: Record<ArchiveItem["type"], Record<"de" | "en", string>> = {
  page: { de: "Seiten", en: "Pages" },
  project: { de: "Projekte", en: "Projects" },
  blog: { de: "Blog", en: "Blog" },
};

const COPY = {
  de: {
    title: "Search the Site",
    intro: "Durchsuche Seiten, Projekte und Blogposts nach Thema, Jahr oder Technologie.",
    placeholder: "Suchen nach Docker, IoT, Python, Security...",
    allTypes: "Alle Typen",
    years: "Jahre",
    tags: "Tags",
    results: "Ergebnisse",
    noResults: "Keine Ergebnisse. Filter zurücksetzen oder anders suchen.",
  },
  en: {
    title: "Search the Site",
    intro: "Explore pages, projects and blog posts by topic, year or technology.",
    placeholder: "Search Docker, IoT, Python, security...",
    allTypes: "All types",
    years: "Years",
    tags: "Tags",
    results: "Results",
    noResults: "No results. Try clearing filters or searching differently.",
  },
};

export default function ArchivesSearch({ items }: { items: ArchiveItem[] }) {
  const { locale } = useLocale();
  const activeLocale = locale === "de" ? "de" : "en";
  const copy = COPY[activeLocale];
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<number | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [type, setType] = useState<ArchiveItem["type"] | "all">("all");

  const years = useMemo(
    () => Array.from(new Set(items.map((item) => item.year))).sort((a, b) => b - a),
    [items]
  );
  const tags = useMemo(
    () => Array.from(new Set(items.flatMap((item) => item.tags))).sort((a, b) => a.localeCompare(b)).slice(0, 28),
    [items]
  );

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items
      .filter((item) => {
        const haystack = [
          item.title[activeLocale],
          item.summary[activeLocale],
          item.type,
          ...item.tags,
        ].join(" ").toLowerCase();

        return (
          (!normalizedQuery || haystack.includes(normalizedQuery)) &&
          (!year || item.year === year) &&
          (!tag || item.tags.includes(tag)) &&
          (type === "all" || item.type === type)
        );
      })
      .sort((left, right) => right.year - left.year || left.title[activeLocale].localeCompare(right.title[activeLocale]));
  }, [activeLocale, items, query, tag, type, year]);

  return (
    <main className="min-h-screen bg-page text-main transition-colors duration-300">
      <section className="mx-auto max-w-6xl px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <aside className="hidden self-start lg:sticky lg:top-20 lg:col-span-3 lg:block">
          <div className="mb-3 h-1.5 w-20 bg-blue-600" />
          <h1 className="text-3xl font-bold">{copy.title}</h1>
          <p className="mt-3 text-muted">{copy.intro}</p>
        </aside>

        <div className="lg:col-span-9">
          <div className="mb-6 lg:hidden">
            <h1 className="text-3xl font-bold">{copy.title}</h1>
            <p className="mt-3 text-muted">{copy.intro}</p>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.placeholder}
                className="w-full rounded-md border border-subtle bg-card py-2 pl-10 pr-3 text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <FilterButton active={type === "all"} onClick={() => setType("all")}>
              {copy.allTypes}
            </FilterButton>
            {(["page", "project", "blog"] as const).map((candidate) => (
              <FilterButton key={candidate} active={type === candidate} onClick={() => setType(candidate)}>
                {TYPE_LABELS[candidate][activeLocale]}
              </FilterButton>
            ))}
          </div>

          <FilterGroup label={copy.years}>
            {years.map((candidate) => (
              <FilterButton key={candidate} active={year === candidate} onClick={() => setYear(year === candidate ? null : candidate)}>
                {candidate}
              </FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup label={copy.tags}>
            {tags.map((candidate) => (
              <FilterButton key={candidate} active={tag === candidate} onClick={() => setTag(tag === candidate ? null : candidate)}>
                {candidate}
              </FilterButton>
            ))}
          </FilterGroup>

          <div className="mb-4 text-sm font-semibold text-muted">
            {results.length} {copy.results}
          </div>
          <div className="space-y-3">
            {results.map((item) => (
              <article key={item.href} className="rounded-lg border border-subtle bg-card p-4 transition-colors hover:border-blue-500/30">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-subtle px-2.5 py-1 text-xs font-medium text-muted">
                    {TYPE_LABELS[item.type][activeLocale]}
                  </span>
                  <span className="text-xs text-muted">{item.year}</span>
                </div>
                <Link href={getLocalizedPath(item.href, activeLocale)} className="mt-3 block font-semibold text-blue-600 hover:underline">
                  {item.title[activeLocale]}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary[activeLocale]}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 6).map((itemTag) => (
                    <span key={itemTag} className="rounded-md bg-subtle px-2 py-1 text-xs text-muted">
                      {itemTag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            {results.length === 0 && <div className="italic text-muted">{copy.noResults}</div>}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">{label}</div>
      <div className="mb-6 flex flex-wrap gap-2">{children}</div>
    </>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
        active
          ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20"
          : "border-subtle text-muted hover:border-blue-500/50 hover:text-main"
      }`}
    >
      {children}
    </button>
  );
}
