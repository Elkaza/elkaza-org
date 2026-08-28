import TeachingPageContent from "@/app/components/TeachingPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/teaching",
  title: "Lernfokus | Mohamed Elkaza",
  description: "Aktuelle akademische und technische Lernschwerpunkte in Wirtschaftsinformatik, Projektmanagement, Infrastruktur, Security und IoT.",
});

export default function TeachingPage() {
  return <TeachingPageContent />;
}
