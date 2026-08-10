import ContactPageContent from "@/app/components/ContactPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  locale: "en",
  path: "/kontakt",
  title: "Contact | Mohamed Elkaza",
  description: "Contact Mohamed Elkaza for internships, master thesis cooperation, junior technical roles, data automation, IoT, Edge AI, infrastructure, monitoring, and application engineering opportunities.",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
