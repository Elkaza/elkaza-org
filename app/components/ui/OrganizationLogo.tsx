type OrganizationTone = "amber" | "blue" | "cyan" | "green" | "red" | "slate" | "yellow";

type OrganizationMark = {
  label: string;
  initials: string;
  tone: OrganizationTone;
};

const organizationMarks: Record<string, OrganizationMark> = {
  "boc group": { label: "BOC Group", initials: "BOC", tone: "blue" },
  cyberu: { label: "CyberU", initials: "CU", tone: "cyan" },
  "fh technikum wien": { label: "FH Technikum Wien", initials: "FHTW", tone: "blue" },
  "hico-ics": { label: "HiCo-ICS", initials: "HiCo", tone: "green" },
  ipma: { label: "IPMA", initials: "IPMA", tone: "amber" },
  "linkedin learning": { label: "LinkedIn Learning", initials: "in", tone: "blue" },
  "microsoft excel": { label: "Microsoft Excel", initials: "X", tone: "green" },
  "pma / ipma": { label: "pma / IPMA", initials: "IPMA", tone: "amber" },
  "raiffeisen bank international": { label: "Raiffeisen Bank International", initials: "RBI", tone: "yellow" },
  "tu wien": { label: "TU Wien", initials: "TU", tone: "red" },
  "university of benghazi": { label: "University of Benghazi", initials: "UoB", tone: "slate" },
  "university of graz": { label: "University of Graz", initials: "UG", tone: "green" },
};

const toneClasses: Record<OrganizationTone, string> = {
  amber:
    "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900/70 dark:bg-amber-950/30 dark:text-amber-200",
  blue:
    "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/30 dark:text-blue-200",
  cyan:
    "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-900/70 dark:bg-cyan-950/30 dark:text-cyan-200",
  green:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-200",
  red:
    "border-red-200 bg-red-50 text-red-700 dark:border-red-900/70 dark:bg-red-950/30 dark:text-red-200",
  slate:
    "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200",
  yellow:
    "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-900/70 dark:bg-yellow-950/30 dark:text-yellow-200",
};

const sizeClasses = {
  sm: "h-9 w-9 rounded-lg text-[10px]",
  md: "h-11 w-11 rounded-xl text-xs",
  lg: "h-12 w-12 rounded-xl text-xs",
};

function normalizeOrganizationName(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

function findOrganizationMark(name: string): OrganizationMark {
  const normalized = normalizeOrganizationName(name);

  if (organizationMarks[normalized]) return organizationMarks[normalized];
  if (normalized.includes("technikum")) return organizationMarks["fh technikum wien"];
  if (normalized.includes("tu wien")) return organizationMarks["tu wien"];
  if (normalized.includes("benghazi")) return organizationMarks["university of benghazi"];
  if (normalized.includes("hico")) return organizationMarks["hico-ics"];
  if (normalized.includes("raiffeisen")) return organizationMarks["raiffeisen bank international"];
  if (normalized.includes("boc")) return organizationMarks["boc group"];
  if (normalized.includes("ipma") || normalized.includes("project management austria")) return organizationMarks.ipma;
  if (normalized.includes("graz") || normalized.includes("uni for life")) return organizationMarks["university of graz"];
  if (normalized.includes("linkedin")) return organizationMarks["linkedin learning"];
  if (normalized.includes("excel") || normalized.includes("microsoft")) return organizationMarks["microsoft excel"];
  if (normalized.includes("cyberu")) return organizationMarks.cyberu;

  const initials = name
    .split(/\s+/u)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return {
    label: name,
    initials: initials || "?",
    tone: "slate",
  };
}

export function OrganizationLogo({
  name,
  size = "md",
  className = "",
  decorative = true,
}: {
  name: string;
  size?: keyof typeof sizeClasses;
  className?: string;
  decorative?: boolean;
}) {
  const mark = findOrganizationMark(name);

  return (
    <span
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `${mark.label} mark`}
      className={[
        "inline-flex shrink-0 items-center justify-center border font-bold leading-none tracking-normal shadow-sm print:border-subtle print:bg-white print:text-main print:shadow-none",
        sizeClasses[size],
        toneClasses[mark.tone],
        className,
      ].join(" ")}
      role={decorative ? undefined : "img"}
      title={decorative ? undefined : mark.label}
    >
      <span aria-hidden="true">{mark.initials}</span>
    </span>
  );
}
