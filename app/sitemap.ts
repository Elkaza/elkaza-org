import type { MetadataRoute } from "next";
import { localizedPathPairs } from "@/lib/i18nPaths";
import { SITE_IS_PRELAUNCH } from "@/lib/siteStatus";

const baseUrl = "https://elkaza.at";
export const dynamic = "force-static";

function absoluteUrl(path: string) {
  return `${baseUrl}${path === "/" ? "" : path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  if (SITE_IS_PRELAUNCH) return [];

  return localizedPathPairs.flatMap(({ dePath, enPath }) => {
    const languages = {
      "de-AT": absoluteUrl(dePath),
      en: absoluteUrl(enPath),
      "x-default": absoluteUrl(dePath),
    };

    return [
      {
        url: absoluteUrl(dePath),
        alternates: { languages },
      },
      {
        url: absoluteUrl(enPath),
        alternates: { languages },
      },
    ];
  });
}
