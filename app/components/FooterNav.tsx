"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/teaching", label: "Teaching" },
  { href: "/contact", label: "Contact" },
];

export default function FooterNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Footer links" className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={
                "transition-colors hover:text-blue-700 dark:hover:text-blue-400 " +
                (active ? "text-blue-700 dark:text-blue-400 font-medium" : "text-gray-600 dark:text-gray-300")
              }
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

