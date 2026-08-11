import { MetadataRoute } from "next";

import { profile } from "./lib/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${profile.websiteUrl}/sitemap.xml`,
  };
}

