import CvPageContent from "@/app/components/CvPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/cv",
  title: "CV | Mohamed Elkaza",
  description: "CV of Mohamed Elkaza covering application engineering, infrastructure and security operations, automation, networking, monitoring, and secure IoT research.",
});

export default function EnglishCvPage() {
  return <CvPageContent />;
}
