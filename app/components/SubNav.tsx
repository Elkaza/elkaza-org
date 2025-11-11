"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import MoreMenu from "./MoreMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "../LocaleProvider";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Top navigation"
      className={`border-b border-gray-200 ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold heading-serif text-gray-900">
          {t("brand")}
        </Link>

        {/* Center tabs (desktop) */}
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
          <ThemeToggle />
          <MoreMenu />
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 py-3 grid gap-2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "block px-2 py-2 rounded-md transition-colors " +
                    (active
                      ? "bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {t(`nav_${l.label.toLowerCase()}`)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
