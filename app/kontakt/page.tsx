import type { Metadata } from "next";
import ContactPageContent from "../components/ContactPageContent";

export const metadata: Metadata = {
  title: "Kontakt | Mohamed Elkaza",
  description:
    "Kontakt zu Mohamed Elkaza für Praktikum, Masterarbeitskooperation, Junior Technical Roles, Datenautomatisierung, IoT, Edge AI, Infrastruktur, Monitoring und Application Engineering.",
};

export default function KontaktPage() {
  return <ContactPageContent />;
}
