"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Search from "./Search";
import MoreMenu from "./MoreMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLocale } from "../LocaleProvider";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },

  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/security", label: "Security" },
  // Contact link handled dynamically in render
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
      className={`transition-all duration-300 ${scrolled
        ? "bg-page/80 backdrop-blur-md border-b border-subtle shadow-sm"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold heading-serif text-main">
          <Image src="/logo.png" alt="ME Logo" width={36} height={36} className="w-9 h-9" />
          {t("brand")}
        </Link>

        {/* Center tabs */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={
                "whitespace-nowrap pb-2 border-b-2 transition-colors hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-500 " +
                (pathname === l.href
                  ? "text-blue-700 dark:text-blue-400 border-blue-600 font-semibold border-b-[3px]"
                  : "text-muted border-transparent")
              }
            >
              {t(`nav_${l.label.toLowerCase()}`)}
            </Link>
          ))}
          {/* Contact Link with locale check */}
          <Link
            href={t("nav_contact") === "Kontakt" ? "/kontakt" : "/contact"}
            aria-current={pathname === "/contact" || pathname === "/kontakt" ? "page" : undefined}
            className={
              "whitespace-nowrap pb-2 border-b-2 transition-colors hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-500 " +
              (pathname === "/contact" || pathname === "/kontakt"
                ? "text-blue-700 dark:text-blue-400 border-blue-600 font-semibold border-b-[3px]"
                : "text-muted border-transparent")
            }
          >
            {t("nav_contact")}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Removed CV link from top nav as requested */}
          <Search />
          <ThemeToggle />
          <LanguageSwitcher />
          <MoreMenu />
        </div>
      </div>
    </nav>
  );
}
