export const SITE_IS_PRELAUNCH = true;

// Every commercial capability is an explicit opt-in. These constants remain
// deliberately static so an activation is a reviewed source change, not an
// accidental runtime environment change.
export const ENABLE_COMMERCIAL_CONTENT = false;
export const ENABLE_PUBLIC_CONTACT = false;
export const ENABLE_INDEXING = false;
export const ENABLE_ANALYTICS = false;
export const ENABLE_PROVIDER_SCHEMA = false;

export interface RequestedSiteControls {
  siteIsPrelaunch: boolean;
  commercialContent: boolean;
  publicContact: boolean;
  indexing: boolean;
  analytics: boolean;
  providerSchema: boolean;
  environment: "development" | "production" | "test";
}

export interface ResolvedSiteControls {
  prelaunch: boolean;
  showPrelaunchUi: boolean;
  commercialContent: boolean;
  publicContact: boolean;
  indexing: boolean;
  analytics: boolean;
  providerSchema: boolean;
}

export function resolveSiteControls(requested: RequestedSiteControls): ResolvedSiteControls {
  if (requested.siteIsPrelaunch) {
    return {
      prelaunch: true,
      showPrelaunchUi: true,
      commercialContent: false,
      publicContact: false,
      indexing: false,
      analytics: false,
      providerSchema: false,
    };
  }

  if (!requested.commercialContent || !requested.publicContact || !requested.indexing) {
    throw new Error(
      "Incomplete activation configuration: commercial content, public contact, and indexing require separate approval.",
    );
  }

  return {
    prelaunch: false,
    showPrelaunchUi: false,
    commercialContent: true,
    publicContact: true,
    indexing: true,
    analytics: requested.analytics && requested.environment === "production",
    providerSchema: requested.providerSchema,
  };
}

export function shouldIndexRoute(
  path: string,
  launchAllowlist: readonly string[],
  controls: ResolvedSiteControls,
): boolean {
  return controls.indexing && launchAllowlist.includes(path);
}

const requestedSiteControls: RequestedSiteControls = {
  siteIsPrelaunch: SITE_IS_PRELAUNCH,
  commercialContent: ENABLE_COMMERCIAL_CONTENT,
  publicContact: ENABLE_PUBLIC_CONTACT,
  indexing: ENABLE_INDEXING,
  analytics: ENABLE_ANALYTICS,
  providerSchema: ENABLE_PROVIDER_SCHEMA,
  environment: process.env.NODE_ENV,
};

if (
  SITE_IS_PRELAUNCH &&
  (ENABLE_COMMERCIAL_CONTENT || ENABLE_PUBLIC_CONTACT || ENABLE_INDEXING || ENABLE_ANALYTICS || ENABLE_PROVIDER_SCHEMA)
) {
  throw new Error("Pre-launch builds must not request commercial capabilities.");
}

if (ENABLE_ANALYTICS) {
  throw new Error("Analytics has not been separately approved or implemented.");
}

if (ENABLE_PROVIDER_SCHEMA) {
  throw new Error("Provider schema has not been separately approved or supplied with verified provider facts.");
}

export const SITE_CONTROLS = Object.freeze(resolveSiteControls(requestedSiteControls));
