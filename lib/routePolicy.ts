import type { Metadata } from "next";
import sitePolicy from "@/config/site-policy.json";
import { SITE_CONTROLS, shouldIndexRoute, type ResolvedSiteControls } from "@/lib/siteStatus";

export const localizedPathPairs = sitePolicy.localizedPathPairs;
export const validPublicRoutes = localizedPathPairs.flatMap(({ dePath, enPath }) => [dePath, enPath]);
export const launchIndexableRoutes = sitePolicy.launchIndexablePaths;
export const scenarioDetailRoutes = validPublicRoutes.filter(
  (path) => !launchIndexableRoutes.includes(path),
);

export function isLaunchIndexableRoute(path: string): boolean {
  return launchIndexableRoutes.includes(path);
}

export function robotsForRoute(
  path: string,
  controls: ResolvedSiteControls = SITE_CONTROLS,
): Metadata["robots"] {
  if (shouldIndexRoute(path, launchIndexableRoutes, controls)) {
    return {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    };
  }

  return {
    index: false,
    follow: controls.indexing,
    noarchive: true,
  };
}
