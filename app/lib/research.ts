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
      "Literaturrecherche, Stellenanzeigenanalyse und konzeptionelle Arbeit laufen. Die Ergebnisse sind noch nicht validiert oder veröffentlicht.",
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
      "The literature review, job-ad analysis and conceptual work are in progress. Results have not yet been validated or published.",
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
      "The literature review, job-ad analysis and conceptual work are in progress. Results have not yet been validated or published.",
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
    institution: "FH Technikum Wien",
    programme: "MSc Internet of Things & Intelligent Systems",
    module: "MIO-3 Master's Project",
    year: "Oktober 2026",
    title: "Integritätsmanipulation durch authentifizierte IoT-Sensorknoten am Edge Gateway",
    status: "MIO-3 / geplante Masterarbeitsrichtung",
    label: "MIO-3-Masterprojekt / geplante Masterarbeitsrichtung · Forschungsumfang Oktober 2026",
    description: "Untersucht wird, ob ein Raspberry Pi 5 manipulierte, aber syntaktisch gültige Messwerte eines authentifizierten MQTT-Sensorknotens erkennen kann. Eine statistische Baseline, Isolation Forest und One-Class SVM werden getrennt im isolierten Testbed verglichen. Der Themenumfang ist noch nicht formal als Masterarbeit genehmigt.",
  },
  en: {
    institution: "FH Technikum Wien",
    programme: "MSc Internet of Things & Intelligent Systems",
    module: "MIO-3 Master's Project",
    year: "October 2026",
    title: "Detecting Integrity Manipulation by Authenticated IoT Sensor Nodes at a Resource-Constrained Edge Gateway",
    status: "MIO-3 / planned Master's thesis direction",
    label: "MIO-3 Master's Project / planned Master's thesis direction · Research scope October 2026",
    description: "The project asks whether a Raspberry Pi 5 can detect manipulated but syntactically valid measurements from an authenticated MQTT sensor node. A statistical baseline, Isolation Forest and One-Class SVM will be compared separately in an isolated testbed. The scope has not received final formal approval as a Master's thesis topic.",
  },
  ar: {
    institution: "FH Technikum Wien",
    programme: "MSc Internet of Things & Intelligent Systems",
    module: "MIO-3 Master's Project",
    year: "October 2026",
    title: "Detecting Integrity Manipulation by Authenticated IoT Sensor Nodes at a Resource-Constrained Edge Gateway",
    status: "MIO-3 / planned Master's thesis direction",
    label: "MIO-3 Master's Project / planned Master's thesis direction · Research scope October 2026",
    description: "The project asks whether a Raspberry Pi 5 can detect manipulated but syntactically valid measurements from an authenticated MQTT sensor node. A statistical baseline, Isolation Forest and One-Class SVM will be compared separately in an isolated testbed. The scope has not received final formal approval as a Master's thesis topic.",
  },
};
