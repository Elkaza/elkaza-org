import { MetadataRoute } from "next";
import { projects } from "./lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://elkaza.org";
  const now = new Date();

  const staticPages = [
    "/",
    "/about",
    "/research",
    "/projects",
    "/security",
    "/teaching",
    "/contact",
    "/cv",
    "/certifications",
    "/zertifikate",
    "/impressum",
    "/datenschutz",
  ];

  const projectPages = projects.map((p) => `/projects/${p.slug}`);

  const blogSlugs = ["ea-and-ai", "self-hosted-infrastructure"];
  const blogPages = blogSlugs.map((s) => `/blog/${s}`);

  const allPages = [...staticPages, ...projectPages, ...blogPages];

  return allPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/projects/") || path.startsWith("/blog/") ? 0.6 : 0.7,
  }));
}
