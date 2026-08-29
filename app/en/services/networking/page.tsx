import { Network } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Infrastructure & Access Review - Elkaza",
  description: "A planned review of existing topology, administrative access, remote access, segmentation, firewall rules, and documentation.",
  path: "/en/services/networking",
});

export default function NetworkingPage() {
  return (
    <ServicePageTemplate
      locale="en"
      icon={Network}
      title="Infrastructure & Access Review"
      promise="Make existing access paths and infrastructure understandable, prioritize risks, and close documentation gaps."
      scopeNote="The review evaluates the existing environment. Rebuilds, hardware procurement, migrations, or ongoing operations are not included and would need separate planning."
      ctaAction="Discuss the review"
      ctaHref="/en/contact"
      timeline="defined by locations and scope"
      deliverablesCount={5}
      forWhom={[
        "Small businesses with organically grown or lightly documented infrastructure",
        "Teams with unclear remote or administrative access",
        "Organizations seeking a structured review of segmentation and firewall rules",
      ]}
      outcomes={[
        "A traceable view of the existing topology",
        "Documented administrative and external access paths",
        "Prioritized segmentation and access-rule risks",
        "Practical documentation and stabilization steps",
      ]}
      included={[
        "Review of the existing network and system topology",
        "Remote, external, and administrative access paths",
        "Segmentation fundamentals",
        "Review of existing firewall and access rules",
        "Infrastructure documentation and operational dependencies",
        "Visible operational risks within the agreed scope",
      ]}
      deliverables={[
        "Updated topology overview",
        "Documented access paths and ownership",
        "Prioritized technical findings",
        "Summary of relevant firewall and segmentation questions",
        "Assumptions, exclusions, and practical next steps",
      ]}
      tools={[
        "Existing firewall, switch, and VPN configurations",
        "Available network diagrams and system inventories",
        "Focused technical inventory work",
      ]}
      process={[
        { step: "Inspect", desc: "Capture available diagrams, configurations, and access paths within scope.", time: "Inventory" },
        { step: "Review", desc: "Evaluate topology, rules, segmentation, and dependencies in a traceable way.", time: "Review" },
        { step: "Document", desc: "Hand over findings, risks, and possible next steps in a structured format.", time: "Handover" },
      ]}
      faqs={[
        { q: "Are the firewall or network changed immediately?", a: "No. The review starts as an assessment. Changes would be planned, tested, and approved under a separate scope." },
        { q: "Is a specific vendor platform required?", a: "No. The existing environment is the starting point. Product names do not imply blanket delivery capability or certification." },
        { q: "Is ongoing monitoring included?", a: "No. Ongoing monitoring, incident response, support hours, and SLA-like services are outside the initial scope." },
      ]}
      trustNote="Only accessible systems and supplied information are reviewed. The review does not guarantee availability, security, or complete absence of faults."
      finalCtaText="Make access paths and dependencies traceable first."
    />
  );
}
