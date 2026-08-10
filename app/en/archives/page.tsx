import ArchivesSearch from "@/app/components/ArchivesSearch";
import { buildArchiveItems } from "@/app/(de)/archives/page";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/archives",
  title: "Archive | Mohamed Elkaza",
  description: "Searchable archive with pages, projects, and blog entries by Mohamed Elkaza.",
});

export default function EnglishArchivesPage() {
  return <ArchivesSearch items={buildArchiveItems()} />;
}
