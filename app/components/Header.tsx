"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import ThemeToggle from "@/app/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { launchCtas } from "@/lib/launchCtas";
import { SITE_CONTROLS } from "@/lib/siteStatus";

export default function Header() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const deItems = [
    { href: "/leistungen", label: "Leistungen" },
    { href: "/referenzen", label: "Szenarien" },
    { href: "/ueber-uns", label: "Über Elkaza" },
    SITE_CONTROLS.commercialContent
      ? launchCtas.de.navigation
      : { href: "/kontakt", label: "Status / Kontakt" },
  ];
  const enItems = [
    { href: "/en/services", label: "Services" },
    { href: "/en/case-studies", label: "Scenarios" },
    { href: "/en/about", label: "About" },
    SITE_CONTROLS.commercialContent
      ? launchCtas.en.navigation
      : { href: "/en/contact", label: "Status / Contact" },
  ];

  const renderNavItems = (items: typeof deItems, className = "site-nav-link") =>
    items.map((item) => (
      <Link key={item.href} href={item.href} data-nav-href={item.href} className={className}>
        {item.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-3 sm:px-6">
        <div>
          <Link href={isEnglish ? "/en" : "/"} className="flex items-center gap-3 group">
            <Image src="/logo-mark.svg" alt="" aria-hidden="true" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-semibold text-[var(--primary)] group-hover:text-[var(--primary-hover)] transition-colors">
              Elkaza
            </span>
          </Link>
        </div>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {renderNavItems(isEnglish ? enItems : deItems)}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <button
            type="button"
            data-mobile-menu-toggle
            aria-controls="mobile-navigation"
            aria-expanded="false"
            className="rounded-lg p-2.5 text-[var(--muted)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text)] lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu data-mobile-menu-icon="open" className="w-6 h-6" aria-hidden="true" />
            <X data-mobile-menu-icon="close" className="hidden w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        hidden
        aria-label="Mobile navigation"
        className="space-y-1 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-4 lg:hidden"
      >
        {renderNavItems(isEnglish ? enItems : deItems, "mobile-nav-link")}
        <div className="pt-3 border-t border-[var(--border)]">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
