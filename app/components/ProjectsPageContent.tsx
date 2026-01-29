"use client";
import { Cpu, Server, Layers, ArrowRight } from "lucide-react";
import { useLocale } from "../LocaleProvider";
import Link from "next/link";
import { projects } from "../lib/projects";

export default function ProjectsPageContent() {
    const { t, locale } = useLocale();

    const projects2025 = projects.filter(p => p.year === "2025");
    const projects2024 = projects.filter(p => p.year === "2024");

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300">
            <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
                {/* Left rail title */}
                <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
                    <div className="w-20 h-1.5 bg-blue-600 mb-3" />
                    <h1 className="text-3xl font-bold">{t("nav_projects")}</h1>
                    <p className="mt-2 text-muted italic">{t("projects_tagline") ?? ""}</p>
                </aside>

                {/* Content column */}
                <div className="lg:col-span-9">
                    {/* Timeline */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">{t("proj_timeline_h2")}</h2>
                        <p className="text-main mb-6">{t("proj_timeline_desc")}</p>

                        <div className="relative border-l border-blue-300 dark:border-blue-700 ml-6 pl-6 pb-12">

                            {/* 2026 Current/Planned */}
                            <div className="relative mb-10">
                                <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-blue-500 rounded-full" />
                                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">2026</h3>
                                <p className="text-main mb-2">{t("proj_2026_desc")}</p>
                                <ul className="list-disc ml-6 space-y-1 text-main text-sm">
                                    <li>{t("proj_2026_b1")}</li>
                                </ul>
                            </div>

                            {/* 2025 */}
                            <div className="relative mb-10">
                                <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-gray-400 rounded-full" />
                                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">2025</h3>
                                <p className="text-main mb-4">{t("proj_2025_desc")}</p>

                                <div className="space-y-4">
                                    {projects2025.map((project) => (
                                        <div key={project.slug} className="p-4 border border-subtle rounded-lg hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    {project.tags.includes("IoT") ? <Cpu className="w-5 h-5 text-blue-500 mr-2" /> : <Server className="w-5 h-5 text-blue-500 mr-2" />}
                                                    <h4 className="font-semibold">{project.title[locale]}</h4>
                                                </div>
                                                <Link href={`/projects/${project.slug}`} className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                                                    Details <ArrowRight className="w-3 h-3 ml-1" />
                                                </Link>
                                            </div>
                                            <p className="text-sm text-main mb-3">{project.summary[locale]}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.slice(0, 3).map(tech => (
                                                    <span key={tech} className="badge badge-neutral">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 2024 */}
                            {projects2024.length > 0 && (
                                <div className="relative mb-4">
                                    <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-gray-400 rounded-full" />
                                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">2024</h3>
                                    <div className="space-y-4 mt-4">
                                        {projects2024.map((project) => (
                                            <div key={project.slug} className="p-4 border border-subtle rounded-lg hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center">
                                                        <Server className="w-5 h-5 text-gray-500 mr-2" />
                                                        <h4 className="font-semibold">{project.title[locale]}</h4>
                                                    </div>
                                                    <Link href={`/projects/${project.slug}`} className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                                                        Details <ArrowRight className="w-3 h-3 ml-1" />
                                                    </Link>
                                                </div>
                                                <p className="text-sm text-main mb-3">{project.summary[locale]}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.slice(0, 3).map(tech => (
                                                        <span key={tech} className="badge badge-neutral">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Current focus */}
                    <div className="mt-16">
                        <h2 className="text-xl font-semibold mb-2">{t("proj_focus_h2")}</h2>
                        <p className="text-main mb-4">{t("proj_focus_desc")}</p>
                        <ul className="list-disc ml-6 space-y-1 text-main">
                            <li>{t("proj_focus_b1")}</li>
                            <li>{t("proj_focus_b2")}</li>
                            <li>{t("proj_focus_b3")}</li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    );
}
