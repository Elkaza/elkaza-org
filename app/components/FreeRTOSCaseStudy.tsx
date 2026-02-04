"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Radio, Activity, Layers, PlayCircle, Github, ExternalLink, CheckCircle } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";

const content = {
    en: {
        title: "FreeRTOS IoT Sensor Node",
        subtitle: "ESP32-S3 node reading environmental data with separate RTOS tasks.",
        overview: "A C++ based firmware architecture exploiting FreeRTOS capabilities to manage sensor timing, user input, and telemetry concurrently without blocking execution. Built for the ESP32-S3 platform.",
        archTitle: "Firmware Architecture",
        archIntro: "The system is divided into prioritized tasks interacting via Queues and Event Groups:",
        archBullets: [
            "Task Scheduling: High-priority 'SensorTask' for precise DHT22 timing, detached from networking.",
            "ISR & Queues: Button presses trigger interrupts (ISRs) that send messages to the 'InputTask' queue, eliminating polling.",
            "Task Communication: 'TelemetryTask' consumes data from the sensor queue and buffers it for MQTT publication (with exponential backoff)."
        ],
        relTitle: "Reliability & Performance",
        relNote: "Uptime > 99.9% in local endurance tests (7 days continuous operation).",
        techTitle: "Tech Stack",
        linksTitle: "Links",
        repoLabel: "View Source Code (GitHub)",
        repoUrl: "#" // Placeholder as requested
    },
    de: {
        title: "FreeRTOS IoT Sensorknoten",
        subtitle: "ESP32-S3 Knoten liest Umweltdaten mit separaten RTOS-Tasks.",
        overview: "Eine C++ basierte Firmware-Architektur, die FreeRTOS nutzt, um Sensor-Timing, Benutzereingaben und Telemetrie gleichzeitig zu verarbeiten, ohne die Ausführung zu blockieren. Entwickelt für die ESP32-S3 Plattform.",
        archTitle: "Firmware Architektur",
        archIntro: "Das System ist in priorisierte Tasks unterteilt, die über Queues und Event Groups interagieren:",
        archBullets: [
            "Task Scheduling: Hochpriorisierter 'SensorTask' für präzises DHT22-Timing, entkoppelt vom Netzwerk.",
            "ISR & Queues: Tastendrücke lösen Interrupts (ISRs) aus, die Nachrichten an die 'InputTask'-Queue senden (kein Polling).",
            "Task Communication: 'TelemetryTask' konsumiert Daten aus der Sensor-Queue und puffert sie für MQTT-Versand (mit Exponential Backoff)."
        ],
        relTitle: "Zuverlässigkeit & Performance",
        relNote: "Uptime > 99,9% in lokalen Dauertests (7 Tage Dauerbetrieb).",
        techTitle: "Tech Stack",
        linksTitle: "Links",
        repoLabel: "Quellcode ansehen (GitHub)",
        repoUrl: "#"
    },
    ar: {
        title: "عقدة استشعار IoT FreeRTOS",
        subtitle: "عقدة ESP32-S3 تقرأ البيانات البيئية بمهام RTOS منفصلة.",
        overview: "بنية البرامج الثابتة القائمة على C++ التي تستخدم ميزات FreeRTOS لإدارة توقيت المستشعر ومدخلات المستخدم والقياس عن بعد بشكل متزامن.",
        archTitle: "بنية البرامج الثابتة",
        archIntro: "ينقسم النظام إلى مهام ذات أولوية تتفاعل عبر قوائم الانتظار:",
        archBullets: [
            "جدولة المهام: 'SensorTask' ذات أولوية عالية لتوقيت دقيق.",
            "ISR وقوائم الانتظار: ضغطات الأزرار تؤدي إلى مقاطعات.",
            "اتصال المهام: تستهلك 'TelemetryTask' البيانات للنشر عبر MQTT."
        ],
        relTitle: "الموثوقية والأداء",
        relNote: "وقت التشغيل > 99.9% في الاختبارات المحلية.",
        techTitle: "التقنيات",
        linksTitle: "روابط",
        repoLabel: "عرض الكود (GitHub)",
        repoUrl: "#"
    }
};

export default function FreeRTOSCaseStudy() {
    const { locale, t } = useLocale();
    const c = content[locale] || content.en;

    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300 py-12 px-6">
            <article className="max-w-3xl mx-auto space-y-10">
                {/* Navigation */}
                <Link
                    href="/projects"
                    className="inline-flex items-center text-muted hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("nav_projects")}
                </Link>

                {/* Header */}
                <header className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted">
                        <Cpu className="w-4 h-4" />
                        <span>2025 • Embedded Systems / IoT</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-main">
                        {c.title}
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        {c.subtitle}
                    </p>
                </header>

                {/* Overview */}
                <section className="bg-card border border-subtle rounded-xl p-6">
                    <p className="text-main leading-relaxed">{c.overview}</p>
                </section>

                {/* Architecture */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        {c.archTitle}
                    </h2>
                    <p className="text-main mb-2">{c.archIntro}</p>
                    <div className="bg-card border border-subtle rounded-lg p-6">
                        <ul className="space-y-3">
                            {c.archBullets.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-main">
                                    <PlayCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Reliability */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Activity className="w-5 h-5" />
                        {c.relTitle}
                    </h2>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-sm md:text-base text-main font-medium">{c.relNote}</span>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">{c.techTitle}</h2>
                    <p className="text-main font-mono text-sm">
                        C++ · FreeRTOS · ESP32-S3 · MQTT · CMake · BLE
                    </p>
                </section>

                {/* Links */}
                <section className="border-t border-subtle pt-8">
                    <h2 className="text-xl font-semibold mb-4">{c.linksTitle}</h2>
                    <a href={c.repoUrl} className="inline-flex items-center px-4 py-2 bg-main text-page rounded-md font-medium hover:opacity-90 transition-opacity">
                        <Github className="w-4 h-4 mr-2" />
                        {c.repoLabel}
                    </a>
                </section>

            </article>
        </main>
    );
}
