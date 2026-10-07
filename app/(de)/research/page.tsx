import ResearchPageContent from "@/app/components/ResearchPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/research",
  title: "Aktuelle akademische Arbeit | Mohamed Elkaza",
  description: "Aktuelle akademische Arbeit an TU Wien und FH Technikum Wien, darunter eine geplante MIO-3-Masterarbeitsrichtung zur Sensordatenintegrität am Edge Gateway.",
});

export default function ResearchPage() {
  return <ResearchPageContent />;
}
