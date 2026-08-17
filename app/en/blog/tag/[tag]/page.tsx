import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";

import { getAllTags, getPostsByTag } from "@/app/lib/blog";
import { getLocalizedPath } from "@/app/lib/localizedRoutes";
import { localizedMetadata } from "@/app/lib/seo";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    ...localizedMetadata({
      locale: "en",
      path: `/blog/tag/${encodeURIComponent(decodedTag)}`,
      title: `${decodedTag} posts | Elkaza Blog`,
      description: `Blog posts tagged ${decodedTag}.`,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function EnglishBlogTagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-page text-main">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/en/blog"
          className="inline-flex items-center gap-2 text-blue-600 transition hover:gap-3 dark:text-blue-400"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <div className="mt-8 border-b border-subtle pb-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            <Tag size={14} />
            {decodedTag}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal">
            Blog posts tagged {decodedTag}
          </h1>
        </div>

        <div className="mt-10 space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-subtle pb-8">
              <Link href={getLocalizedPath(`/blog/${post.slug}`, "en")}>
                <h2 className="text-2xl font-bold transition hover:text-blue-600 dark:hover:text-blue-400">
                  {post.title}
                </h2>
              </Link>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
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
              <p className="mt-4 leading-relaxed text-secondary">{post.description}</p>
              <Link
                href={getLocalizedPath(`/blog/${post.slug}`, "en")}
                className="mt-4 inline-flex font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
