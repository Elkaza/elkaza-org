"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useLocale } from "../LocaleProvider";

const DATA = [
  { title: "About", href: "/about", tags: ["profile", "ea"], year: 2025 },
  { title: "Research", href: "/research", tags: ["ea", "ai", "security"], year: 2025 },
  { title: "Projects", href: "/projects", tags: ["iot", "cloud", "ai"], year: 2025 },
  { title: "Teaching", href: "/teaching", tags: ["education", "security"], year: 2025 },
  { title: "Contact", href: "/contact", tags: ["links"], year: 2025 },
];

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020];
const TAGS = ["ai", "ea", "security", "iot", "cloud", "education", "profile"];

export default function ArchivesClient() {
  const { t } = useLocale();
  const [q, setQ] = useState("");
  const [year, setYear] = useState<number | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const results = useMemo(() => {
    return DATA.filter((item) => {
      const matchQ = q ? item.title.toLowerCase().includes(q.toLowerCase()) : true;
      const matchYear = year ? item.year === year : true;
      const matchTag = tag ? item.tags.includes(tag) : true;
      return matchQ && matchYear && matchTag;
    });
  }, [q, year, tag]);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Left rail */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("archives_title")}</h1>
          <p className="mt-3 text-gray-500">{t("archives_subtitle")}</p>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9">
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("search_placeholder")}
                className="w-full pl-10 pr-3 py-2 rounded-md border bg-[var(--surface)] border-[var(--outline)] text-[var(--text)] placeholder-[var(--text-dim)]"
              />
            </div>
          </div>

          <div className="mb-4 text-xs tracking-wide text-dim">{t("years")}</div>
          <div className="flex flex-wrap gap-2 mb-6">
            {YEARS.map((y) => (
              <button
                key={y}
                onClick={() => setYear(year === y ? null : y)}
                className={`px-3 py-1.5 rounded-md border text-sm ${
                  year === y
                    ? "font-semibold"
                    : "text-dim"
                }`}
                style={year === y ? { color: "var(--primary)", borderColor: "var(--primary)" } : { borderColor: "var(--outline)" }}
              >
                {y}
              </button>
            ))}
          </div>

          <div className="mb-4 text-xs tracking-wide text-dim">{t("tags")}</div>
          <div className="flex flex-wrap gap-2 mb-8">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(tag === t ? null : t)}
                className={`px-3 py-1.5 rounded-md border text-sm capitalize ${
                  tag === t
                    ? "font-semibold"
                    : "text-dim"
                }`}
                style={tag === t ? { color: "var(--primary)", borderColor: "var(--primary)" } : { borderColor: "var(--outline)" }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {results.map((r) => (
              <div key={r.href} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Link href={r.href} className="font-medium text-blue-700 dark:text-blue-400 hover:underline">
                  {r.title}
                </Link>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {r.year} · {r.tags.join(", ")}
                </div>
              </div>
            ))}
            {results.length === 0 && (
              <div className="text-dim">{t("no_results")}</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
