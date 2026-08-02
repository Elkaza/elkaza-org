"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MESSAGES, type Locale } from "./i18n/messages";

const ACTIVE_LOCALES = ["de", "en"] as const;
type ActiveLocale = (typeof ACTIVE_LOCALES)[number];

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string };
const C = createContext<Ctx | null>(null);

function localeFromPath(pathname: string): ActiveLocale | null {
  if (pathname === "/zertifikate" || pathname.startsWith("/zertifikate/")) return "de";
  if (pathname === "/kontakt" || pathname.startsWith("/kontakt/")) return "de";
  if (pathname === "/certifications" || pathname.startsWith("/certifications/")) return "en";
  if (pathname === "/contact" || pathname.startsWith("/contact/")) return "en";
  return null;
}

export function useLocale() {
  const ctx = useContext(C);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const [locale, setLocaleState] = useState<Locale>(() => {
    const routeLocale = localeFromPath(pathname);
    if (routeLocale) return routeLocale;
    if (typeof window === "undefined") return "de";
    const stored = localStorage.getItem("locale") as Locale | null;
    return stored && ACTIVE_LOCALES.includes(stored as ActiveLocale) ? stored : "de";
  });

  useEffect(() => {
    const routeLocale = localeFromPath(pathname);
    if (routeLocale && routeLocale !== locale) {
      setLocaleState(routeLocale);
      return;
    }

    if (!ACTIVE_LOCALES.includes(locale as ActiveLocale)) {
      setLocaleState("de");
      return;
    }

    localStorage.setItem("locale", locale);
    const el = document.documentElement;
    el.lang = locale;
    el.dir = "ltr";
  }, [locale, pathname]);

  const setLocale = (l: Locale) => setLocaleState(ACTIVE_LOCALES.includes(l as ActiveLocale) ? l : "de");
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (k: string) => {
        const val = MESSAGES[locale][k];
        if (val) return val;
        // Fallback to English
        const fallback = MESSAGES["en"][k];
        if (fallback) return fallback;
        // Return key if nothing found
        return k;
      },
    }),
    [locale]
  );

  return <C.Provider value={value}>{children}</C.Provider>;
}

