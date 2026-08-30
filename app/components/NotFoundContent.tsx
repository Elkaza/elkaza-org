import Link from "next/link";

export default function NotFoundContent({ locale }: { locale?: "de" | "en" }) {
  const heading = locale === "de"
    ? "Seite nicht gefunden"
    : locale === "en"
      ? "Page not found"
      : "Page not found / Seite nicht gefunden";

  return (
    <main
      id="not-found-page"
      className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl items-center px-5 py-12 text-main sm:px-6"
    >
      <section className="w-full rounded-lg border border-subtle bg-card p-6 shadow-sm sm:p-10">
        <p className="border-l-2 border-blue-700 pl-3 text-xs font-extrabold uppercase tracking-normal text-blue-800 dark:text-blue-300">
          404
        </p>
        <h1 className="mt-5 max-w-4xl break-words text-4xl font-extrabold leading-[1.05] tracking-normal text-main sm:text-5xl">
          {heading}
        </h1>

        <div className="mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-secondary sm:text-lg">
          {locale !== "de" && <p>The requested page does not exist or may have moved.</p>}
          {locale !== "en" && <p lang="de">Die angeforderte Seite existiert nicht oder wurde möglicherweise verschoben.</p>}
        </div>

        <nav aria-label="404 navigation" className="mt-8 flex flex-wrap gap-3">
          <Link
            href={locale === "de" ? "/" : "/en"}
            className="inline-flex items-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            {locale === "de" ? "Zur Startseite" : "English homepage"}
          </Link>
          <Link
            href={locale === "de" ? "/en" : "/"}
            lang={locale === "de" ? "en" : "de"}
            className="inline-flex items-center rounded-md border border-subtle bg-page px-5 py-2.5 text-sm font-semibold text-main transition-colors hover:border-blue-700 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-card dark:hover:text-blue-200"
          >
            {locale === "de" ? "English homepage" : "Deutsche Startseite"}
          </Link>
        </nav>
      </section>
    </main>
  );
}
