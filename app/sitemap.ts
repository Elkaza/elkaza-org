import type { MetadataRoute } from "next";
import { getAlternates } from "@/lib/i18nPaths";
import { launchIndexableRoutes } from "@/lib/routePolicy";
import { SITE_CONTROLS } from "@/lib/siteStatus";

const baseUrl = "https://elkaza.at";
export const dynamic = "force-static";

function absoluteUrl(path: string) {
  return `${baseUrl}${path === "/" ? "" : path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_CONTROLS.indexing) return [];

  return launchIndexableRoutes.map((path) => {
    const { dePath, enPath } = getAlternates(path);
    const languages = {
      "de-AT": absoluteUrl(dePath),
      en: absoluteUrl(enPath),
      "x-default": absoluteUrl(dePath),
    };

    return {
      url: absoluteUrl(path),
      alternates: { languages },
    };
  });
}
