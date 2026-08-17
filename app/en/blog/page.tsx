import { BlogPost } from "@/app/lib/blog";
import BlogList from "@/app/components/blog/BlogList";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = {
  ...localizedMetadata({
    locale: "en",
    path: "/blog",
    title: "Blog | Elkaza",
    description: "Unpublished archive of technical drafts.",
  }),
  robots: { index: false, follow: false },
};

export default function EnglishBlogPage() {
  const posts: BlogPost[] = [];

  return <BlogList posts={posts} />;
}
