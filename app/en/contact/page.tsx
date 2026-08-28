import ContactPageContent from "@/app/components/ContactPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/kontakt",
  title: "Contact | Mohamed Elkaza",
  description: "Contact Mohamed Elkaza about technical roles and collaborations in application engineering, infrastructure and automation.",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
