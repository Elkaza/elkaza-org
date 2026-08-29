"use client";

import FooterLegalLinks from "@/app/components/FooterLegalLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { launchCtas } from "@/lib/launchCtas";
import { SITE_CONTROLS } from "@/lib/siteStatus";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6 py-8 text-sm text-[var(--muted)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© 2026 Elkaza</p>
        <FooterLegalLinks />
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-2 px-6 py-4 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          {SITE_CONTROLS.showPrelaunchUi ? (
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
              {isEnglish ? "Project in preparation" : "Projekt in Vorbereitung"}
            </div>
          ) : (
            <Link href={isEnglish ? launchCtas.en.navigation.href : launchCtas.de.navigation.href}>
              {isEnglish ? launchCtas.en.navigation.label : launchCtas.de.navigation.label}
            </Link>
          )}
          <div>
            {isEnglish ? "Vienna, Austria" : "Wien, Österreich"}
          </div>
        </div>
      </div>
    </footer>
  );
}
