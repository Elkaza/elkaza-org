"use client";
import Link from "next/link";
import { Search as SearchIcon, Mail, Linkedin, Youtube, Twitter, Github, Rss } from "lucide-react";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--outline)]">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        {/* Search icon */}
        <div className="flex justify-center mb-6">
          <Link
            href="/archives"
            aria-label="Search the Archives"
            className="p-2 rounded-full text-dim hover:text-[var(--text)] transition"
          >
            <SearchIcon size={22} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-dim mb-6">(c) {year} Elkaza. All rights reserved.</div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 text-dim">
          <a href="mailto:contact@elkaza.org" aria-label="Email" className="hover:text-[var(--text)] transition">
            <Mail size={18} />
          </a>
          <a href="https://www.youtube.com/@elkaza" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[var(--text)] transition">
            <Youtube size={18} />
          </a>
          <a href="https://www.linkedin.com/in/elkaza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--text)] transition">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com/elkaza" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="hover:text-[var(--text)] transition">
            <Twitter size={18} />
          </a>
          <a href="https://github.com/Elkaza" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--text)] transition">
            <Github size={18} />
          </a>
          <a href="/rss.xml" aria-label="RSS" className="hover:text-[var(--text)] transition">
            <Rss size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

