import Image from "next/image";

type OrganizationKind =
  | "boc"
  | "cyberu"
  | "fhTechnikum"
  | "generic"
  | "hico"
  | "ipma"
  | "linkedin"
  | "rbi"
  | "tuWien"
  | "uniBenghazi"
  | "uniGraz";

type OrganizationMark = {
  label: string;
  initials: string;
  kind: OrganizationKind;
  assetSrc?: string;
  wide?: boolean;
};

const organizationMarks: Record<string, OrganizationMark> = {
  "boc group": { label: "BOC Group", initials: "BOC", kind: "boc" },
  cyberu: { label: "CyberU", initials: "CU", kind: "cyberu" },
  "fh technikum wien": {
    label: "FH Technikum Wien",
    initials: "FHTW",
    kind: "fhTechnikum",
    assetSrc: "/organization-logos/fh-technikum-wien.svg",
    wide: true,
  },
  "hico-ics": {
    label: "HiCo-ICS",
    initials: "HiCo",
    kind: "hico",
    assetSrc: "/organization-logos/hico.png",
    wide: true,
  },
  ipma: { label: "IPMA", initials: "IPMA", kind: "ipma" },
  "linkedin learning": {
    label: "LinkedIn Learning",
    initials: "in",
    kind: "linkedin",
    assetSrc: "/organization-logos/linkedin.svg",
  },
  "pma / ipma": { label: "pma / IPMA", initials: "IPMA", kind: "ipma" },
  "raiffeisen bank international": {
    label: "Raiffeisen Bank International",
    initials: "RBI",
    kind: "rbi",
    assetSrc: "/organization-logos/rbi.svg",
    wide: true,
  },
  "tu wien": {
    label: "TU Wien",
    initials: "TU",
    kind: "tuWien",
    assetSrc: "/organization-logos/tu-wien.png",
  },
  "university of benghazi": {
    label: "University of Benghazi",
    initials: "UoB",
    kind: "uniBenghazi",
    assetSrc: "/organization-logos/university-of-benghazi.png",
    wide: true,
  },
  "university of graz": {
    label: "University of Graz",
    initials: "UNI",
    kind: "uniGraz",
    assetSrc: "/organization-logos/uni-graz.svg",
  },
};

const frameClasses: Record<OrganizationKind, string> = {
  boc: "border-[#d7dee8] bg-white text-[#183153]",
  cyberu: "border-[#d7e0ff] bg-white text-[#4259d6]",
  fhTechnikum: "border-[#bfd9ee] bg-white text-[#006eb6]",
  generic: "border-subtle bg-white text-main",
  hico: "border-[#bde3dc] bg-white text-[#0f766e]",
  ipma: "border-[#b9c9e7] bg-white text-[#1f4d8f]",
  linkedin: "border-[#0a66c2] bg-[#0a66c2] text-white",
  rbi: "border-[#f2d400] bg-[#ffe500] text-black",
  tuWien: "border-[#f0c3c3] bg-white text-[#c8102e]",
  uniBenghazi: "border-[#b9c5d8] bg-white text-[#1d3762]",
  uniGraz: "border-[#e6c64a] bg-white text-black",
};

const squareSizeClasses = {
  sm: "h-9 w-9 rounded-lg",
  md: "h-11 w-11 rounded-xl",
  lg: "h-12 w-12 rounded-xl",
};

const wideSizeClasses = {
  sm: "h-10 w-24 rounded-lg",
  md: "h-11 w-28 rounded-xl",
  lg: "h-12 w-32 rounded-xl",
};

const sizeTextClasses = {
  sm: "text-[9px]",
  md: "text-[10px]",
  lg: "text-[11px]",
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
    kind: "generic",
  };
}

function LogoAsset({ mark, size }: { mark: OrganizationMark; size: keyof typeof squareSizeClasses }) {
  if (!mark.assetSrc) return null;

  return (
    <Image
      src={mark.assetSrc}
      alt=""
      width={mark.wide ? 96 : 44}
      height={44}
      aria-hidden="true"
      className={[
        "object-contain",
        mark.wide ? "h-[82%] w-[92%]" : "h-[72%] w-[72%]",
        size === "sm" && mark.wide ? "h-[78%] w-[90%]" : "",
      ].join(" ")}
    />
  );
}

