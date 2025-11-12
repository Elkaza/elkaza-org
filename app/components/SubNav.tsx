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
      className={`bg-[var(--bg)] transition-[border-color,box-shadow,background-color] duration-200 ${
        scrolled ? "border-b border-[var(--outline)] shadow-md" : "border-b-0 shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold heading-serif" style={{ color: "var(--text)" }}>
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
                  "whitespace-nowrap pb-2 border-b-2 transition-colors hover:text-[var(--primary)] hover:border-[var(--primary)] " +
                  (active ? "font-semibold border-b-[3px]" : "text-dim border-transparent")
                }
                style={active ? { color: "var(--primary)", borderColor: "var(--primary)" } : undefined}
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
            className="md:hidden p-2 rounded-md hover:bg-[#f1f3f4] dark:hover:bg-[#2a2a2a]"
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
        <div className="md:hidden border-t border-[var(--outline)] bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-6 py-3 grid gap-2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "block px-2 py-2 rounded-md transition-colors " +
                    (active ? "font-semibold" : "text-dim hover:bg-[#f1f3f4] dark:hover:bg-[#2a2a2a]")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  <span style={active ? { color: "var(--primary)" } : undefined}>
                    {t(`nav_${l.label.toLowerCase()}`)}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
