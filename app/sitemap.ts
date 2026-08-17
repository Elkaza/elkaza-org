import { MetadataRoute } from "next";
import { projects } from "./lib/projects";
import { absoluteUrl } from "./lib/seo";
import { getAlternatePaths, getLocalizedPath } from "./lib/localizedRoutes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedStaticPages = [
    "/",
    "/about",
    "/archives",
    "/research",
    "/projects",
    "/security",
    "/teaching",
    "/kontakt",
    "/cv",
    "/zertifikate",
  ];

  const germanOnlyPages = [
    "/impressum",
    "/datenschutz",
  ];

  const projectPages = projects.map((p) => `/projects/${p.slug}`);

  const localizedPages = [...localizedStaticPages, ...projectPages];
  const germanPaths = [...localizedPages, ...germanOnlyPages];
  const englishPaths = localizedPages.map((path) => getLocalizedPath(path, "en"));
  const allPages = [...germanPaths, ...englishPaths];

  return allPages.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/projects/") ? 0.6 : 0.7,
    alternates: localizedPages.includes(getLocalizedPath(path, "de"))
      ? {
          languages: {
            de: absoluteUrl(getAlternatePaths(path).de),
            en: absoluteUrl(getAlternatePaths(path).en),
          },
        }
      : undefined,
  }));
}
