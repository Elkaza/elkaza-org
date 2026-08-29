import { activeContactContent, publicContactHref, PUBLIC_BUSINESS_EMAIL } from "@/lib/launchContact";
import { SITE_CONTROLS } from "@/lib/siteStatus";
import type { Locale } from "@/lib/siteContent";

export default function ActiveContactPage({
  locale,
  preview = false,
}: {
  locale: Locale;
  preview?: boolean;
}) {
  if (!preview && !SITE_CONTROLS.publicContact) {
    throw new Error("ActiveContactPage cannot render while public contact is disabled.");
  }

  const content = activeContactContent[locale];

  return (
    <main>
      <section className="hero-gradient-enhanced py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-[2.25rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">{content.intro}</p>
          <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{content.prompt}</p>

          <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="break-all font-semibold text-[var(--text)]">{PUBLIC_BUSINESS_EMAIL}</p>
            <a
              href={publicContactHref()}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-5 py-3 font-medium text-[var(--primary-foreground)] transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
              style={{ color: "var(--primary-foreground)" }}
            >
              {content.action}
            </a>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-[var(--text)]">{content.guidanceTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
            {content.guidance.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <p className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-relaxed text-[var(--text-secondary)]">
            {content.security}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">{content.boundary}</p>
        </div>
      </section>
    </main>
  );
}