function BrandMark({ mark, size }: { mark: OrganizationMark; size: keyof typeof squareSizeClasses }) {
  if (mark.assetSrc) return <LogoAsset mark={mark} size={size} />;

  switch (mark.kind) {
    case "ipma":
      return (
        <svg aria-hidden="true" className="h-[86%] w-[86%]" viewBox="0 0 96 96">
          <text fill="#111111" fontFamily="Arial, Helvetica, sans-serif" fontSize="25" fontWeight="300" letterSpacing="5" x="4" y="26">
            IPMA
          </text>
          <path d="m75 8 7 7-7 7" fill="none" stroke="#ff2636" strokeLinecap="square" strokeWidth="4" />
          <path d="m84 8 7 7-7 7" fill="none" stroke="#ff2636" strokeLinecap="square" strokeWidth="4" />
          <circle cx="91" cy="27" fill="none" r="3.5" stroke="#111111" strokeWidth="1" />
          <text fill="#111111" fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontWeight="700" x="6" y="50">
            international
          </text>
          <text fill="#111111" fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontWeight="700" x="6" y="66">
            project
          </text>
          <text fill="#111111" fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontWeight="700" x="6" y="82">
            management
          </text>
          <text fill="#111111" fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontWeight="700" x="6" y="95">
            association
          </text>
        </svg>
      );
    case "uniGraz":
      return (
        <span className="grid leading-none text-center">
          <span className={`${size === "sm" ? "text-[8px]" : "text-[9px]"} font-black tracking-tight text-black`}>
            UNI
          </span>
          <span className={`${size === "sm" ? "text-[7px]" : "text-[8px]"} font-black tracking-tight text-[#b38a00]`}>
            GRAZ
          </span>
        </span>
      );
    case "linkedin":
      return <span className={`${size === "sm" ? "text-base" : "text-lg"} font-black tracking-tight`}>in</span>;
    case "fhTechnikum":
      return (
        <span className="grid leading-none text-center">
          <span className={`${size === "sm" ? "text-[7px]" : "text-[8px]"} font-black tracking-tight`}>FH</span>
          <span className={`${size === "sm" ? "text-[6px]" : "text-[7px]"} font-bold tracking-tight text-[#009fe3]`}>TECH</span>
        </span>
      );
    case "tuWien":
      return (
        <span className="grid leading-none text-center">
          <span className={`${size === "sm" ? "text-[11px]" : "text-xs"} font-black tracking-tight text-[#c8102e]`}>TU</span>
          <span className={`${size === "sm" ? "text-[6px]" : "text-[7px]"} font-bold tracking-tight text-slate-700`}>
            WIEN
          </span>
        </span>
      );
    case "rbi":
      return <span className={`${sizeTextClasses[size]} font-black tracking-tight`}>RBI</span>;
    case "boc":
      return (
        <svg aria-hidden="true" className="h-[82%] w-[82%]" viewBox="0 0 64 64">
          <text
            fill="#d0101f"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="52"
            fontWeight="700"
            letterSpacing="-6"
            x="2"
            y="53"
          >
            B
          </text>
          <path d="M35 7 46 26H24Z" fill="#35148f" />
          <circle cx="35" cy="36" fill="#d0101f" r="9" />
          <path d="M25 46H45V59H25Z" fill="#35148f" />
          <text
            fill="#d0101f"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="52"
            fontWeight="700"
            letterSpacing="-6"
            x="42"
            y="53"
          >
            C
          </text>
        </svg>
      );
    case "hico":
      return <span className={`${sizeTextClasses[size]} font-black tracking-tight`}>HiCo</span>;
    case "uniBenghazi":
      return (
        <span className="grid leading-none text-center">
          <span className={`${sizeTextClasses[size]} font-black tracking-tight`}>UoB</span>
          <span className="mx-auto mt-0.5 h-0.5 w-4 rounded-full bg-[#c9a24d]" aria-hidden="true" />
        </span>
      );
    case "cyberu":
      return <span className={`${sizeTextClasses[size]} font-black tracking-tight`}>CU</span>;
    case "generic":
    default:
      return <span className={`${sizeTextClasses[size]} font-black tracking-tight`}>{mark.initials}</span>;
  }
}

export function OrganizationLogo({
  name,
  size = "md",
  className = "",
  decorative = true,
}: {
  name: string;
  size?: keyof typeof squareSizeClasses;
  className?: string;
  decorative?: boolean;
}) {
  const mark = findOrganizationMark(name);
  const frameSize = mark.wide ? wideSizeClasses[size] : squareSizeClasses[size];
  const frameColor = mark.assetSrc ? "border-subtle bg-white text-main" : frameClasses[mark.kind];

  return (
    <span
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `${mark.label} logo`}
      className={[
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border font-bold leading-none shadow-sm print:border-subtle print:bg-white print:text-main print:shadow-none",
        frameSize,
        frameColor,
        className,
      ].join(" ")}
      role={decorative ? undefined : "img"}
      title={decorative ? undefined : mark.label}
    >
      <BrandMark mark={mark} size={size} />
    </span>
  );
}
