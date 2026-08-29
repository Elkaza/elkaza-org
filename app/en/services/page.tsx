import ServicesOverview from "@/app/components/ServicesOverview";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Planned IT Assessments and Sprints for SMEs | Elkaza",
  description: "Three planned areas: IT & Security Baseline Assessment, Infrastructure & Access Review, and Automation & Documentation Sprint.",
  path: "/en/services",
});

export default function ServicesEnPage() {
  return <ServicesOverview locale="en" />;
}
