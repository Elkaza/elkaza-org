import TeachingPageContent from "@/app/components/TeachingPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/teaching",
  title: "Learning Focus | Mohamed Elkaza",
  description: "Current academic and technical learning focus across business informatics, project management, infrastructure, security, and IoT.",
});

export default function TeachingPage() {
  return <TeachingPageContent />;
}
