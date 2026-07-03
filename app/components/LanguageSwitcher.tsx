"use client";
import { useLocale } from "../LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const btn = (code: "de" | "en", label: string, accessibleLabel: string) => (
    <button
      key={code}
      type="button"
      onClick={() => setLocale(code)}
      className={`rounded-md border bg-card px-2 py-1 text-xs transition-colors ${locale === code
          ? "border-blue-500 font-semibold text-blue-700 dark:text-blue-300"
          : "border-subtle text-muted hover:bg-subtle hover:text-main"
        } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      aria-pressed={locale === code}
      aria-label={accessibleLabel}
      title={accessibleLabel}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {[
        btn("de", "DE", "Deutsch anzeigen"),
        btn("en", "EN", "Show English"),
      ]}
    </div>
  );
}
