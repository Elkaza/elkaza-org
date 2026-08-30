import type { Locale } from "@/app/i18n/messages";
import { getProjectStatusLabel } from "@/app/lib/projectDisplay";
import type { ProjectStatus } from "@/app/lib/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  live: "border-emerald-700/30 bg-emerald-50 text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200",
  implemented: "border-emerald-700/30 bg-emerald-50 text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200",
  "demonstrated-prototype": "border-sky-700/30 bg-sky-50 text-sky-950 dark:border-sky-400/40 dark:bg-sky-950/30 dark:text-sky-100",
  "academic-prototype": "border-violet-700/30 bg-violet-50 text-violet-950 dark:border-violet-400/40 dark:bg-violet-950/30 dark:text-violet-100",
  "in-progress": "border-blue-700/30 bg-blue-50 text-blue-900 dark:border-blue-400/40 dark:bg-blue-950/30 dark:text-blue-200",
  planned: "border-amber-700/30 bg-amber-50 text-amber-950 dark:border-amber-400/40 dark:bg-amber-950/20 dark:text-amber-100",
};

export function ProjectStatusBadge({
  status,
  locale,
  size = "sm",
  className = "",
}: {
  status: ProjectStatus;
  locale: Locale;
  size?: "xs" | "sm";
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex max-w-full items-center rounded-full border font-semibold leading-tight",
        size === "xs" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1 text-xs",
        STATUS_STYLES[status],
        className,
      ].join(" ")}
    >
      {getProjectStatusLabel(status, locale)}
    </span>
  );
}
