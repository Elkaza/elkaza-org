import { localizedPathPairs } from "@/lib/routePolicy";

const deToEnMap = Object.fromEntries(
  localizedPathPairs.map(({ dePath, enPath }) => [dePath, enPath]),
) as Record<string, string>;

const enToDeMap = Object.fromEntries(
  Object.entries(deToEnMap).map(([dePath, enPath]) => [enPath, dePath])
) as Record<string, string>;

export { localizedPathPairs };

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
