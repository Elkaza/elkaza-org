import { BlogPost } from "@/app/lib/blog";
import BlogList from "@/app/components/blog/BlogList";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/blog",
  title: "Blog | Elkaza",
  description: "Articles on digital transformation, enterprise architecture, and AI",
});

export default function EnglishBlogPage() {
  const posts: BlogPost[] = [];

  return <BlogList posts={posts} />;
}
