import { siteContent } from "@/lib/siteContent";
import { notFound } from "next/navigation";
import CTA from "@/app/components/CTA";
import { createLocalizedMetadata } from "@/lib/metadata";

const cases = siteContent.caseStudies.en.items;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = cases.find((item) => item.slug === slug);
  if (!cs) notFound();

  return createLocalizedMetadata({
    title: `${cs.title} - Elkaza`,
    description: `Illustrative scenario, not a customer reference. ${cs.context}`,
    path: `/en/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailEnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = cases.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <main>
      <section className="hero-gradient-enhanced py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Illustrative scenario · not a customer reference</p>
          <p className="text-sm font-medium text-[var(--muted)]">{cs.tag}</p>
          <h1 className="mt-4 mb-3 text-[2.5rem] font-bold leading-tight tracking-tight text-[var(--text)] [overflow-wrap:anywhere] md:text-5xl">{cs.title}</h1>
          <p className="text-xl text-[var(--text-secondary)]">{cs.result}</p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-[var(--border)]">
            <div className="py-7">
              <h2 className="text-xl font-bold text-[var(--text)] mb-2">Situation</h2>
              <p className="text-[var(--text-secondary)]">{cs.context}</p>
              <p className="text-[var(--text-secondary)] mt-1">{cs.problem}</p>
            </div>

            <div className="border-t border-[var(--border)] py-7">
              <h2 className="text-xl font-bold text-[var(--text)] mb-2">Possible approach</h2>
              <p className="text-[var(--text-secondary)]">{cs.approach}</p>
            </div>

            <div className="border-t border-[var(--border)] py-7">
              <h2 className="text-xl font-bold text-[var(--text)] mb-2">Target state</h2>
              <p className="text-[var(--text-secondary)] font-medium text-[var(--primary)]">{cs.result}</p>
            </div>

          </div>

          <p className="mb-6 mt-6 text-sm text-[var(--muted)]">
            This scenario is fictional and not a customer reference. No inquiries or orders are currently accepted.
          </p>

          <CTA href="/en/contact">View project status</CTA>
        </div>
      </section>
    </main>
  );
}
