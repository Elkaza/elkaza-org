"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { MESSAGES, type Locale } from "./i18n/messages";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string };
const C = createContext<Ctx | null>(null);

export function useLocale() {
  const ctx = useContext(C);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "de";
    const stored = localStorage.getItem("locale") as Locale | null;
    return stored && ["de", "en", "ar"].includes(stored) ? stored : "de";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
    const el = document.documentElement;
    el.lang = locale;
    el.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);
  const value = useMemo(
    () => ({ locale, setLocale, t: (k: string) => MESSAGES[locale][k] ?? k }),
    [locale]
  );

  return <C.Provider value={value}>{children}</C.Provider>;
}

