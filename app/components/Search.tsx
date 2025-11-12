"use client";
import { useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "../LocaleProvider";

type Props = { variant?: "inline" | "cta" };

export default function Search({ variant = "inline" }: Props) {
  const router = useRouter();
  const { t } = useLocale();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" || (e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        router.push("/archives");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  const base =
    "flex items-center gap-2 border bg-[var(--surface)] transition focus:outline-none";
  const styles =
    variant === "cta"
      ? "px-4 py-2 rounded-lg border-[var(--outline)] hover:border-blue-400 hover:bg-gray-100 text-gray-800 dark:text-gray-100 text-sm md:text-base"
      : "px-3 py-1.5 rounded-md border-[var(--outline)] hover:border-blue-400 hover:bg-gray-100 text-gray-700 dark:text-gray-100 text-sm";

  return (
    <Link href="/archives" aria-label={t("search")} className={`${base} ${styles}`}>
      <SearchIcon size={18} />
      <span className="hidden md:inline">{t("search")}</span>
    </Link>
  );
}
