"use client";
import { useLocale } from "../LocaleProvider";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const btn = (code: "de" | "en" | "ar", label: string) => (
    <button
      key={code}
      type="button"
      onClick={() => {
        setLocale(code);
        router.refresh();
      }}
      className={`px-2 py-1 rounded-md text-xs border bg-[var(--surface)] ${
        locale === code
          ? "border-blue-500 text-blue-700 dark:text-blue-400 font-semibold"
          : "border-[var(--outline)] text-gray-700 dark:text-gray-100 hover:bg-gray-100"
      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      aria-pressed={locale === code}
    >
      {label}
    </button>
  );
  return <div className="hidden sm:flex items-center gap-1">{[btn("de", "DE"), btn("en", "EN"), btn("ar", "AR")]}</div>;
}
