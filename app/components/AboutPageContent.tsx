"use client";
import Image from "next/image";
import { useLocale } from "../LocaleProvider";
import { Layers, Code, ClipboardCheck, Network, Cloud, Languages, BookOpen, type LucideIcon } from "lucide-react";
import Certifications from "../components/Certifications";
import Link from "next/link";
import { TechBadge } from "./ui/TechBadge";
import { OrganizationLogo } from "./ui/OrganizationLogo";
import { getLocalizedPath } from "../lib/localizedRoutes";

interface Skill {
    title: string;
    icon: LucideIcon;
    items: string[];
    tools?: string[];
}

const profileTools = ["TypeScript", "Python", "Docker", "Linux", "SQL", "IoT", "GitHub Actions"];

const aboutFit = {
    de: [
        {
            title: "Application Engineering",
            body: "Rollen mit Analyse, Bugfixing, technischer Dokumentation, Datenflüssen und Schnittstellenarbeit.",
        },
        {
            title: "Automation & Data",
            body: "Workflows mit Python, SQL, Dashboards, Reports und reproduzierbaren Auswertungspfaden.",
        },
        {
            title: "Infrastructure & IoT",
            body: "Praktische Systeme mit Linux, Docker, Monitoring, sicheren Zugriffspfaden und Edge-/IoT-Prototypen.",
        },
    ],
    en: [
        {
            title: "Application Engineering",
            body: "Roles involving analysis, defect handling, technical documentation, data flows, and interface work.",
        },
        {
            title: "Automation & Data",
            body: "Workflows with Python, SQL, dashboards, reporting, and reproducible analysis paths.",
        },
        {
            title: "Infrastructure & IoT",
            body: "Practical systems with Linux, Docker, monitoring, secure access paths, and edge/IoT prototypes.",
        },
    ],
    ar: [
        {
            title: "Application Engineering",
            body: "Roles involving analysis, defect handling, technical documentation, data flows, and interface work.",
        },
        {
            title: "Automation & Data",
            body: "Workflows with Python, SQL, dashboards, reporting, and reproducible analysis paths.",
        },
        {
            title: "Infrastructure & IoT",
            body: "Practical systems with Linux, Docker, monitoring, secure access paths, and edge/IoT prototypes.",
        },
    ],
};

