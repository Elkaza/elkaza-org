"use client";
import { Cpu, Server } from "lucide-react";
import { useLocale } from "../LocaleProvider";

export default function ProjectsClient() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-[var(--bg)] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Left rail title */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("nav_projects")}</h1>
          <p className="mt-2 text-gray-500 italic">{t("projects_tagline") ?? ""}</p>
        </aside>

        {/* Content column */}
        <div className="lg:col-span-9">
          {/* Timeline first */}
          <div>
            <h2 className="text-xl font-semibold mb-2">{t("proj_timeline_h2") ?? "Project Timeline"}</h2>
            <p className="text-dim mb-6">{t("proj_timeline_desc") ?? ""}</p>

            <div className="relative border-l border-[var(--outline)] ml-6 pl-6 pb-12">
              {/* 2025 section */}
              <div className="relative mb-10">
                <div className="absolute -left-3 top-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>2025</h3>
                <p className="text-dim mb-4">{t("proj_2025_desc") ?? ""}</p>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center mb-1">
                      <Cpu className="w-5 h-5 text-blue-500 mr-2" />
                      <h4 className="font-semibold">{t("proj_item_freertos_title") ?? "FreeRTOS IoT Sensor Node (C++)"}</h4>
                    </div>
                    <p className="text-sm text-dim">{t("proj_item_freertos_desc") ?? ""}</p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center mb-1">
                      <Server className="w-5 h-5 text-blue-500 mr-2" />
                      <h4 className="font-semibold">{t("proj_item_infra_title") ?? "Self-Hosted Cloud Infrastructure"}</h4>
                    </div>
                    <p className="text-sm text-dim">{t("proj_item_infra_desc") ?? ""}</p>
                  </div>
                </div>
              </div>

              {/* 2026 section */}
              <div className="relative mb-4">
                <div className="absolute -left-3 top-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>2026</h3>
                <p className="text-dim">{t("proj_2026_desc") ?? ""}</p>
              </div>
            </div>
          </div>

          {/* Current focus */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-2">{t("proj_focus_h2") ?? "Current Focus"}</h2>
            <p className="text-dim mb-4">{t("proj_focus_desc") ?? ""}</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
              <li>{t("proj_focus_b1") ?? "ESP32/FreeRTOS nodes with reliable telemetry"}</li>
              <li>{t("proj_focus_b2") ?? "Self-hosted services: reverse proxy, TLS, monitoring"}</li>
              <li>{t("proj_focus_b3") ?? "Lightweight AI assistants for research and notes"}</li>
            </ul>
          </div>

          {/* Current projects */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-3">{t("proj_current_h2") ?? "Current Projects"}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--outline)] shadow-elev-1">
                <h3 className="font-semibold mb-1">{t("proj_cur_freertos_title") ?? "FreeRTOS Sensor Node"}</h3>
                <p className="text-sm text-dim">{t("proj_cur_freertos_desc") ?? ""}</p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--outline)] shadow-elev-1">
                <h3 className="font-semibold mb-1">{t("proj_cur_infra_title") ?? "Self-Hosted Infra"}</h3>
                <p className="text-sm text-dim">{t("proj_cur_infra_desc") ?? ""}</p>
              </div>
              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--outline)] shadow-elev-1">
                <h3 className="font-semibold mb-1">{t("proj_cur_notes_title") ?? "EA + AI Notes Assistant"}</h3>
                <p className="text-sm text-dim">{t("proj_cur_notes_desc") ?? ""}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
