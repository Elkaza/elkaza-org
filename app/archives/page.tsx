import ArchivesSearch, { type ArchiveItem } from "./ArchivesSearch";
import { getAllPosts } from "@/app/lib/blog";
import { projects } from "@/app/lib/projects";

const CORE_PAGES: ArchiveItem[] = [
  {
    title: { de: "Über mich", en: "About" },
    summary: {
      de: "Profil, Ausbildung, Infrastrukturarbeit und beruflicher Hintergrund.",
      en: "Profile, education, infrastructure work and professional background.",
    },
    href: "/about",
    type: "page",
    tags: ["profile", "education", "infrastructure"],
    year: 2026,
  },
  {
    title: { de: "CV", en: "CV" },
    summary: {
      de: "Kompakter Lebenslauf mit Erfahrung, Skills, Projekten und Ausbildung.",
      en: "Compact CV with experience, skills, projects and education.",
    },
    href: "/cv",
    type: "page",
    tags: ["cv", "experience", "skills"],
    year: 2026,
  },
  {
    title: { de: "Security", en: "Security" },
    summary: {
      de: "Security- und Plattformbetrieb mit privatem Zugriff, Monitoring und kontrollierter Exponierung.",
      en: "Security and platform operations with private access, monitoring and controlled exposure.",
    },
    href: "/security",
    type: "page",
    tags: ["security", "infrastructure", "monitoring"],
    year: 2026,
  },
  {
    title: { de: "Akademische Arbeit", en: "Academic Work" },
    summary: {
      de: "Thesis-Kontext, Forschungsinteressen und akademische Schwerpunkte.",
      en: "Thesis context, research interests and academic focus areas.",
    },
    href: "/research",
    type: "page",
    tags: ["academic", "thesis", "research"],
    year: 2026,
  },
  {
    title: { de: "Lernfokus", en: "Learning Focus" },
    summary: {
      de: "Studium, Zertifizierungen und laufende fachliche Entwicklung.",
      en: "Studies, certifications and ongoing professional development.",
    },
    href: "/teaching",
    type: "page",
    tags: ["learning", "certifications", "studies"],
    year: 2026,
  },
  {
    title: { de: "Kontakt", en: "Contact" },
    summary: {
      de: "Kontaktmöglichkeiten und berufliche Links.",
      en: "Contact options and professional links.",
    },
    href: "/contact",
    type: "page",
    tags: ["contact", "links"],
    year: 2026,
  },
];

export default function ArchivesPage() {
  const projectItems: ArchiveItem[] = projects.map((project) => ({
    title: {
      de: project.title.de,
      en: project.title.en,
    },
    summary: {
      de: project.oneLiner.de,
      en: project.oneLiner.en,
    },
    href: `/projects/${project.slug}`,
    type: "project",
    tags: [...project.tags, ...project.tech],
    year: Number(project.year) || 2026,
  }));

  const blogItems: ArchiveItem[] = getAllPosts().map((post) => ({
    title: {
      de: post.title,
      en: post.title,
    },
    summary: {
      de: post.description,
      en: post.description,
    },
    href: `/blog/${post.slug}`,
    type: "blog",
    tags: post.tags,
    year: new Date(post.date).getFullYear() || 2026,
  }));

  return <ArchivesSearch items={[...CORE_PAGES, ...projectItems, ...blogItems]} />;
}
