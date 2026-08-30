import type { Locale } from "../i18n/messages";

export type ProfileLanguage = {
  code: "ar" | "en" | "de";
  name: Record<Locale, string>;
  level: Record<Locale, string>;
};

export type ProfileExperience = {
  organization: Record<Locale, string>;
  location?: Record<Locale, string>;
  title: Record<Locale, string>;
  period: string;
  bullets: Record<Locale, string[]>;
  tools: Record<Locale, string[]>;
};

export type ProfileEducation = {
  institution: string;
  program: Record<Locale, string>;
  period: Record<Locale, string>;
  details: Record<Locale, string[]>;
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
    de: "Ich betreibe Linux- und Docker-Umgebungen, analysiere Anwendungsprobleme und automatisiere Betriebsabläufe mit Ansible, Python und SQL.",
    en: "I operate Linux and Docker environments, troubleshoot applications, and automate workflows with Ansible, Python and SQL.",
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
  websiteUrl: "https://elkaza.org",
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
      organization: { de: "HiCo-ICS", en: "HiCo-ICS", ar: "HiCo-ICS" },
      location: { de: "Wien", en: "Vienna", ar: "Vienna" },
      title: { de: "Application Engineer", en: "Application Engineer", ar: "Application Engineer" },
      period: "2023",
      bullets: {
        de: [
          "Anforderungen für arabische PDF-Publikationen mit einer bestehenden Softwarelösung bewertet.",
          "Mit technischen Produktkonzepten und Standards wie S1000D und S4000P gearbeitet.",
          "Erfahrene Application Engineers bei Kundenanfragen und technischer Nachverfolgung unterstützt.",
        ],
        en: [
          "Evaluated requirements for Arabic PDF publications using an existing software solution.",
          "Worked with technical product concepts and standards including S1000D and S4000P.",
          "Supported experienced application engineers with customer requests and technical follow-up.",
        ],
        ar: [
          "Evaluated requirements for Arabic PDF publications using an existing software solution.",
          "Worked with technical product concepts and standards including S1000D and S4000P.",
          "Supported experienced application engineers with customer requests and technical follow-up.",
        ],
      },
      tools: {
        de: ["S1000D", "S4000P", "Anforderungsanalyse", "Technische Publikationen"],
        en: ["S1000D", "S4000P", "Requirements Analysis", "Technical Publications"],
        ar: ["S1000D", "S4000P", "Requirements Analysis", "Technical Publications"],
      },
    },
    {
      organization: { de: "Raiffeisen Bank International AG", en: "Raiffeisen Bank International AG", ar: "Raiffeisen Bank International AG" },
      location: { de: "Wien", en: "Vienna", ar: "Vienna" },
      title: { de: "Junior IT Consultant", en: "Junior IT Consultant", ar: "Junior IT Consultant" },
      period: "2022",
      bullets: {
        de: [
          "Automatisierungslösungen mit Python und VBA entwickelt.",
          "Eine ServiceNow-API-Integration sowie Aufgabenplanung mit Jira und ServiceNow unterstützt.",
          "Mit ADO.IT und strukturierten betrieblichen IT-Informationen gearbeitet.",
        ],
        en: [
          "Developed automation solutions using Python and VBA.",
          "Supported a ServiceNow API integration and task planning in Jira and ServiceNow.",
          "Worked with ADO.IT and structured operational IT information.",
        ],
        ar: [
          "Developed automation solutions using Python and VBA.",
          "Supported a ServiceNow API integration and task planning in Jira and ServiceNow.",
          "Worked with ADO.IT and structured operational IT information.",
        ],
      },
      tools: {
        de: ["Python", "VBA", "ServiceNow", "Jira", "ADO.IT", "REST API"],
        en: ["Python", "VBA", "ServiceNow", "Jira", "ADO.IT", "REST API"],
        ar: ["Python", "VBA", "ServiceNow", "Jira", "ADO.IT", "REST API"],
      },
    },
    {
      organization: { de: "BOC Group", en: "BOC Group", ar: "BOC Group" },
      location: { de: "Wien", en: "Vienna", ar: "Vienna" },
      title: { de: "Product Management Intern", en: "Product Management Intern", ar: "Product Management Intern" },
      period: "2021–2022",
      bullets: {
        de: [
          "Fachliche Anforderungen für Enterprise-Architecture-Software analysiert.",
          "Stakeholder-Anforderungen in technische Konzepte und Prototypen übersetzt.",
          "Abstimmung zwischen Product Management, Fachbereichen und technischen Teams unterstützt.",
        ],
        en: [
          "Analysed business requirements for enterprise-architecture software.",
          "Translated stakeholder needs into technical concepts and prototypes.",
          "Supported coordination between product management, business stakeholders and technical teams.",
        ],
        ar: [
          "Analysed business requirements for enterprise-architecture software.",
          "Translated stakeholder needs into technical concepts and prototypes.",
          "Supported coordination between product management, business stakeholders and technical teams.",
        ],
      },
      tools: {
        de: ["Enterprise Architecture", "Anforderungsanalyse", "Prototyping", "Stakeholder-Koordination"],
        en: ["Enterprise Architecture", "Requirements Analysis", "Prototyping", "Stakeholder Coordination"],
        ar: ["Enterprise Architecture", "Requirements Analysis", "Prototyping", "Stakeholder Coordination"],
      },
    },
    {
      organization: { de: "Universität Benghazi", en: "University of Benghazi", ar: "University of Benghazi" },
      title: { de: "Network & Infrastructure Engineer", en: "Network & Infrastructure Engineer", ar: "Network & Infrastructure Engineer" },
      period: "2013–2016",
      bullets: {
        de: [
          "First-Level-IT-Support für mehr als 1.000 Anwender geleistet.",
          "Arbeitsplatzhardware, Software, Netzwerkzugänge und Infrastrukturprobleme betreut.",
          "Fehlerbilder, Lösungswege und technische Abläufe dokumentiert.",
        ],
        en: [
          "Provided first-level IT support for more than 1,000 users.",
          "Supported workplace hardware, software, network access and infrastructure troubleshooting.",
          "Documented technical issues, resolution paths and operating procedures.",
        ],
        ar: [
          "Provided first-level IT support for more than 1,000 users.",
          "Supported workplace hardware, software, network access and infrastructure troubleshooting.",
          "Documented technical issues, resolution paths and operating procedures.",
        ],
      },
      tools: {
        de: ["TCP/IP", "LAN/WLAN", "Windows", "Netzwerk-Fehleranalyse", "IT Support"],
        en: ["TCP/IP", "LAN/WLAN", "Windows", "Network Troubleshooting", "IT Support"],
        ar: ["TCP/IP", "LAN/WLAN", "Windows", "Network Troubleshooting", "IT Support"],
      },
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
      period: { de: "2025–2027 (voraussichtlich)", en: "2025–2027 (expected)", ar: "2025–2027 (expected)" },
      details: {
        de: ["Laufend"],
        en: ["In progress"],
        ar: ["In progress"],
      },
    },
    {
      institution: "TU Wien",
      program: {
        de: "Masterstudium Wirtschaftsinformatik",
        en: "Master's Programme in Business Informatics",
        ar: "Master's Programme in Business Informatics",
      },
      period: {
        de: "2018–2026 (voraussichtlich)",
        en: "2018–2026 (expected)",
        ar: "2018–2026 (expected)",
      },
      details: {
        de: ["Diplomarbeit: Themen- und Betreuungsabstimmung läuft", "Angestrebter Abschlussgrad: Diplom-Ingenieur"],
        en: ["Diploma thesis: topic and supervision currently under clarification", "Target degree: Diplom-Ingenieur"],
        ar: ["Diploma thesis: topic and supervision currently under clarification", "Target degree: Diplom-Ingenieur"],
      },
    },
    {
      institution: "University of Benghazi",
      program: {
        de: "BSc Information Technology",
        en: "BSc Information Technology",
        ar: "BSc Information Technology",
      },
      period: { de: "2008–2013", en: "2008–2013", ar: "2008–2013" },
      details: { de: ["Abgeschlossen"], en: ["Completed"], ar: ["Completed"] },
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
