"use client";

import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { useLocale } from "../../LocaleProvider";
import { BlogPost } from "../../lib/blog";

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    const { t } = useLocale();

    return (
        <main className="min-h-screen bg-page">
            {/* Header */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100/20 dark:from-gray-950 dark:to-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-4 text-main">
                        {t("blog_title")}
                    </h1>
                    <p className="text-xl text-muted">
                        {t("blog_subtitle")}
                    </p>
                </div>
            </div>

            {/* Posts List */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                {posts.length === 0 ? (
                    <div className="text-center py-12">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            {t("comingSoon_label")}
                        </span>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                            {t("blog_comingSoon")}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="pb-8 border-b border-subtle hover:border-blue-400 dark:hover:border-blue-500 transition"
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <Link href={`/blog/${post.slug}`} className="flex-1">
                                        <h2 className="text-2xl font-bold text-main hover:text-blue-600 dark:hover:text-blue-400 transition">
                                            {post.title}
                                        </h2>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </time>
                                    </div>
                                    {post.author && <span>by {post.author}</span>}
                                </div>

                                <p className="text-main mb-4">
                                    {post.description}
                                </p>

                                {post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag) => (
                                            <Link
                                                key={tag}
                                                href={`/blog/tag/${tag}`}
                                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                                            >
                                                <Tag size={14} />
                                                {tag}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                                >
                                    Read more
                                    <ArrowRight size={16} />
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
