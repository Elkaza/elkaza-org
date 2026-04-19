"use client";
import Image from "next/image";
import { useLocale } from "../LocaleProvider";
import { Layers, Code, ClipboardCheck, Network, Cloud, Languages, BookOpen, type LucideIcon } from "lucide-react";
import Certifications from "../components/Certifications";
import Link from "next/link";

interface Skill {
    title: string;
    icon: LucideIcon;
    items: string[];
}

const getSkills = (t: (k: string) => string): Skill[] => [
    {
        title: t("skill_ea_title"),
        icon: Layers,
        items: [
            t("skill_ea_item1"),
            t("skill_ea_item2"),
            t("skill_ea_item3"),
        ],
    },
    {
        title: t("skill_sw_title"),
        icon: Code,
        items: [
            t("skill_sw_item1"),
            t("skill_sw_item2"),
            t("skill_sw_item3"),
        ],
    },
    {
        title: t("skill_pm_title"),
        icon: ClipboardCheck,
        items: [
            t("skill_pm_item1"),
            t("skill_pm_item2"),
            t("skill_pm_item3"),
        ],
    },
    {
        title: t("skill_net_title"),
        icon: Network,
        items: [
            t("skill_net_item1"),
            t("skill_net_item2"),
            t("skill_net_item3"),
        ],
    },
    {
        title: t("skill_cloud_title"),
        icon: Cloud,
        items: [
            t("skill_cloud_item1"),
            t("skill_cloud_item2"),
            t("skill_cloud_item3"),
        ],
    },
    {
        title: t("skill_lang_title"),
        icon: Languages,
        items: [
            t("skill_lang_item1"),
            t("skill_lang_item2"),
        ],
    },
];

const getInfrastructureHighlights = (t: (k: string) => string): Skill[] => [
    {
        title: t("about_infra_cloud_title"),
        icon: Cloud,
        items: [t("about_infra_cloud_desc")],
    },
    {
        title: t("about_infra_cicd_title"),
        icon: Code,
        items: [t("about_infra_cicd_desc")],
    },
    {
        title: t("about_infra_security_title"),
        icon: Network,
        items: [t("about_infra_security_desc")],
    },
    {
        title: t("about_infra_resilience_title"),
        icon: ClipboardCheck,
        items: [t("about_infra_resilience_desc")],
    },
];

export default function AboutPageContent() {
    const { t } = useLocale();
    const infrastructureHighlights = getInfrastructureHighlights(t);
    const educationItems = [1, 2, 3];

    return (
        <main className="min-h-screen bg-page text-main transition-colors">
            <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
                <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
                    <div className="w-20 h-1.5 bg-blue-600 mb-3" />
                    <h1 className="text-3xl font-bold">{t("nav_about")}</h1>
                    <p className="mt-2 text-muted italic">{t("about_tagline") ?? ""}</p>
                </aside>

                <div className="lg:col-span-9">


                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div>
                            <Image src="/images/me.jpg" alt="Mohamed Elkaza" width={400} height={400} className="rounded-lg shadow-md object-cover" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">{t("about_profile_h2") ?? "Professional Profile"}</h2>
                            <p className="text-lg font-medium text-main mb-4 italic">
                                {t("about_profile_intro")}
                            </p>
                            <p className="text-main leading-relaxed mb-4">{t("about_p1") ?? ""}</p>
                            <p className="text-main leading-relaxed mb-6 font-medium text-blue-700 dark:text-blue-400">
                                {t("about_value_statement")}
                            </p>
                            <Certifications />
                        </div>
                    </div>

                    <section className="mb-12 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">{t("about_education_title")}</h2>
                            <p className="text-muted leading-relaxed max-w-3xl">
                                {t("about_education_intro")}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {educationItems.map((item) => (
                                <div key={item} className="bg-card border border-subtle rounded-lg p-5 shadow-sm">
                                    <p className="text-xs font-semibold uppercase tracking-normal text-blue-600 dark:text-blue-400">
                                        {t(`about_education_label${item}`)}
                                    </p>
                                    <h3 className="mt-2 text-base font-semibold text-main">
                                        {t(`about_education_title${item}`)}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted leading-relaxed">
                                        {t(`about_education_desc${item}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Current Infrastructure Focus */}
                    <section className="mb-12 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">{t("about_infra_title")}</h2>
                            <p className="text-muted leading-relaxed max-w-3xl">
                                {t("about_infra_intro")}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {infrastructureHighlights.map((item) => (
                                <div key={item.title} className="bg-card border border-subtle rounded-lg p-5 shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        <h3 className="font-semibold text-main">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted leading-relaxed">{item.items[0]}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Core Strengths Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">{t("about_strengths_title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                                <div key={n} className="flex items-start gap-3 p-3 bg-card border border-subtle rounded-lg">
                                    <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span className="text-main text-sm">{t(`about_strength_${n}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Selected Experience Section - Simplified for About Page */}
                    <div className="space-y-6 mb-12">
                        <h2 className="text-2xl font-semibold">{t("experience_title")}</h2>
                        <div className="prose dark:prose-invert text-muted">
                            <p>{t("about_exp_summary")}</p>
                        </div>
                        <div className="pt-2">
                            <Link href="/cv" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                {t("about_view_cv")} {"->"}
                            </Link>
                        </div>
                    </div>

                    {/* Core Skills Section */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold">{t("about_comp_h2") ?? "Core Skills & Tools"}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {getSkills(t).map((skill) => (
                                <div key={skill.title} className="p-6 bg-card rounded-lg border border-subtle shadow-sm flex flex-col h-full">
                                    <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                                    <h3 className="text-lg font-semibold mb-2 text-main">{skill.title}</h3>
                                    <ul className="space-y-2 flex-grow">
                                        {skill.items.map((item) => (
                                            <li key={item} className="text-sm text-muted leading-relaxed flex items-start">
                                                <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Master's Thesis Section (Moved from Research) */}
                    <div className="mt-16 pt-8 border-t border-subtle">
                        <div className="flex items-start gap-4">
                            <BookOpen className="text-blue-600 dark:text-blue-400 w-8 h-8 flex-shrink-0" />
                            <div>
                                <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{t("thesis_h2") ?? "Master's Thesis"}</h2>
                                <p className="text-main leading-relaxed mb-4">{t("thesis_desc") ?? ""}</p>
                                <p className="text-sm text-muted">
                                    {t("thesis_note") ?? ""}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hobbies Micro-section */}
                    <div className="mt-8 pt-8 border-t border-subtle">
                        <p className="text-sm text-muted">{t("about_hobbies")}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
