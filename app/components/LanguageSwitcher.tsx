"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "../LocaleProvider";
import { appendSearchAndHash, getLocalizedPath, type ActiveLocale } from "../lib/localizedRoutes";

export default function LanguageSwitcher() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const searchParams = useSearchParams();
  const { locale } = useLocale();

  const navigate = (code: ActiveLocale) => {
    const search = searchParams.size > 0 ? `?${searchParams.toString()}` : "";
    const hash = typeof window === "undefined" ? "" : window.location.hash;
    router.push(appendSearchAndHash(getLocalizedPath(pathname, code), search, hash));
  };

  const btn = (code: ActiveLocale, label: string, accessibleLabel: string) => (
    <button
      key={code}
      type="button"
      onClick={() => navigate(code)}
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
