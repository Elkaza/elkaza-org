import type { Locale } from "../i18n/messages";

type ResearchContent = {
  eyebrow: string;
  pageTitle: string;
  thesisLabel: string;
  thesisTitle: string;
  institution: string;
  status: string;
  advisorLabel: string;
  advisor: string;
  questionTitle: string;
  question: string;
  areasTitle: string;
  areas: string[];
  methodsTitle: string;
  methods: string[];
  artifactTitle: string;
  artifact: string;
  currentStatusTitle: string;
  currentStatus: string;
  interestsTitle: string;
  interests: string[];
};

export const thesisResearch: Record<Locale, ResearchContent> = {
  de: {
    eyebrow: "Aktuelle Forschung",
    pageTitle: "Forschung",
    thesisLabel: "Diplomarbeit · TU Wien · In Arbeit · 2026",
    thesisTitle:
      "Rahmenwerk für Enterprise Coherence Governance: Methodenintegration bei Unternehmenstransformationen in Österreich",
    institution: "Masterstudium Wirtschaftsinformatik · TU Wien",
    status: "In Arbeit",
    advisorLabel: "Betreuung",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
    questionTitle: "Forschungsproblem",
    question:
      "Die Arbeit untersucht, wie Methoden und Disziplinen der Unternehmenstransformation miteinander in Beziehung gesetzt und kohärent gesteuert werden können. Im Mittelpunkt steht die Frage, wie Überschneidungen, Übergaben und Governance-Mechanismen zwischen diesen Ansätzen nachvollziehbar dargestellt werden können.",
    areasTitle: "Untersuchte Bereiche",
    areas: [
      "Enterprise Architecture",
      "IT Governance",
      "IT Service Management",
      "Projekt-, Programm- und Portfoliomanagement",
      "Agile und Scaled Agile",
      "Transformation und Change Management",
      "Governance-relevante DevOps- und Operating-Model-Ansätze",
    ],
    methodsTitle: "Forschungsmethoden",
    methods: [
      "Systematische Literaturrecherche",
      "Inhaltsanalyse österreichischer Stellenanzeigen",
      "Leitfadengestützte Experteninterviews",
      "Design Science Research",
      "Method Engineering",
    ],
    artifactTitle: "Geplantes Artefakt",
    artifact:
      "Ein Integrationsrahmen beziehungsweise Metamodell, das Beziehungen zwischen Disziplinen, Methoden und Frameworks, Rollen und Stakeholdern, Aktivitäten, Arbeitsergebnissen, Integrationspunkten sowie Governance- und Kohärenzmechanismen abbildet.",
    currentStatusTitle: "Aktueller Stand",
    currentStatus:
      "Die Arbeit, das Rahmenwerk und die Evaluation sind noch in Arbeit. Es werden keine abgeschlossenen oder validierten Ergebnisse beansprucht und kein Entwurf veröffentlicht.",
    interestsTitle: "Forschungsinteressen",
    interests: [
      "Enterprise Architecture & Digital Transformation",
      "IoT / Edge Systems",
      "Automation & Technical Operations",
    ],
  },
  en: {
    eyebrow: "Current research",
    pageTitle: "Research",
    thesisLabel: "Diploma Thesis / Master's Thesis · TU Wien · In progress · 2026",
    thesisTitle:
      "A Framework for Enterprise Coherence Governance: Method Integration During Organizational Transformation in Austria",
    institution: "Master's Programme in Business Informatics · TU Wien",
    status: "In progress",
    advisorLabel: "Advisor",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
    questionTitle: "Research problem",
    question:
      "The work investigates how methods and disciplines involved in enterprise transformation can be related and governed coherently. It focuses on making overlaps, handovers and governance mechanisms between these approaches explicit and understandable.",
    areasTitle: "Areas examined",
    areas: [
      "Enterprise Architecture",
      "IT Governance",
      "IT Service Management",
      "Project, Program and Portfolio Management",
      "Agile and Scaled Agile",
      "Transformation and Change Management",
      "Governance-relevant DevOps and operating-model approaches",
    ],
    methodsTitle: "Research methods",
    methods: [
      "Systematic Literature Review",
      "Austrian job-advertisement content analysis",
      "Semi-structured expert interviews",
      "Design Science Research",
      "Method engineering",
    ],
    artifactTitle: "Planned artifact",
    artifact:
      "An integration framework or metamodel representing relationships among disciplines, methods and frameworks, roles and stakeholders, activities, work products, integration points, and governance or coherence mechanisms.",
    currentStatusTitle: "Current status",
    currentStatus:
      "The thesis, framework and evaluation are still in progress. No completed or validated results are claimed, and no draft is published.",
    interestsTitle: "Research interests",
    interests: [
      "Enterprise Architecture & Digital Transformation",
      "IoT / Edge Systems",
      "Automation & Technical Operations",
    ],
  },
  ar: {
    eyebrow: "Current research",
    pageTitle: "Research",
    thesisLabel: "Diploma Thesis / Master's Thesis · TU Wien · In progress · 2026",
    thesisTitle:
      "A Framework for Enterprise Coherence Governance: Method Integration During Organizational Transformation in Austria",
    institution: "Master's Programme in Business Informatics · TU Wien",
    status: "In progress",
    advisorLabel: "Advisor",
    advisor: "Univ.Prof. Dr. Henderik A. Proper",
    questionTitle: "Research problem",
    question:
      "The work investigates how methods and disciplines involved in enterprise transformation can be related and governed coherently. It focuses on making overlaps, handovers and governance mechanisms between these approaches explicit and understandable.",
    areasTitle: "Areas examined",
    areas: [
      "Enterprise Architecture",
      "IT Governance",
      "IT Service Management",
      "Project, Program and Portfolio Management",
      "Agile and Scaled Agile",
      "Transformation and Change Management",
      "Governance-relevant DevOps and operating-model approaches",
    ],
    methodsTitle: "Research methods",
    methods: [
      "Systematic Literature Review",
      "Austrian job-advertisement content analysis",
      "Semi-structured expert interviews",
      "Design Science Research",
      "Method engineering",
    ],
    artifactTitle: "Planned artifact",
    artifact:
      "An integration framework or metamodel representing relationships among disciplines, methods and frameworks, roles and stakeholders, activities, work products, integration points, and governance or coherence mechanisms.",
    currentStatusTitle: "Current status",
    currentStatus:
      "The thesis, framework and evaluation are still in progress. No completed or validated results are claimed, and no draft is published.",
    interestsTitle: "Research interests",
    interests: [
      "Enterprise Architecture & Digital Transformation",
      "IoT / Edge Systems",
      "Automation & Technical Operations",
    ],
  },
};
