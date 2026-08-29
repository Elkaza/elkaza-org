import { Workflow } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Automation & Documentation Sprint - Elkaza",
  description: "A planned sprint for small recurring IT workflows using Ansible, Linux, Docker, Python, Bash, and traceable documentation.",
  path: "/en/services/automation",
});

export default function AutomationPage() {
  return (
    <ServicePageTemplate
      locale="en"
      icon={Workflow}
      title="Automation & Documentation Sprint"
      promise="Document, simplify, and where appropriate make one bounded operational workflow repeatable."
      scopeNote="The sprint focuses on one small, bounded workflow. Enterprise platform engineering, Kubernetes operations, and broad infrastructure transformations are outside the initial scope."
      ctaAction="Discuss the sprint"
      ctaHref="/en/contact"
      timeline="defined by the selected workflow"
      deliverablesCount={5}
      forWhom={[
        "Small teams with recurring manual IT tasks",
        "Linux or Docker environments with person-dependent routines",
        "Organizations seeking traceable configuration and operational knowledge",
      ]}
      outcomes={[
        "Documented starting process and clear boundary",
        "Repeatable workflow with verifiable steps",
        "Traceable configuration and error handling",
        "Runbook for operation, handover, and manual fallback",
      ]}
      included={[
        "Selection of one clearly bounded recurring workflow",
        "Ansible for suitable configuration tasks",
        "Linux and Docker workflows where they already fit the environment",
        "Small automations using Python or Bash",
        "SQL for focused data queries where relevant",
        "Configuration, process, and handover documentation",
      ]}
      deliverables={[
        "Documented starting and target process",
        "Versioned playbooks or scripts",
        "Configuration and dependency overview",
        "Runbook with checks and fallback path",
        "Assumptions, limits, and open next steps",
      ]}
      tools={["Ansible", "Linux", "Docker", "Python", "Bash", "SQL where relevant"]}
      evidence={{
        href: "https://elkaza.org/projects/enterprise-self-hosted-infrastructure",
        label: "Technical project report",
        description: "A personal infrastructure project involving Linux, containers, and automation. This is not client work or a customer reference.",
      }}
      process={[
        { step: "Bound", desc: "Define one suitable workflow, its interfaces, and a manual fallback path.", time: "Scope" },
        { step: "Build", desc: "Develop a small, testable automation and verify it in a controlled environment.", time: "Build & test" },
        { step: "Hand over", desc: "Document code, configuration, runbook, limits, and maintenance notes.", time: "Handover" },
      ]}
      faqs={[
        { q: "Is this a complete platform modernization?", a: "No. The intended initial scope is a small sprint around one clearly bounded workflow." },
        { q: "Are Terraform or Kubernetes part of the offer?", a: "Not in the primary initial scope. The focus is on evidenced, small automations using Ansible, Linux, Docker, and scripting." },
        { q: "What happens if the automation fails?", a: "Checks, logging, and a documented manual fallback are part of the technical boundary. Error-free operation cannot be guaranteed." },
      ]}
      trustNote="Automation is considered only within the agreed boundary and with documented permissions. Credentials do not belong in scripts or repositories."
      finalCtaText="Make one small workflow traceable and repeatable."
    />
  );
}
