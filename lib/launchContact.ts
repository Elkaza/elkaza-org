import type { Locale } from "@/lib/siteContent";

export const PUBLIC_BUSINESS_EMAIL = "contact@elkaza.at";

export const activeContactContent = {
  de: {
    eyebrow: "Direkter Kontakt",
    title: "IT-Thema besprechen",
    intro:
      "Sie möchten Ihre aktuelle IT-Situation, Zugänge, Backups, Infrastruktur oder wiederkehrende Abläufe strukturiert prüfen?",
    prompt: "Beschreiben Sie kurz Ihre aktuelle Situation und das gewünschte Ziel.",
    action: "E-Mail schreiben",
    guidanceTitle: "Hilfreich für die erste Einordnung:",
    guidance: [
      "Unternehmen bzw. Teamgröße",
      "Problem oder Ziel",
      "betroffene Systeme",
      "ungefährer Zeitrahmen",
    ],
    security:
      "Bitte senden Sie keine Passwörter, Zugangsdaten oder besonders sensiblen Informationen per E-Mail.",
    boundary:
      "Eine kurze Anfrage ist noch kein Auftrag. Passung, Umfang und Verfügbarkeit werden zunächst eingeordnet.",
  },
  en: {
    eyebrow: "Direct contact",
    title: "Discuss an IT topic",
    intro:
      "Would you like to review your current IT situation, access, backups, infrastructure, or a recurring workflow in a structured way?",
    prompt: "Briefly describe the current situation and the outcome you are looking for.",
    action: "Write an email",
    guidanceTitle: "Helpful context for an initial review:",
    guidance: [
      "company or team size",
      "problem or objective",
      "affected systems",
      "approximate timeframe",
    ],
    security:
      "Please do not send passwords, credentials, or particularly sensitive information by email.",
    boundary:
      "An initial inquiry is not an order. Fit, scope, and availability are reviewed first.",
  },
} as const satisfies Record<Locale, object>;

export function publicContactHref(): string {
  return `mailto:${PUBLIC_BUSINESS_EMAIL}`;
}
