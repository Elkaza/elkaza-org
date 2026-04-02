"use client";
import Link from "next/link";
import { Network, Users, Cpu, GraduationCap, type LucideIcon } from "lucide-react";
import { useLocale } from "../LocaleProvider";

type FocusCard = {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
    icon: LucideIcon;
};

export default function TeachingPageContent() {
    const { t } = useLocale();
    const cards: FocusCard[] = [
        {
            title: t("teach_c1_title"),
            description: t("teach_c1_desc"),
            href: "/research",
            linkLabel: t("teach_c1_link"),
            icon: Network,
        },
        {
            title: t("teach_c2_title"),
            description: t("teach_c2_desc"),
            href: "/cv",
            linkLabel: t("teach_c2_link"),
            icon: Users,
        },
        {
            title: t("teach_c3_title"),
            description: t("teach_c3_desc"),
            href: "/projects",
            linkLabel: t("teach_c3_link"),
            icon: Cpu,
        },
        {
            title: t("teach_c4_title"),
            description: t("teach_c4_desc"),
            href: "/projects",
            linkLabel: t("teach_c4_link"),
            icon: GraduationCap,
        },
    ];

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300">
            <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
                <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
                    <div className="w-20 h-1.5 bg-blue-600 mb-3" />
                    <h1 className="text-3xl font-bold">{t("nav_teaching")}</h1>
                    <p className="mt-2 text-muted italic">{t("teach_tagline")}</p>
                </aside>

                <div className="lg:col-span-9">
                    <div className="grid sm:grid-cols-2 gap-8">
                        {cards.map((card) => (
                            <div key={card.title} className="group bg-card border border-subtle rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                                <card.icon className="text-blue-600 mb-3 w-8 h-8" />
                                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{card.title}</h3>
                                <p className="text-main mb-4">{card.description}</p>
                                <Link href={card.href} className="text-blue-700 dark:text-blue-400 font-medium hover:underline">
                                    {card.linkLabel}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-semibold mb-4">{t("teach_cta_h2")}</h2>
                        <p className="text-main mb-6 max-w-2xl mx-auto">
                            {t("teach_cta_desc")}
                        </p>
                        <Link href="/projects" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition">{t("teach_cta_btn")}</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
