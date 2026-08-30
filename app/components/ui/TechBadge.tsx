import {
  BarChart3,
  Code2,
  Cpu,
  Database,
  FileCode2,
  HardDrive,
  Network,
  Shield,
  Terminal,
  Wrench,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siAnsible,
  siArduino,
  siBluetooth,
  siC,
  siClickhouse,
  siConfluence,
  siCplusplus,
  siCss,
  siDebian,
  siDocker,
  siEspressif,
  siGit,
  siGithub,
  siGithubactions,
  siGrafana,
  siGnubash,
  siHtml5,
  siInfluxdb,
  siJavascript,
  siJira,
  siJson,
  siLinux,
  siMqtt,
  siMysql,
  siNetdata,
  siNextdotjs,
  siNginx,
  siNginxproxymanager,
  siNodered,
  siPihole,
  siPlausibleanalytics,
  siPortainer,
  siPodman,
  siPostgresql,
  siProxmox,
  siPython,
  siRaspberrypi,
  siReact,
  siScikitlearn,
  siSqlite,
  siTailscale,
  siTailwindcss,
  siTypescript,
  siUltralytics,
  siUbuntu,
  siUptimekuma,
  siVercel,
  siWatchtower,
  siWireshark,
  siXml,
  siYolo,
} from "simple-icons";

const brandIcons: Record<string, SimpleIcon> = {
  ansible: siAnsible,
  arduino: siArduino,
  ble: siBluetooth,
  bluetooth: siBluetooth,
  "bluetooth low energy": siBluetooth,
  c: siC,
  "c++": siCplusplus,
  clickhouse: siClickhouse,
  confluence: siConfluence,
  css: siCss,
  debian: siDebian,
  docker: siDocker,
  "docker compose": siDocker,
  esp32: siEspressif,
  espressif: siEspressif,
  git: siGit,
  github: siGithub,
  "github actions": siGithubactions,
  grafana: siGrafana,
  bash: siGnubash,
  "gnu bash": siGnubash,
  html: siHtml5,
  html5: siHtml5,
  influxdb: siInfluxdb,
  javascript: siJavascript,
  jira: siJira,
  json: siJson,
  linux: siLinux,
  mqtt: siMqtt,
  mysql: siMysql,
  netdata: siNetdata,
  "next.js": siNextdotjs,
  nextjs: siNextdotjs,
  nginx: siNginx,
  "nginx proxy manager": siNginxproxymanager,
  "node-red": siNodered,
  nodered: siNodered,
  "pi-hole": siPihole,
  pihole: siPihole,
  plausible: siPlausibleanalytics,
  "plausible analytics": siPlausibleanalytics,
  portainer: siPortainer,
  podman: siPodman,
  "podman compose": siPodman,
  postgresql: siPostgresql,
  postgres: siPostgresql,
  proxmox: siProxmox,
  "proxmox ve": siProxmox,
  python: siPython,
  "raspberry pi": siRaspberrypi,
  "raspberry pi 5": siRaspberrypi,
  react: siReact,
  "scikit-learn": siScikitlearn,
  sklearn: siScikitlearn,
  sqlite: siSqlite,
  tailscale: siTailscale,
  "tailwind css": siTailwindcss,
  tailwind: siTailwindcss,
  typescript: siTypescript,
  ultralytics: siUltralytics,
  ubuntu: siUbuntu,
  "uptime kuma": siUptimekuma,
  vercel: siVercel,
  watchtower: siWatchtower,
  wireshark: siWireshark,
  xml: siXml,
  xslt: siXml,
  "xml/xslt": siXml,
  yolo: siYolo,
  yolov8: siYolo,
};

function normalizeTechName(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\.js$/u, ".js");
}

function findBrandIcon(name: string) {
  const normalized = normalizeTechName(name);
  if (brandIcons[normalized]) return brandIcons[normalized];

  if (normalized.includes("typescript")) return siTypescript;
  if (normalized.includes("javascript")) return siJavascript;
  if (normalized.includes("python")) return siPython;
  if (normalized.includes("ansible")) return siAnsible;
  if (normalized.includes("docker")) return siDocker;
  if (normalized.includes("podman")) return siPodman;
  if (normalized.includes("github actions")) return siGithubactions;
  if (normalized.includes("github")) return siGithub;
  if (normalized.includes("next")) return siNextdotjs;
  if (normalized.includes("tailwind")) return siTailwindcss;
  if (normalized.includes("raspberry pi")) return siRaspberrypi;
  if (normalized.includes("bluetooth") || normalized === "ble") return siBluetooth;
  if (normalized.includes("arduino")) return siArduino;
  if (normalized.includes("esp32")) return siEspressif;
  if (normalized.includes("proxmox")) return siProxmox;
  if (normalized.includes("postgres")) return siPostgresql;
  if (normalized.includes("influxdb")) return siInfluxdb;
  if (normalized.includes("grafana")) return siGrafana;
  if (normalized.includes("mqtt")) return siMqtt;
  if (normalized.includes("clickhouse")) return siClickhouse;
  if (normalized.includes("plausible")) return siPlausibleanalytics;
  if (normalized.includes("nginx proxy manager")) return siNginxproxymanager;
  if (normalized.includes("nginx")) return siNginx;
  if (normalized.includes("scikit")) return siScikitlearn;
  if (normalized.includes("yolo")) return siYolo;

  return null;
}

