"use client";
import Link from "next/link";
import { Network, Users, Cpu, GraduationCap, type LucideIcon } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import { getLocalizedPath } from "../lib/localizedRoutes";

type FocusCard = {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
    icon: LucideIcon;
};

export default function TeachingPageContent() {
    const { t, locale } = useLocale();
    const activeLocale = locale === "en" ? "en" : "de";
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
                <header className="mb-6 self-start lg:sticky lg:top-20 lg:col-span-3 lg:mb-0">
                    <div className="mb-3 hidden h-1.5 w-20 bg-blue-600 lg:block" />
                    <h1 className="text-3xl font-bold">{t("nav_teaching")}</h1>
                    <p className="mt-2 hidden text-muted italic lg:block">{t("teach_tagline")}</p>
                </header>

                <div className="lg:col-span-9">
                    <div className="grid sm:grid-cols-2 gap-8">
                        {cards.map((card) => (
                            <div key={card.title} className="group bg-card border border-subtle rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                                <card.icon className="text-blue-600 mb-3 w-8 h-8" />
                                <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{card.title}</h2>
                                <p className="text-main mb-4">{card.description}</p>
                                <Link href={getLocalizedPath(card.href, activeLocale)} className="text-blue-700 dark:text-blue-400 font-medium hover:underline">
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
                        <Link href={getLocalizedPath("/projects", activeLocale)} className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition">{t("teach_cta_btn")}</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
