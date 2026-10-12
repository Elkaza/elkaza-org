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
    thesisLabel: "Masterarbeit · TU Wien",
    thesisTitle:
      "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers",
    institution: "TU Wien",
    status: "In Arbeit seit 10/2026 · geplante Abgabe 04/2027",
    directionLabel: "Arbeitstitel",
    question:
      "Die Masterarbeit im Studium Wirtschaftsinformatik läuft unter diesem Arbeitstitel. Forschungsfrage und Methodik werden hier erst ergänzt, wenn der genaue Zuschnitt feststeht.",
    methodsTitle: "Betreuung",
    methods: [
      "Betreuer · Dr. Vincenzo De Maio",
      "Co-Betreuerin · Prof. Ivona Brandić",
    ],
    artifactTitle: "Arbeitstitel",
    artifact: "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers",
    currentStatusTitle: "Aktueller Stand",
    currentStatus:
      "90 ECTS Lehrveranstaltungen wurden 2018–2021 absolviert. Die Masterarbeit läuft seit Oktober 2026; als Abgabe ist April 2027 geplant.",
    interestsTitle: "Forschungsinteressen",
    interests: [
      "Energy-Aware Edge AI",
      "IoT / Edge AI / Secure Edge Systems",
      "Automation & Technical Operations",
    ],
  },
  en: {
    eyebrow: "Research & master's project",
    pageTitle: "Current Academic Work",
    pageIntro: "Ongoing academic work at TU Wien and FH Technikum Wien.",
    thesisLabel: "Master's thesis · TU Wien",
    thesisTitle:
      "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers",
    institution: "TU Wien",
    status: "In progress since 10/2026 · planned submission 04/2027",
    directionLabel: "Working title",
    question:
      "The Business Informatics master's thesis is in progress under this working title. The detailed research question and methodology will be added here once the scope is settled.",
    methodsTitle: "Supervision",
    methods: [
      "Supervisor · Dr. Vincenzo De Maio",
      "Co-supervisor · Prof. Ivona Brandić",
    ],
    artifactTitle: "Working title",
    artifact: "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers",
    currentStatusTitle: "Current status",
    currentStatus:
      "90 ECTS of coursework were completed from 2018 to 2021. The master's thesis has been in progress since October 2026, with submission planned for April 2027.",
    interestsTitle: "Research interests",
    interests: [
      "Energy-Aware Edge AI",
      "IoT / Edge AI / Secure Edge Systems",
      "Automation & Technical Operations",
    ],
  },
  ar: {
    eyebrow: "Research & master's project",
    pageTitle: "Current Academic Work",
    pageIntro: "Ongoing academic work at TU Wien and FH Technikum Wien.",
    thesisLabel: "Master's thesis · TU Wien",
    thesisTitle:
      "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers",
    institution: "TU Wien",
    status: "In progress since 10/2026 · planned submission 04/2027",
    directionLabel: "Working title",
    question:
      "The Business Informatics master's thesis is in progress under this working title. The detailed research question and methodology will be added here once the scope is settled.",
    methodsTitle: "Supervision",
    methods: [
      "Supervisor · Dr. Vincenzo De Maio",
      "Co-supervisor · Prof. Ivona Brandić",
    ],
    artifactTitle: "Working title",
    artifact: "Energy-Aware Placement of AI Inference Across Device, Edge and Cloud Tiers",
    currentStatusTitle: "Current status",
    currentStatus:
      "90 ECTS of coursework were completed from 2018 to 2021. The master's thesis has been in progress since October 2026, with submission planned for April 2027.",
    interestsTitle: "Research interests",
    interests: [
      "Energy-Aware Edge AI",
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
