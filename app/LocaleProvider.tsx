"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { MESSAGES, type Locale } from "./i18n/messages";
import type { ActiveLocale } from "./lib/localizedRoutes";

const ACTIVE_LOCALES = ["de", "en"] as const;

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string };
const C = createContext<Ctx | null>(null);

export function useLocale() {
  const ctx = useContext(C);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export default function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: ActiveLocale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocaleState(initialLocale);
    localStorage.setItem("locale", initialLocale);
  }, [initialLocale]);

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

