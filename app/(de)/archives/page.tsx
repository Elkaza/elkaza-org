import ArchivesSearch from "@/app/components/ArchivesSearch";
import { buildArchiveItems } from "@/app/lib/archive";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/archives",
  title: "Archiv | Mohamed Elkaza",
  description: "Durchsuchbares Archiv mit Seiten und Projekten von Mohamed Elkaza.",
});

export default function ArchivesPage() {
  return <ArchivesSearch items={buildArchiveItems()} />;
}
