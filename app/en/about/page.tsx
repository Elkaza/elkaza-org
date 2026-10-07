import AboutPageContent from "@/app/components/AboutPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/about",
  title: "About | Mohamed Elkaza",
  description: "Professional profile of Mohamed Elkaza across application engineering, infrastructure and security operations, automation, and secure IoT research.",
});

export default function EnglishAboutPage() {
  return <AboutPageContent />;
}
