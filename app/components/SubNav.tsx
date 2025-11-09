"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import MoreMenu from "./MoreMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "../LocaleProvider";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/teaching", label: "Teaching" },
  { href: "/contact", label: "Contact" },
];

export default function SubNav() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      aria-label="Top navigation"
      className={`border-b border-gray-200 ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold heading-serif text-gray-900">{t("brand")}</Link>

        {/* Center tabs */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={
                  "whitespace-nowrap pb-2 border-b-2 transition-colors hover:text-blue-700 hover:border-blue-500 " +
                  (active
                    ? "text-blue-700 border-blue-600 font-semibold border-b-[3px]"
                    : "text-gray-700 border-transparent")
                }
              >
                {t(`nav_${l.label.toLowerCase()}`)}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <Search />
          <LanguageSwitcher />
          <MoreMenu />
        </div>
      </div>
    </nav>
  );
}
