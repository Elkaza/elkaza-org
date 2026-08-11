import type { Locale } from "../i18n/messages";

export type ProfileLanguage = {
  code: "ar" | "en" | "de";
  name: Record<Locale, string>;
  level: Record<Locale, string>;
};

export type ProfileExperience = {
  organization: string;
  title: Record<Locale, string>;
  period: string;
};

export type ProfileEducation = {
  institution: string;
  program: Record<Locale, string>;
  status: Record<Locale, string>;
};

export type ProfileCertification = {
  title: string;
  issuer: string;
  year: string;
};

export const profile = {
  name: "Mohamed Elkaza",
  title: {
    de: "IT Infrastructure & Application Engineer",
    en: "IT Infrastructure & Application Engineer",
    ar: "IT Infrastructure & Application Engineer",
  },
  introduction: {
    de: "Ich entwickle und betreibe zuverlässige Linux-, Docker- und Automatisierungssysteme und verbinde Application Support, technische Dokumentation sowie praktische IoT- und Edge-AI-Erfahrung.",
    en: "I build and operate reliable Linux, Docker and automation systems, combining application support, technical documentation and hands-on IoT and Edge AI work.",
    ar: "I build and operate reliable Linux, Docker and automation systems, combining application support, technical documentation and hands-on IoT and Edge AI work.",
  },
  location: {
    de: "Wien, Österreich",
    en: "Vienna, Austria",
    ar: "Vienna, Austria",
  },
  workAuthorization: {
    de: "Uneingeschränkter Arbeitsmarktzugang in Österreich",
    en: "Unrestricted access to the Austrian labour market",
    ar: "Unrestricted access to the Austrian labour market",
  },
  email: "contact@elkaza.org",
  websiteUrl: "https://www.elkaza.org",
  githubUrl: "https://github.com/Elkaza",
  linkedinUrl: "https://www.linkedin.com/in/elkaza",
  languages: [
    {
      code: "ar",
      name: { de: "Arabisch", en: "Arabic", ar: "Arabic" },
      level: { de: "Muttersprache", en: "native", ar: "native" },
    },
    {
      code: "en",
      name: { de: "Englisch", en: "English", ar: "English" },
      level: { de: "C1", en: "C1", ar: "C1" },
    },
    {
      code: "de",
      name: { de: "Deutsch", en: "German", ar: "German" },
      level: { de: "B2", en: "B2", ar: "B2" },
    },
  ] satisfies ProfileLanguage[],
  employment: [
    {
      organization: "HiCo-ICS",
      title: { de: "Application Engineer", en: "Application Engineer", ar: "Application Engineer" },
      period: "2023",
    },
    {
      organization: "Raiffeisen Bank International",
      title: { de: "Junior IT Consultant", en: "Junior IT Consultant", ar: "Junior IT Consultant" },
      period: "2022",
    },
    {
      organization: "BOC Group",
      title: { de: "Product Management Intern", en: "Product Management Intern", ar: "Product Management Intern" },
      period: "2021–2022",
    },
    {
      organization: "University of Benghazi",
      title: {
        de: "Netzwerk- und Systemtechniker",
        en: "Network and Systems Technician",
        ar: "Network and Systems Technician",
      },
      period: "2013–2016",
    },
  ] satisfies ProfileExperience[],
  education: [
    {
      institution: "FH Technikum Wien",
      program: {
        de: "MSc Internet of Things & Intelligent Systems",
        en: "MSc Internet of Things & Intelligent Systems",
        ar: "MSc Internet of Things & Intelligent Systems",
      },
      status: { de: "laufend", en: "ongoing", ar: "ongoing" },
    },
    {
      institution: "TU Wien",
      program: {
        de: "MSc Wirtschaftsinformatik",
        en: "MSc Business Informatics",
        ar: "MSc Business Informatics",
      },
      status: {
        de: "laufend, Masterarbeit in Arbeit",
        en: "ongoing, master's thesis in progress",
        ar: "ongoing, master's thesis in progress",
      },
    },
    {
      institution: "University of Benghazi",
      program: {
        de: "BSc Information Technology",
        en: "BSc Information Technology",
        ar: "BSc Information Technology",
      },
      status: { de: "abgeschlossen", en: "completed", ar: "completed" },
    },
  ] satisfies ProfileEducation[],
  certifications: [
    { title: "IPMA Level D (cPMA)", issuer: "pma / IPMA", year: "2025" },
    { title: "Modern Management, Project Management", issuer: "University of Graz", year: "2025" },
    { title: "Career Essentials in Business Analysis", issuer: "LinkedIn Learning", year: "2023" },
    { title: "Excel 365 VBA (Expert)", issuer: "Microsoft Excel", year: "2022" },
  ] satisfies ProfileCertification[],
  cvDownloads: {
    de: null,
    en: null,
  } as Record<"de" | "en", string | null>,
} as const;

export type PublicProfile = typeof profile;
