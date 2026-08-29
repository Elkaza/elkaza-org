import { ShieldCheck } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "IT & Security Baseline Assessment - Elkaza",
  description: "A planned, bounded assessment of access, MFA, backups, updates, dependencies, and IT documentation for SMEs.",
  path: "/en/services/security-baseline",
});

export default function SecurityBaselinePage() {
  return (
    <ServicePageTemplate
      locale="en"
      icon={ShieldCheck}
      title="IT & Security Baseline Assessment"
      promise="A structured current-state review with prioritized findings and a practical roadmap."
      scopeNote="The assessment reviews and documents. Technical changes or implementation of recommendations are not automatically included and would require a separate, explicit scope."
      ctaAction="Discuss the assessment"
      ctaHref="/en/contact"
      timeline="defined by the agreed scope"
      deliverablesCount={5}
      forWhom={[
        "Small businesses without current, connected IT documentation",
        "Growing teams with unclear administrative access",
        "Organizations seeking a structured view of backups, updates, and dependencies",
      ]}
      outcomes={[
        "A traceable current state for the systems reviewed",
        "Prioritized technical and operational gaps",
        "Documented access, dependencies, and assumptions",
        "A practical sequence for possible next steps",
      ]}
      included={[
        "Accounts, administrative roles, and external access paths",
        "MFA and least-privilege fundamentals",
        "Backup and restore readiness based on available evidence",
        "Patch and update practices",
        "Basic network and infrastructure overview",
        "Operational dependencies and documentation gaps",
      ]}
      deliverables={[
        "Current-state summary",
        "Prioritized findings with clear rationale",
        "Practical remediation roadmap",
        "System, access, and dependency documentation",
        "Assumptions, exclusions, and boundary for any later implementation",
      ]}
      tools={[
        "Existing identity and administration interfaces",
        "Available backup, update, and system evidence",
        "Structured interviews and technical documentation",
      ]}
      evidence={{
        href: "https://elkaza.org/projects/enterprise-self-hosted-infrastructure",
        label: "Personal infrastructure project",
        description: "A technical account of personally operated infrastructure. This is not client work or a customer reference.",
      }}
      process={[
        { step: "Capture", desc: "Record systems, access, routines, and available evidence within the agreed boundary.", time: "Assessment" },
        { step: "Prioritize", desc: "Classify gaps and dependencies by practical relevance.", time: "Prioritization" },
        { step: "Document", desc: "Hand over the current state, roadmap, assumptions, and exclusions.", time: "Handover" },
      ]}
      faqs={[
        { q: "Are identified issues fixed immediately?", a: "No. Assessment and implementation are separate scopes. Any implementation would follow its own technical and commercial definition." },
        { q: "Does the assessment guarantee security or recoverability?", a: "No. It evaluates the visible current state and available evidence. It cannot guarantee complete security or a successful recovery." },
        { q: "Is this compliance or legal advice?", a: "No. Technical controls and available evidence may be reviewed; legal interpretation, certification, and compliance assurance are excluded." },
      ]}
      trustNote="The scope, available evidence, and technical limitations are documented transparently. Findings apply only to the systems reviewed and the agreed point in time."
      finalCtaText="Understand the current state before deciding what to change."
    />
  );
}