const getSkills = (t: (k: string) => string): Skill[] => [
    {
        title: t("skill_ea_title"),
        icon: Layers,
        items: [
            t("skill_ea_item1"),
            t("skill_ea_item2"),
            t("skill_ea_item3"),
        ],
        tools: ["Linux", "Proxmox", "Docker", "Monitoring"],
    },
    {
        title: t("skill_sw_title"),
        icon: Code,
        items: [
            t("skill_sw_item1"),
            t("skill_sw_item2"),
            t("skill_sw_item3"),
        ],
        tools: ["TypeScript", "Next.js", "Python", "SQL"],
    },
    {
        title: t("skill_pm_title"),
        icon: ClipboardCheck,
        items: [
            t("skill_pm_item1"),
            t("skill_pm_item2"),
            t("skill_pm_item3"),
        ],
        tools: ["Jira", "Confluence", "ServiceNow", "Documentation"],
    },
    {
        title: t("skill_net_title"),
        icon: Network,
        items: [
            t("skill_net_item1"),
            t("skill_net_item2"),
            t("skill_net_item3"),
        ],
        tools: ["Tailscale", "Nginx Proxy Manager", "Pi-hole", "UFW"],
    },
    {
        title: t("skill_cloud_title"),
        icon: Cloud,
        items: [
            t("skill_cloud_item1"),
            t("skill_cloud_item2"),
            t("skill_cloud_item3"),
        ],
        tools: ["Vercel", "GitHub Actions", "Plausible Analytics", "Docker"],
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

export default function AboutPageContent() {
    const { t, locale } = useLocale();
    const activeLocale = locale === "en" ? "en" : "de";
    const educationItems = [
        { key: 1, organization: "University of Benghazi" },
        { key: 2, organization: "TU Wien" },
        { key: 3, organization: "FH Technikum Wien" },
    ];

    return (
        <main className="min-h-screen bg-page text-main transition-colors">
            <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12 lg:grid lg:grid-cols-12 lg:gap-10">
                <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
                    <div className="w-20 h-1.5 bg-blue-600 mb-3" />
                    <p className="text-3xl font-bold">{t("nav_about")}</p>
                    <p className="mt-2 text-muted italic">{t("about_tagline") ?? ""}</p>
                </aside>

                <div className="lg:col-span-9">
                    <div className="mb-6 lg:hidden">
                        <div className="mb-3 h-1.5 w-20 bg-blue-600" />
                        <h1 className="text-3xl font-bold">{t("nav_about")}</h1>
                        <p className="mt-2 text-muted italic">{t("about_tagline") ?? ""}</p>
                    </div>

                    <div className="mb-10 rounded-xl border border-subtle bg-card p-4 shadow-sm sm:p-5 md:mb-12 md:p-6">
                        <div className="grid items-center gap-6 md:grid-cols-[minmax(220px,0.42fr)_minmax(0,0.58fr)] md:gap-8">
                            <figure className="mx-auto w-full max-w-[300px]">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-subtle bg-slate-100 shadow-inner dark:bg-slate-900">
                                    <Image
                                        src="/images/me.jpg"
                                        alt="Mohamed Elkaza"
                                        fill
                                        sizes="(min-width: 1024px) 280px, (min-width: 768px) 33vw, 80vw"
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </figure>

                            <div className="min-w-0">
                                <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-blue-800 dark:text-blue-300">
                                    {t("about_profile_h2") ?? "Professional Profile"}
                                </p>
                                <p className="mt-4 text-lg font-semibold leading-8 text-main">
                                    {t("about_profile_intro")}
                                </p>
                                <p className="mt-4 text-main leading-relaxed">{t("about_p1") ?? ""}</p>
                                <p className="mt-5 border-l-2 border-blue-600 pl-3 font-semibold leading-relaxed text-main">
                                    {t("about_value_statement")}
                                </p>
                                <p className="mt-4 text-sm font-medium leading-6 text-muted">
                                    {t("about_work_authorization")}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {profileTools.map((tool) => (
                                        <TechBadge
                                            key={tool}
                                            name={tool}
                                            className="bg-page px-3 py-1.5 text-sm shadow-sm"
                                            iconClassName="h-4 w-4"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-subtle pt-6">
                            <Certifications />
                        </div>
                    </div>

                    <section className="mb-10 rounded-lg border border-subtle bg-card p-4 shadow-sm sm:p-5 md:mb-12 md:p-6">
                        <div className="max-w-3xl">
                            <p className="border-l-2 border-blue-600 pl-2 text-sm font-extrabold uppercase tracking-normal text-main">
                                {locale === "de" ? "Rollenprofil" : "Role Profile"}
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold">
                                {locale === "de" ? "Wo mein Profil am stärksten ist" : "Where my profile is strongest"}
                            </h2>
                        </div>
                        <div className="mt-5 grid gap-3 md:grid-cols-3 md:gap-4">
                            {aboutFit[locale].map((item) => (
                                <article key={item.title} className="min-w-0 rounded-lg border border-subtle bg-page/70 p-4">
                                    <h3 className="text-base font-semibold text-main">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">{t("about_education_title")}</h2>
                            <p className="text-muted leading-relaxed max-w-3xl">
                                {t("about_education_intro")}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
                            {educationItems.map((item) => (
                                <div key={item.key} className="bg-card border border-subtle rounded-lg p-5 shadow-sm">
                                    <div className="mb-4 flex items-center gap-3">
                                        <OrganizationLogo name={item.organization} size="sm" decorative={false} />
                                        <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase tracking-normal text-main">
                                            {t(`about_education_label${item.key}`)}
                                        </p>
                                    </div>
                                    <h3 className="mt-2 !text-lg font-semibold leading-tight text-main">
                                        {t(`about_education_title${item.key}`)}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted leading-relaxed">
                                        {t(`about_education_desc${item.key}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Core Strengths Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">{t("about_strengths_title")}</h2>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
                            <Link href={getLocalizedPath("/cv", activeLocale)} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                {t("about_view_cv")} {"->"}
                            </Link>
                        </div>
                    </div>

                    {/* Core Skills Section */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold">{t("about_comp_h2") ?? "Core Skills & Tools"}</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {getSkills(t).map((skill) => (
                                <div key={skill.title} className="flex h-full flex-col rounded-lg border border-subtle bg-card p-5 shadow-sm md:p-6">
                                    <span className="mb-4 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-700 bg-blue-600 text-white shadow-sm shadow-blue-600/20 dark:border-blue-400 dark:bg-blue-500">
                                        <skill.icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <h3 className="mb-2 !text-lg font-semibold leading-tight text-main">{skill.title}</h3>
                                    <ul className="space-y-2 flex-grow">
                                        {skill.items.map((item) => (
                                            <li key={item} className="text-sm text-muted leading-relaxed flex items-start">
                                                <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {skill.tools && (
                                        <div className="mt-5 flex flex-wrap gap-1.5">
                                            {skill.tools.map((tool) => (
                                                <TechBadge
                                                    key={tool}
                                                    name={tool}
                                                    className="bg-page px-2 py-0.5 text-[11px]"
                                                    iconClassName="h-3.5 w-3.5"
                                                />
                                            ))}
                                        </div>
                                    )}
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
