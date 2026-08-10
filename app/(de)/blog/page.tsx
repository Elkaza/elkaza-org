import { BlogPost } from "@/app/lib/blog";
// import { getAllPosts } from "@/app/lib/blog";
import BlogList from "@/app/components/blog/BlogList";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/blog",
  title: "Blog | Elkaza",
  description: "Articles on digital transformation, enterprise architecture, and AI",
});

export default function BlogPage() {
  const posts: BlogPost[] = []; // getAllPosts();

  return <BlogList posts={posts} />;
}
