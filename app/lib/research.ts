import type { Locale } from "../i18n/messages";

type ResearchContent = {
  eyebrow: string;
  pageTitle: string;
  pageIntro: string;
  thesisLabel: string;
  thesisTitle: string;
  institution: string;
  status: string;
  advisorLabel: string;
  advisor: string;
  questionTitle: string;
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
    thesisLabel: "Diplomarbeit · TU Wien · In Arbeit · 2026",
    thesisTitle:
      "Rahmenwerk für Enterprise Coherence Governance: Methodenintegration bei Unternehmenstransformationen in Österreich",
    institution: "TU Wien",
    status: "In Arbeit",
    advisorLabel: "Betreuung",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
    questionTitle: "Forschungsziel",
    question:
      "Untersuchung der Beziehungen zwischen Methoden und Disziplinen der Unternehmenstransformation mit dem Ziel, Anforderungen für einen Integrationsrahmen beziehungsweise ein Metamodell zur Enterprise Coherence Governance abzuleiten.",
    methodsTitle: "Forschungsmethoden",
    methods: [
      "Systematische Literaturrecherche",
      "Analyse österreichischer Stellenanzeigen",
      "Experteninterviews",
      "Design Science Research",
      "Method Engineering",
    ],
    artifactTitle: "Geplantes Artefakt",
    artifact:
      "Geplant ist die Ableitung von Anforderungen für einen Integrationsrahmen beziehungsweise ein Metamodell zur Enterprise Coherence Governance.",
    currentStatusTitle: "Aktueller Stand",
    currentStatus:
      "Das Artefakt, die Interviews und die Evaluation sind noch in Arbeit. Es werden keine abgeschlossenen, validierten oder veröffentlichten Ergebnisse beansprucht.",
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
    thesisLabel: "Diploma Thesis · TU Wien · In progress · 2026",
    thesisTitle:
      "A Framework for Enterprise Coherence Governance: Method Integration During Organizational Transformation in Austria",
    institution: "TU Wien",
    status: "In progress",
    advisorLabel: "Advisor",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
    questionTitle: "Research objective",
    question:
      "Research into relationships between methods and disciplines involved in enterprise transformation, with the aim of deriving requirements for an integration framework or metamodel for enterprise coherence governance.",
    methodsTitle: "Research methods",
    methods: [
      "Systematic Literature Review",
      "Austrian job-advertisement analysis",
      "Expert interviews",
      "Design Science Research",
      "Method engineering",
    ],
    artifactTitle: "Planned artifact",
    artifact:
      "The planned work is to derive requirements for an integration framework or metamodel for enterprise coherence governance.",
    currentStatusTitle: "Current status",
    currentStatus:
      "The artifact, interviews and evaluation are still in progress. No completed, validated or published results are claimed.",
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
    thesisLabel: "Diploma Thesis · TU Wien · In progress · 2026",
    thesisTitle:
      "A Framework for Enterprise Coherence Governance: Method Integration During Organizational Transformation in Austria",
    institution: "TU Wien",
    status: "In progress",
    advisorLabel: "Advisor",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
    questionTitle: "Research objective",
    question:
      "Research into relationships between methods and disciplines involved in enterprise transformation, with the aim of deriving requirements for an integration framework or metamodel for enterprise coherence governance.",
    methodsTitle: "Research methods",
    methods: [
      "Systematic Literature Review",
      "Austrian job-advertisement analysis",
      "Expert interviews",
      "Design Science Research",
      "Method engineering",
    ],
    artifactTitle: "Planned artifact",
    artifact:
      "The planned work is to derive requirements for an integration framework or metamodel for enterprise coherence governance.",
    currentStatusTitle: "Current status",
    currentStatus:
      "The artifact, interviews and evaluation are still in progress. No completed, validated or published results are claimed.",
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
    title: "Secure Edge AI Gateway for IoT Networks",
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
    title: "Secure Edge AI Gateway for IoT Networks",
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
    title: "Secure Edge AI Gateway for IoT Networks",
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
