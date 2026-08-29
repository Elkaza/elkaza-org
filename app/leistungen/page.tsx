import LeistungenClient from "./LeistungenClient";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Geplante Leistungsbereiche – Netzwerk & Security aus Wien | Elkaza",
  description: "Unverbindlicher Überblick über mögliche zukünftige Leistungsbereiche: Security Baseline, Netzwerk, Zugänge, Backups und dokumentierter IT-Betrieb.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return <LeistungenClient />;
}
