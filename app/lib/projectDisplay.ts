import type { Locale } from "@/app/i18n/messages";
import type { ProjectStatus } from "@/app/lib/projects";

const TAG_LABELS_DE: Record<string, string> = {
    Security: "Sicherheit",
    Networking: "Netzwerke",
    "Hybrid Cloud": "Hybrid-Cloud",
    "Zero Trust": "Zero Trust",
    Infrastructure: "Infrastruktur",
    Operations: "Betrieb",
    Platform: "Plattform",
    "Time Series": "Zeitreihen",
    Containerization: "Containerisierung",
    "Self-Hosted": "Self-Hosted",
    Privacy: "Datenschutz",
    Analytics: "Analytics",
    DevOps: "DevOps",
};

export function getProjectTagLabel(tag: string, locale: Locale) {
    if (locale === "de") {
        return TAG_LABELS_DE[tag] ?? tag;
    }

    return tag;
}

const STATUS_LABELS: Record<Locale, Record<ProjectStatus, string>> = {
    de: {
        live: "Im Betrieb",
        implemented: "Umgesetzt",
        "demonstrated-prototype": "Demonstrierter Prototyp",
        "academic-prototype": "Akademischer Prototyp",
        "in-progress": "In Arbeit",
        planned: "Geplant",
    },
    en: {
        live: "Live in operation",
        implemented: "Implemented",
        "demonstrated-prototype": "Demonstrated prototype",
        "academic-prototype": "Academic prototype",
        "in-progress": "In progress",
        planned: "Planned",
    },
    ar: {
        live: "Live in operation",
        implemented: "Implemented",
        "demonstrated-prototype": "Demonstrated prototype",
        "academic-prototype": "Academic prototype",
        "in-progress": "In progress",
        planned: "Planned",
    },
};

export function getProjectStatusLabel(status: ProjectStatus, locale: Locale) {
    return STATUS_LABELS[locale]?.[status] ?? STATUS_LABELS.en[status];
}
