import AboutPageContent from "@/app/components/AboutPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "de",
  path: "/about",
  title: "About | Mohamed Elkaza",
  description: "Professional profile of Mohamed Elkaza across application engineering, automation, infrastructure, IoT, monitoring, technical documentation, and business informatics.",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