type FallbackIconKind =
  | "analytics"
  | "code"
  | "cpu"
  | "database"
  | "file-code"
  | "hard-drive"
  | "network"
  | "shield"
  | "terminal"
  | "wrench";

function getFallbackIconKind(name: string): FallbackIconKind {
  const normalized = normalizeTechName(name);

  if (/(sql|database|data|analytics|dashboard|power bi|oracle)/u.test(normalized)) return "database";
  if (/(iot|edge|embedded|sensor|lidar|imu|ble|mqtt|rtos|freertos|hailo)/u.test(normalized)) return "cpu";
  if (/(network|vpn|vlan|dns|dhcp|tailscale|wireguard|reverse tunneling)/u.test(normalized)) return "network";
  if (/(security|ufw|firewall|nmap|crowdsec|zero trust|owasp)/u.test(normalized)) return "shield";
  if (/(linux|server|windows|proxmox|infrastructure|hybrid cloud)/u.test(normalized)) return "hard-drive";
  if (/(automation|workflow|ci\/cd|runbook|documentation|troubleshooting|incident|itsm)/u.test(normalized)) {
    return "wrench";
  }
  if (/(bash|powershell|terminal|shell)/u.test(normalized)) return "terminal";
  if (/(html|xml|xslt|json|code|typescript|javascript)/u.test(normalized)) return "file-code";
  if (/(monitoring|observability|netdata|uptime)/u.test(normalized)) return "analytics";

  return "code";
}

function FallbackLogo({
  kind,
  className,
  decorative,
}: {
  kind: FallbackIconKind;
  className: string;
  decorative: boolean;
}) {
  const props = { "aria-hidden": decorative || undefined, className };

  switch (kind) {
    case "analytics":
      return <BarChart3 {...props} />;
    case "cpu":
      return <Cpu {...props} />;
    case "database":
      return <Database {...props} />;
    case "file-code":
      return <FileCode2 {...props} />;
    case "hard-drive":
      return <HardDrive {...props} />;
    case "network":
      return <Network {...props} />;
    case "shield":
      return <Shield {...props} />;
    case "terminal":
      return <Terminal {...props} />;
    case "wrench":
      return <Wrench {...props} />;
    case "code":
    default:
      return <Code2 {...props} />;
  }
}

export function TechLogo({
  name,
  className = "h-3.5 w-3.5",
  decorative = true,
  monochrome = false,
}: {
  name: string;
  className?: string;
  decorative?: boolean;
  monochrome?: boolean;
}) {
  const icon = findBrandIcon(name);

  if (icon) {
    return (
      <svg
        aria-hidden={decorative || undefined}
        aria-label={decorative ? undefined : `${icon.title} logo`}
        className={className}
        fill={monochrome ? "currentColor" : `#${icon.hex}`}
        role={decorative ? undefined : "img"}
        viewBox="0 0 24 24"
      >
        {!decorative && <title>{icon.title}</title>}
        <path d={icon.path} />
      </svg>
    );
  }

  return <FallbackLogo kind={getFallbackIconKind(name)} className={className} decorative={decorative} />;
}

export function TechBadge({
  name,
  className = "",
  iconClassName = "h-4 w-4",
  variant = "auto",
}: {
  name: string;
  className?: string;
  iconClassName?: string;
  variant?: "auto" | "brand" | "concept";
}) {
  const showBrandIcon = variant !== "concept" && Boolean(findBrandIcon(name));

  return (
    <span
      className={[
        "inline-flex max-w-full items-center gap-1.5 rounded-md border border-subtle bg-page px-2.5 py-1 text-xs font-medium text-main",
        className,
      ].join(" ")}
    >
      {showBrandIcon && (
        <TechLogo
          name={name}
          className={`${iconClassName} shrink-0 text-blue-700 dark:text-blue-300`}
          monochrome
        />
      )}
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}
