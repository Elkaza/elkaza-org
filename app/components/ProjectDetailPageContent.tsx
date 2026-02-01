"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Layers, Target, CheckCircle, Wrench, ArrowRight } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";
import { projects } from "@/app/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPageContent({ slug }: { slug: string }) {
    const { t, locale } = useLocale();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
        // Client side notFound might not work as expected if rendered inside a server component that already "found" the page, 
        // but here we are finding the data client side too. 
        // Actually, if the server comp rendered this, the slug is valid.
        return null;
    }

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300 py-12 px-6">
            <article className="max-w-3xl mx-auto space-y-12">

                {/* Navigation */}
                <Link
                    href="/projects"
                    className="inline-flex items-center text-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("nav_projects")}
                </Link>

                {/* Header */}
                <header className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-main">
                        {project.title[locale]}
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        {project.summary[locale]}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Case Study Content */}
                <div className="grid gap-8">
                    {/* Problem */}
                    <section className="bg-card border border-subtle rounded-xl p-6 md:p-8 space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2 text-red-600 dark:text-red-400">
                            <Target className="w-5 h-5" />
                            Problem
                        </h2>
                        <p className="text-main leading-relaxed">
                            {project.problem[locale]}
                        </p>
                    </section>

                    {/* Action */}
                    <section className="bg-card border border-subtle rounded-xl p-6 md:p-8 space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-600 dark:text-blue-400">
                            <Wrench className="w-5 h-5" />
                            Action
                        </h2>
                        <p className="text-main leading-relaxed">
                            {project.action[locale]}
                        </p>
                    </section>

                    {/* Result */}
                    <section className="bg-card border border-subtle rounded-xl p-6 md:p-8 space-y-4">
                        <h2 className="text-xl font-semibold flex items-center gap-2 text-green-600 dark:text-green-400">
                            <CheckCircle className="w-5 h-5" />
                            Result
                        </h2>
                        <p className="text-main leading-relaxed">
                            {project.result[locale]}
                        </p>
                    </section>
                </div>

                {/* Tech Stack */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Layers className="w-5 h-5" />
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                            <span key={tech} className="px-3 py-1 border border-subtle rounded-md text-sm font-medium text-muted">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Links */}
                {project.links.length > 0 && (
                    <section className="pt-8 border-t border-subtle">
                        <h2 className="sr-only">Links</h2>
                        <div className="flex flex-wrap gap-4">
                            {project.links.map(link => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-main text-page rounded-md font-medium hover:opacity-90 transition-opacity"
                                >
                                    {link.label === "GitHub" ? <Github className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* Related Project */}
                {project.relatedProject && (
                    <section className="pt-8 border-t border-subtle">
                        <h2 className="text-xl font-semibold mb-4">Related Project</h2>
                        <Link
                            href={`/projects/${project.relatedProject.slug}`}
                            className="group block p-4 border border-subtle rounded-lg hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.relatedProject.name}
                                    </h3>
                                    <p className="text-sm text-muted mt-1">
                                        See how this project relates to the bigger picture.
                                    </p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-muted group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                        </Link>
                    </section>
                )}


            </article>
        </main>
    );
}
