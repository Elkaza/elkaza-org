import { siteContent } from "@/lib/siteContent";
import { notFound } from "next/navigation";
import CTA from "@/app/components/CTA";
import { createLocalizedMetadata } from "@/lib/metadata";

const cases = siteContent.caseStudies.de.items;

export function generateStaticParams() {
    return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cs = cases.find((item) => item.slug === slug);
    if (!cs) notFound();

    return createLocalizedMetadata({
        title: `${cs.title} - Elkaza`,
        description: `Illustratives Szenario, keine Kundenreferenz. ${cs.context}`,
        path: `/referenzen/${slug}`,
    });
}

export default async function ReferenzDetailPage({
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
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Beispielszenario · keine Kundenreferenz</p>
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
                            <h2 className="text-xl font-bold text-[var(--text)] mb-2">Möglicher Ansatz</h2>
                            <p className="text-[var(--text-secondary)]">{cs.approach}</p>
                        </div>

                        <div className="border-t border-[var(--border)] py-7">
                            <h2 className="text-xl font-bold text-[var(--text)] mb-2">Zielbild</h2>
                            <p className="text-[var(--text-secondary)] font-medium text-[var(--primary)]">{cs.result}</p>
                        </div>

                    </div>

                    <p className="mb-6 mt-6 text-sm text-[var(--muted)]">
                        Dieses Szenario ist fiktiv und keine Kundenreferenz. Derzeit werden keine Anfragen oder Aufträge angenommen.
                    </p>

                    <CTA href="/kontakt">Projektstatus ansehen</CTA>
                </div>
            </section>
        </main>
    );
}
