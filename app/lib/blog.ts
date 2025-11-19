import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author?: string;
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), "app/blog/__posts__");

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(
  content: string
): {
  metadata: Record<string, unknown>;
  content: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content };
  }

  const [, frontmatterStr, bodyStr] = match;
  const metadata: Record<string, unknown> = {};

  frontmatterStr.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key.trim()) {
      let value: unknown = valueParts.join(":").trim();
      const valueStr = String(value);

      // Parse arrays
      if (valueStr.startsWith("[") && valueStr.endsWith("]")) {
        value = valueStr
          .slice(1, -1)
          .split(",")
          .map((v: string) => v.trim().replace(/^["']|["']$/g, ""));
      }
      // Parse booleans
      else if (valueStr === "true") {
        value = true;
      } else if (valueStr === "false") {
        value = false;
      }

      metadata[key.trim()] = value;
    }
  });

  return { metadata, content: bodyStr };
}

/**
 * Get all blog posts
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const filepath = path.join(POSTS_DIR, filename);
      const content = fs.readFileSync(filepath, "utf-8");
      const { metadata, content: bodyContent } = parseFrontmatter(content);

      return {
        slug,
        title: (metadata.title as string) || "Untitled",
        description: (metadata.description as string) || "",
        date: (metadata.date as string) || "",
        tags: (metadata.tags as string[]) || [],
        author: (metadata.author as string) || "Elkaza",
        content: bodyContent,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((p) => p.tags.includes(tag));
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
