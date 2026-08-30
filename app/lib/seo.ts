import type { Metadata } from "next";

import type { ActiveLocale } from "./localizedRoutes";
import { getAlternatePaths, getLocalizedPath } from "./localizedRoutes";
import { profile } from "./profile";

const siteUrl = profile.websiteUrl;
const siteName = "Mohamed Elkaza Portfolio";
const socialImage = absoluteUrl("/opengraph-image");

export function absoluteUrl(path: string) {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path}`;
}

export function localizedMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: ActiveLocale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const localizedPath = getLocalizedPath(path, locale);
  const alternates = getAlternatePaths(localizedPath);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: absoluteUrl(localizedPath),
      languages: {
        de: absoluteUrl(alternates.de),
        en: absoluteUrl(alternates.en),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(localizedPath),
      siteName,
      type: "website",
      locale: locale === "de" ? "de_AT" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_AT"],
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: locale === "de" ? "Portfolio von Mohamed Elkaza" : "Mohamed Elkaza portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export function localizedTitle(title: string) {
  return `${title} | Mohamed Elkaza`;
}
