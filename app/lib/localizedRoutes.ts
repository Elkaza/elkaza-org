export type ActiveLocale = "de" | "en";

const EN_PREFIX = "/en";

const deToEnSpecial: Record<string, string> = {
  "/": "/en",
  "/kontakt": "/en/contact",
  "/zertifikate": "/en/certifications",
};

const enToDeSpecial: Record<string, string> = {
  "/en": "/",
  "/en/contact": "/kontakt",
  "/en/certifications": "/zertifikate",
};

const germanOnlyPaths = new Set(["/datenschutz", "/impressum"]);

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  const withoutTrailingSlash = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return withoutTrailingSlash || "/";
}

export function getRouteLocale(pathname: string): ActiveLocale {
  return normalizePath(pathname).startsWith(`${EN_PREFIX}/`) || normalizePath(pathname) === EN_PREFIX ? "en" : "de";
}

export function getLocalizedPath(pathname: string, targetLocale: ActiveLocale) {
  const path = normalizePath(pathname);

  if (targetLocale === "en") {
    if (path.startsWith(`${EN_PREFIX}/`) || path === EN_PREFIX) return path;
    if (germanOnlyPaths.has(path)) return path;
    return deToEnSpecial[path] ?? `${EN_PREFIX}${path}`;
  }

  if (!path.startsWith(`${EN_PREFIX}/`) && path !== EN_PREFIX) return path;
  if (enToDeSpecial[path]) return enToDeSpecial[path];

  return normalizePath(path.slice(EN_PREFIX.length));
}

export function getCanonicalPath(pathname: string) {
  return normalizePath(pathname);
}

export function getAlternatePaths(pathname: string) {
  return {
    de: getLocalizedPath(pathname, "de"),
    en: getLocalizedPath(pathname, "en"),
  };
}

export function appendSearchAndHash(pathname: string, search: string, hash: string) {
  return `${pathname}${search}${hash}`;
}
