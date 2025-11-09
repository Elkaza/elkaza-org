"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Search from "./Search";
import MoreMenu from "./MoreMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Fix hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* === Logo === */}
        <Link
          href="/"
          aria-label="Home"
          className="text-2xl font-bold tracking-wide uppercase heading-serif text-blue-700 dark:text-blue-400"
        >
          MOHAMED ELKAZA
        </Link>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className={`hover:text-blue-600 ${
              pathname === "/about" ? "text-blue-700 dark:text-blue-400" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/research"
            aria-current={pathname === "/research" ? "page" : undefined}
            className={`hover:text-blue-600 ${
              pathname === "/research" ? "text-blue-700 dark:text-blue-400" : ""
            }`}
          >
            Research
          </Link>
          <Link
            href="/projects"
            aria-current={pathname === "/projects" ? "page" : undefined}
            className={`hover:text-blue-600 ${
              pathname === "/projects" ? "text-blue-700 dark:text-blue-400" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/teaching"
            aria-current={pathname === "/teaching" ? "page" : undefined}
            className={`hover:text-blue-600 ${
              pathname === "/teaching" ? "text-blue-700 dark:text-blue-400" : ""
            }`}
          >
            Teaching
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`hover:text-blue-600 ${
              pathname === "/contact" ? "text-blue-700 dark:text-blue-400" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* === Right Controls === */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          <Search />
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {/* More menu */}
          <MoreMenu />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* === Mobile Dropdown === */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="flex flex-col p-4 space-y-2">
            <Link
              href="/about"
              aria-current={pathname === "/about" ? "page" : undefined}
              className={pathname === "/about" ? "text-blue-700 dark:text-blue-400" : undefined}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/research"
              aria-current={pathname === "/research" ? "page" : undefined}
              className={pathname === "/research" ? "text-blue-700 dark:text-blue-400" : undefined}
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/projects"
              aria-current={pathname === "/projects" ? "page" : undefined}
              className={pathname === "/projects" ? "text-blue-700 dark:text-blue-400" : undefined}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/teaching"
              aria-current={pathname === "/teaching" ? "page" : undefined}
              className={pathname === "/teaching" ? "text-blue-700 dark:text-blue-400" : undefined}
              onClick={() => setIsOpen(false)}
            >
              Teaching
            </Link>
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={pathname === "/contact" ? "text-blue-700 dark:text-blue-400" : undefined}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
