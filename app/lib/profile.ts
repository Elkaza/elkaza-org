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
  websiteUrl?: Record<Locale, string>;
  program: Record<Locale, string>;
  period: Record<Locale, string>;
  details: Record<Locale, string[]>;
};

export type ProfileCertification = {
  title: string;
  issuer: string;
  year: string;
};

export type ProfileSkillGroup = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  items: Record<Locale, string[]>;
};

export const profile = {
  name: "Mohamed Elkaza",
  title: {
    de: "IT Infrastructure & Application Engineer",
    en: "IT Infrastructure & Application Engineer",
    ar: "IT Infrastructure & Application Engineer",
  },
  introduction: {
    de: "Ich habe im Application Engineering, IT-Consulting und Netzwerk-Support gearbeitet. In meinem eigenen Lab betreibe ich Linux- und Windows-Systeme, automatisiere Konfigurationen, überwache Dienste und teste Wiederherstellungen.",
    en: "I have worked in application engineering, IT consulting and network support. In my own lab, I run Linux and Windows systems, automate configuration, monitor services and test recovery.",
    ar: "I have worked in application engineering, IT consulting and network support. In my own lab, I run Linux and Windows systems, automate configuration, monitor services and test recovery.",
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
  availability: {
    de: "Ab sofort verfügbar",
    en: "Available immediately",
    ar: "Available immediately",
  },
  openTo: {
    de: ["System Engineering / Administration", "Application Support", "IoT / OT", "Junior Security Operations", "Junior Research Engineering"],
    en: ["System engineering / administration", "Application support", "IoT / OT", "Junior security operations", "Junior research engineering"],
    ar: ["System engineering / administration", "Application support", "IoT / OT", "Junior security operations", "Junior research engineering"],
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
          "Erfahrene Application Engineers bei Kundenanfragen, Systemtests, technischer Nachverfolgung und Dokumentation unterstützt.",
        ],
        en: [
          "Evaluated requirements for Arabic PDF publications using an existing software solution.",
          "Supported experienced application engineers with customer requests, system testing, technical follow-up and documentation.",
        ],
        ar: [
          "Evaluated requirements for Arabic PDF publications using an existing software solution.",
          "Supported experienced application engineers with customer requests, system testing, technical follow-up and documentation.",
        ],
      },
      tools: {
        de: ["HICO TechDoc-Suite", "XSLT", "XML", "S1000D", "S4000P", "Technische Publikationen"],
        en: ["HICO TechDoc-Suite", "XSLT", "XML", "S1000D", "S4000P", "Technical Publications"],
        ar: ["HICO TechDoc-Suite", "XSLT", "XML", "S1000D", "S4000P", "Technical Publications"],
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
          "ServiceNow-API-Integration, Aufgabenplanung mit Jira und ServiceNow sowie technische und prozessuale Dokumentation unterstützt.",
        ],
        en: [
          "Developed automation solutions using Python and VBA.",
          "Supported ServiceNow API integration, task planning in Jira and ServiceNow, and technical and process documentation.",
        ],
        ar: [
          "Developed automation solutions using Python and VBA.",
          "Supported ServiceNow API integration, task planning in Jira and ServiceNow, and technical and process documentation.",
        ],
      },
      tools: {
        de: ["Python", "VBA", "ServiceNow (ITSM)", "Jira", "ADOIT", "ArchiMate", "REST API"],
        en: ["Python", "VBA", "ServiceNow (ITSM)", "Jira", "ADOIT", "ArchiMate", "REST API"],
        ar: ["Python", "VBA", "ServiceNow (ITSM)", "Jira", "ADOIT", "ArchiMate", "REST API"],
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
          "Stakeholder-Anforderungen in technische Konzepte und Prototypen übersetzt und die Abstimmung zwischen Product Management, Fachbereichen und technischen Teams unterstützt.",
        ],
        en: [
          "Analysed business requirements for enterprise-architecture software.",
          "Translated stakeholder needs into technical concepts and prototypes and supported coordination between product, business and technical teams.",
        ],
        ar: [
          "Analysed business requirements for enterprise-architecture software.",
          "Translated stakeholder needs into technical concepts and prototypes and supported coordination between product, business and technical teams.",
        ],
      },
      tools: {
        de: ["ADOIT", "ADONIS", "ArchiMate", "Enterprise Architecture", "Anforderungsanalyse", "Prototyping"],
        en: ["ADOIT", "ADONIS", "ArchiMate", "Enterprise Architecture", "Requirements Analysis", "Prototyping"],
        ar: ["ADOIT", "ADONIS", "ArchiMate", "Enterprise Architecture", "Requirements Analysis", "Prototyping"],
      },
    },
    {
      organization: { de: "Universität Benghazi", en: "University of Benghazi", ar: "University of Benghazi" },
      title: { de: "Network Engineer", en: "Network Engineer", ar: "Network Engineer" },
      period: "2013–2015",
      bullets: {
        de: [
          "Zwei Jahre technischer Support für mehr als 1.000 Anwender sowie Betreuung von Arbeitsplatzhardware und Windows-Systemen.",
          "TCP/IP-, LAN/WLAN-, Cisco- und MikroTik-Netzwerke einschließlich Routing, Switching, DNS, DHCP und Fehleranalyse betreut.",
        ],
        en: [
          "Provided two years of technical support for more than 1,000 users, workplace hardware and Windows systems.",
          "Supported TCP/IP, LAN/WLAN, Cisco and MikroTik networks, including routing, switching, DNS, DHCP and troubleshooting.",
        ],
        ar: [
          "Provided two years of technical support for more than 1,000 users, workplace hardware and Windows systems.",
          "Supported TCP/IP, LAN/WLAN, Cisco and MikroTik networks, including routing, switching, DNS, DHCP and troubleshooting.",
        ],
      },
      tools: {
        de: ["Cisco Routing & Switching", "Windows Server 2008 R2", "MikroTik", "TCP/IP", "LAN/WLAN", "Netzwerk-Fehleranalyse"],
        en: ["Cisco Routing & Switching", "Windows Server 2008 R2", "MikroTik", "TCP/IP", "LAN/WLAN", "Network Troubleshooting"],
        ar: ["Cisco Routing & Switching", "Windows Server 2008 R2", "MikroTik", "TCP/IP", "LAN/WLAN", "Network Troubleshooting"],
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
      period: { de: "09/2025–09/2027 (voraussichtlich)", en: "09/2025–09/2027 (expected)", ar: "09/2025–09/2027 (expected)" },
      details: {
        de: ["Berufsbegleitend", "Geplante Masterarbeitsrichtung: Integritätsmanipulation authentifizierter IoT-Sensorknoten am Edge Gateway"],
        en: ["Part-time", "Planned thesis direction: integrity manipulation of authenticated IoT sensor nodes at an edge gateway"],
        ar: ["Part-time", "Planned thesis direction: integrity manipulation of authenticated IoT sensor nodes at an edge gateway"],
      },
    },
    {
      institution: "TU Wien",
      program: {
        de: "MSc Wirtschaftsinformatik",
        en: "MSc Business Informatics",
        ar: "MSc Business Informatics",
      },
      period: {
        de: "10/2018–2021 Lehrveranstaltungen · Masterarbeit seit 10/2026",
        en: "10/2018–2021 coursework · thesis since 10/2026",
        ar: "10/2018–2021 coursework · thesis since 10/2026",
      },
      details: {
        de: ["90 ECTS Lehrveranstaltungen", "Masterarbeit in Arbeit: Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers"],
        en: ["90 ECTS coursework", "Master's thesis in progress: Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers"],
        ar: ["90 ECTS coursework", "Master's thesis in progress: Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers"],
      },
    },
    {
      institution: "VWU",
      websiteUrl: {
        de: "https://vorstudienlehrgang.oead.at/de/wien",
        en: "https://vorstudienlehrgang.oead.at/en/vienna",
        ar: "https://vorstudienlehrgang.oead.at/en/vienna",
      },
      program: {
        de: "Vorstudienlehrgang der Wiener Universitäten",
        en: "University Preparation Programme of the Vienna Universities",
        ar: "University Preparation Programme of the Vienna Universities",
      },
      period: { de: "01/2017–08/2018", en: "01/2017–08/2018", ar: "01/2017–08/2018" },
      details: {
        de: ["Deutsch für die Universitätszulassung; Ergänzungsprüfung im 06/2018 bestanden"],
        en: ["German for university admission; supplementary examination passed in 06/2018"],
        ar: ["German for university admission; supplementary examination passed in 06/2018"],
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
      details: {
        de: ["Fachbereich Computernetzwerke & Kommunikation"],
        en: ["Department of Computer Networks & Communication"],
        ar: ["Department of Computer Networks & Communication"],
      },
    },
  ] satisfies ProfileEducation[],
  certifications: [
    { title: "IPMA Level D: Certified Project Management Associate", issuer: "pma / IPMA", year: "2025–2030" },
    { title: "Modern Management: Projektmanagement (10 ECTS, with distinction)", issuer: "University of Graz / UNI for LIFE", year: "2025" },
    { title: "Business Analysis Foundations", issuer: "LinkedIn Learning", year: "2023" },
    { title: "Excel 365 VBA (Expert)", issuer: "Raiffeisen Bank International", year: "2022" },
    { title: "Aptis English Business C1", issuer: "British Council", year: "2020" },
    { title: "ÖSD Zertifikat B2", issuer: "ÖSD", year: "2019" },
    { title: "Junior Cybersecurity Analyst Path (in progress)", issuer: "HTB Academy", year: "2026" },
  ] satisfies ProfileCertification[],
  skillGroups: [
    {
      title: { de: "Berufliche Praxis", en: "Professional", ar: "Professional" },
      description: {
        de: "In bezahlten Rollen eingesetzt.",
        en: "Used in paid roles.",
        ar: "Used in paid roles.",
      },
      items: {
        de: ["TCP/IP", "Routing & Switching", "Cisco", "MikroTik", "DNS/DHCP", "User- & Hardware-Support", "Python", "VBA", "ServiceNow API", "Jira", "Systemtests / QA", "Technische Dokumentation", "XML/XSLT"],
        en: ["TCP/IP", "Routing & Switching", "Cisco", "MikroTik", "DNS/DHCP", "User & hardware support", "Python", "VBA", "ServiceNow API", "Jira", "System testing / QA", "Technical documentation", "XML/XSLT"],
        ar: ["TCP/IP", "Routing & Switching", "Cisco", "MikroTik", "DNS/DHCP", "User & hardware support", "Python", "VBA", "ServiceNow API", "Jira", "System testing / QA", "Technical documentation", "XML/XSLT"],
      },
    },
    {
      title: { de: "Eigene Projekte", en: "Own projects", ar: "Own projects" },
      description: {
        de: "Selbst aufgebaut, dokumentiert und betrieben.",
        en: "Built, documented and operated independently.",
        ar: "Built, documented and operated independently.",
      },
      items: {
        de: ["Linux (Debian/Ubuntu)", "Proxmox VE", "Docker / Podman", "Ansible", "Bash", "GitHub Actions", "Tailscale", "UFW/iptables", "Fail2Ban", "CrowdSec", "Nginx", "Uptime Kuma", "Netdata", "Grafana", "Restic", "MQTT / BLE", "TLS/X.509", "C/C++ (ESP32)"],
        en: ["Linux (Debian/Ubuntu)", "Proxmox VE", "Docker / Podman", "Ansible", "Bash", "GitHub Actions", "Tailscale", "UFW/iptables", "Fail2Ban", "CrowdSec", "Nginx", "Uptime Kuma", "Netdata", "Grafana", "Restic", "MQTT / BLE", "TLS/X.509", "C/C++ (ESP32)"],
        ar: ["Linux (Debian/Ubuntu)", "Proxmox VE", "Docker / Podman", "Ansible", "Bash", "GitHub Actions", "Tailscale", "UFW/iptables", "Fail2Ban", "CrowdSec", "Nginx", "Uptime Kuma", "Netdata", "Grafana", "Restic", "MQTT / BLE", "TLS/X.509", "C/C++ (ESP32)"],
      },
    },
    {
      title: { de: "Learning Lab", en: "Learning lab", ar: "Learning lab" },
      description: {
        de: "Praktische Laborumgebung, keine Berufspraxis.",
        en: "Hands-on lab work, not professional experience.",
        ar: "Hands-on lab work, not professional experience.",
      },
      items: {
        de: ["Windows Server", "Active Directory", "Group Policy", "PowerShell"],
        en: ["Windows Server", "Active Directory", "Group Policy", "PowerShell"],
        ar: ["Windows Server", "Active Directory", "Group Policy", "PowerShell"],
      },
    },
    {
      title: { de: "Studium", en: "Studies", ar: "Studies" },
      description: {
        de: "Im akademischen Kontext erworben.",
        en: "Developed through university coursework and projects.",
        ar: "Developed through university coursework and projects.",
      },
      items: {
        de: ["SQL / relationale Datenbanken", "TinyML", "Datenanalyse", "IoT Security", "IT Governance", "Enterprise Architecture", "Business Intelligence"],
        en: ["SQL / relational databases", "TinyML", "Data analysis", "IoT security", "IT governance", "Enterprise architecture", "Business intelligence"],
        ar: ["SQL / relational databases", "TinyML", "Data analysis", "IoT security", "IT governance", "Enterprise architecture", "Business intelligence"],
      },
    },
  ] satisfies ProfileSkillGroup[],
  // TODO(Mohamed): add privacy-reviewed, company-neutral EN/DE CV PDFs under public/cv/.
  cvDownloads: {
    de: null,
    en: null,
  } as Record<"de" | "en", string | null>,
} as const;

export type PublicProfile = typeof profile;
