const deToEnMap: Record<string, string> = {
    "/": "/en",
    "/leistungen": "/en/services",
    "/leistungen/networking": "/en/services/networking",
    "/leistungen/security-baseline": "/en/services/security-baseline",
    "/leistungen/managed-ops": "/en/services/managed-ops",
    "/leistungen/automation": "/en/services/automation",
    "/leistungen/cloud-saas-security": "/en/services/cloud-saas-security",
    "/leistungen/endpoint-security": "/en/services/endpoint-security",
    "/leistungen/ai-adoption": "/en/services/ai-adoption",
    "/leistungen/nis2-compliance": "/en/services/nis2-compliance",
    "/leistungen/ransomware-resilience": "/en/services/ransomware-resilience",
    "/leistungen/zero-trust": "/en/services/zero-trust",
    "/referenzen": "/en/case-studies",
    "/ueber-uns": "/en/about",
    "/kontakt": "/en/contact",
    "/impressum": "/en/imprint",
    "/datenschutz": "/en/privacy",
    "/referenzen/netzwerk-modernisierung-handelsunternehmen": "/en/case-studies/network-modernization-retail",
    "/referenzen/security-baseline-dienstleister": "/en/case-studies/security-baseline-it-service",
    "/referenzen/zero-trust-finanzberatung": "/en/case-studies/zero-trust-fintech",
    "/referenzen/ransomware-resilience-produktion": "/en/case-studies/ransomware-recovery-manufacturing",
    "/referenzen/m365-sicherheit-compliance": "/en/case-studies/m365-security-audit",
};

const enToDeMap = Object.fromEntries(
  Object.entries(deToEnMap).map(([dePath, enPath]) => [enPath, dePath])
) as Record<string, string>;

export const localizedPathPairs = Object.entries(deToEnMap).map(([dePath, enPath]) => ({
  dePath,
  enPath,
}));

function normalizePath(pathname: string): string {
  const path = pathname.split("?")[0].split("#")[0].replace(/\/+$/, "");
  return path || "/";
}

export function mapDeToEn(pathname: string): string {
  const path = normalizePath(pathname);
  if (deToEnMap[path]) return deToEnMap[path];
  if (path.startsWith("/referenzen/")) return "/en/case-studies" + path.replace("/referenzen", "");
  return "/en";
}

export function mapEnToDe(pathname: string): string {
  const path = normalizePath(pathname);
  if (enToDeMap[path]) return enToDeMap[path];
  if (path.startsWith("/en/case-studies/")) return "/referenzen" + path.replace("/en/case-studies", "");
  return "/";
}

export function getAlternates(pathname: string) {
  const path = normalizePath(pathname);
  const isEnglish = path === "/en" || path.startsWith("/en/");
  const dePath = isEnglish ? mapEnToDe(path) : path;
  const enPath = isEnglish ? path : mapDeToEn(path);
  return { dePath, enPath };
}

export function getLanguageSwitchHref(pathname: string): string {
  const path = normalizePath(pathname);
  return path === "/en" || path.startsWith("/en/") ? mapEnToDe(path) : mapDeToEn(path);
}
