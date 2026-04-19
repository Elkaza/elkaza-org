import type { Locale } from "@/app/i18n/messages";

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
