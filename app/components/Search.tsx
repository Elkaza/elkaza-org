"use client";
import { useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "../LocaleProvider";

export default function Search() {
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

  return (
    <Link
      href="/archives"
      aria-label={t("search")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm text-gray-700 hover:border-blue-400 hover:bg-gray-100 transition"
    >
      <SearchIcon size={18} />
      <span className="hidden md:inline">{t("search")}</span>
    </Link>
  );
}
