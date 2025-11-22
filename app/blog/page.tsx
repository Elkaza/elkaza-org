import { BlogPost } from "@/app/lib/blog";
// import { getAllPosts } from "@/app/lib/blog";
import BlogList from "../components/blog/BlogList";

export const metadata = {
  title: "Blog | Elkaza",
  description: "Articles on digital transformation, enterprise architecture, and AI",
};

export default function BlogPage() {
  const posts: BlogPost[] = []; // getAllPosts();

  return <BlogList posts={posts} />;
}
