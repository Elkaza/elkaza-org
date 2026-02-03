import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://elkaza.org";
  const now = new Date();
  const pages = [
    "/",
    "/about",
    "/research",
    "/projects",
    "/security",
    "/teaching",
    "/contact",
    "/certifications",
    "/zertifikate",
    "/impressum",
    "/datenschutz"
  ];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}

