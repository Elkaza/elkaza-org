import type { Locale } from "../i18n/messages";

type ResearchContent = {
  eyebrow: string;
  pageTitle: string;
  pageIntro: string;
  thesisLabel: string;
  thesisTitle: string;
  institution: string;
  status: string;
  directionLabel: string;
  question: string;
  methodsTitle: string;
  methods: string[];
  artifactTitle: string;
  artifact: string;
  currentStatusTitle: string;
  currentStatus: string;
  interestsTitle: string;
  interests: string[];
};

type AcademicProjectContent = {
  title: string;
  institution: string;
  programme: string;
  module: string;
  year: string;
  status: string;
  label: string;
  description: string;
};

export const thesisResearch: Record<Locale, ResearchContent> = {
  de: {
    eyebrow: "Forschung & Masterprojekt",
    pageTitle: "Aktuelle akademische Arbeit",
    pageIntro: "Laufende akademische Arbeiten an der TU Wien und der FH Technikum Wien.",
    thesisLabel: "Geplante Diplomarbeit · TU Wien",
    thesisTitle:
      "Enterprise Coherence Governance und Methodenintegration bei Unternehmenstransformationen",
    institution: "TU Wien",
    status: "Themen- und Betreuungsabstimmung · 2026",
    directionLabel: "Vorgeschlagene Forschungsrichtung",
    question:
      "Aktuell untersuche ich diese Themenrichtung als mögliche Grundlage meiner Diplomarbeit in Wirtschaftsinformatik an der TU Wien. Der genaue Themenzuschnitt und die Betreuung befinden sich derzeit in Abstimmung.",
    methodsTitle: "Aktuelle explorative Forschungsarbeit",
    methods: [
      "Systematische Literaturrecherche",
      "Analyse österreichischer Stellenanzeigen",
      "Experteninterviews",
      "Design Science Research",
      "Method Engineering",
    ],
    artifactTitle: "Mögliches Forschungsartefakt",
    artifact:
      "Integrationsrahmen / Metamodell zur Darstellung der Beziehungen zwischen Methoden, Disziplinen, Rollen, Artefakten und Governance-Mechanismen.",
    currentStatusTitle: "Aktueller Stand",
    currentStatus:
      "Literaturrecherche, Stellenanzeigenanalyse und konzeptionelle Arbeit werden derzeit als explorative Forschung fortgeführt. Es werden keine abgeschlossenen, validierten oder veröffentlichten Ergebnisse beansprucht.",
    interestsTitle: "Forschungsinteressen",
    interests: [
      "Enterprise Architecture & Transformation Governance",
      "IoT / Edge AI / Secure Edge Systems",
      "Automation & Technical Operations",
    ],
  },
  en: {
    eyebrow: "Research & master's project",
    pageTitle: "Current Academic Work",
    pageIntro: "Ongoing academic work at TU Wien and FH Technikum Wien.",
    thesisLabel: "Proposed Diploma Thesis · TU Wien",
    thesisTitle:
      "Enterprise Coherence Governance and Method Integration During Organizational Transformation",
    institution: "TU Wien",
    status: "Topic and supervision under clarification · 2026",
    directionLabel: "Proposed research direction",
    question:
      "I am currently exploring this research direction as a potential basis for my diploma thesis in Business Informatics at TU Wien. The final topic and supervision are currently being clarified.",
    methodsTitle: "Current exploratory research",
    methods: [
      "Systematic Literature Review",
      "Austrian job-advertisement analysis",
      "Expert interviews",
      "Design Science Research",
      "Method engineering",
    ],
    artifactTitle: "Potential research artifact",
    artifact:
      "Integration framework / metamodel representing relationships between methods, disciplines, roles, artifacts, and governance mechanisms.",
    currentStatusTitle: "Current status",
    currentStatus:
      "The literature review, job-ad analysis and conceptual work are continuing as exploratory research. No completed, validated or published results are claimed.",
    interestsTitle: "Research interests",
    interests: [
      "Enterprise Architecture & Transformation Governance",
      "IoT / Edge AI / Secure Edge Systems",
      "Automation & Technical Operations",
    ],
  },
  ar: {
    eyebrow: "Research & master's project",
    pageTitle: "Current Academic Work",
    pageIntro: "Ongoing academic work at TU Wien and FH Technikum Wien.",
    thesisLabel: "Proposed Diploma Thesis · TU Wien",
    thesisTitle:
      "Enterprise Coherence Governance and Method Integration During Organizational Transformation",
    institution: "TU Wien",
    status: "Topic and supervision under clarification · 2026",
    directionLabel: "Proposed research direction",
    question:
      "I am currently exploring this research direction as a potential basis for my diploma thesis in Business Informatics at TU Wien. The final topic and supervision are currently being clarified.",
    methodsTitle: "Current exploratory research",
    methods: [
      "Systematic Literature Review",
      "Austrian job-advertisement analysis",
      "Expert interviews",
      "Design Science Research",
      "Method engineering",
    ],
    artifactTitle: "Potential research artifact",
    artifact:
      "Integration framework / metamodel representing relationships between methods, disciplines, roles, artifacts, and governance mechanisms.",
    currentStatusTitle: "Current status",
    currentStatus:
      "The literature review, job-ad analysis and conceptual work are continuing as exploratory research. No completed, validated or published results are claimed.",
    interestsTitle: "Research interests",
    interests: [
      "Enterprise Architecture & Transformation Governance",
      "IoT / Edge AI / Secure Edge Systems",
      "Automation & Technical Operations",
    ],
  },
};

export const mioProject: Record<Locale, AcademicProjectContent> = {
  de: {
    title: "Secure Edge AI Gateway for IoT Networks (Arbeitstitel)",
    institution: "FH Technikum Wien",
    programme: "MSc Internet of Things & Intelligent Systems",
    module: "MIO-3 Master's Project",
    year: "2026",
    status: "In Arbeit",
    label: "MIO-3 Master's Project · FH Technikum Wien · In Arbeit · 2026",
    description:
      "Ein Secure-Edge-/IoT-Projekt, dessen konkreter Umfang derzeit mit dem Betreuer abgestimmt wird. Als mögliche Richtung wird eine leichtgewichtige Identifikation von IoT-Geräten und die Erkennung unbekannter oder unerwarteter Geräte am Gateway untersucht.",
  },
  en: {
    title: "Secure Edge AI Gateway for IoT Networks (Working title)",
    institution: "FH Technikum Wien",
    programme: "MSc Internet of Things & Intelligent Systems",
    module: "MIO-3 Master's Project",
    year: "2026",
    status: "In progress",
    label: "MIO-3 Master's Project · FH Technikum Wien · In progress · 2026",
    description:
      "A secure edge/IoT project whose detailed scope is currently being defined with the supervisor. A possible direction being explored is lightweight identification of IoT devices and detection of unknown or unexpected devices at the gateway.",
  },
  ar: {
    title: "Secure Edge AI Gateway for IoT Networks (Working title)",
    institution: "FH Technikum Wien",
    programme: "MSc Internet of Things & Intelligent Systems",
    module: "MIO-3 Master's Project",
    year: "2026",
    status: "In progress",
    label: "MIO-3 Master's Project · FH Technikum Wien · In progress · 2026",
    description:
      "A secure edge/IoT project whose detailed scope is currently being defined with the supervisor. A possible direction being explored is lightweight identification of IoT devices and detection of unknown or unexpected devices at the gateway.",
  },
};
