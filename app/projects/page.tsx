// app/projects/page.tsx
import { Cpu, Server, Calendar } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Project Timeline</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A focused overview of ongoing and future technical projects in IoT systems, cloud infrastructure, and digital innovation.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 py-20 relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-100"></div>

        {/* 2025 */}
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-8 text-right md:text-left">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">2025</h2>
            <p className="text-gray-600 mb-8">
              A year of practical integration between embedded systems, self-hosted cloud infrastructure, and digital ecosystems.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-8 space-y-8">
            {/* IoT Project */}
            <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <Cpu className="text-blue-600 w-6 h-6 mb-3" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                FreeRTOS IoT Sensor Node (C++)
              </h3>
              <p className="text-gray-700 mb-2">
                Developed a FreeRTOS-based IoT system using an ESP32-S3 microcontroller.
                The node performs concurrent DHT22 temperature and humidity readings via
                multiple RTOS tasks, demonstrating efficient multitasking and queue management.
              </p>
              <p className="text-sm text-gray-500">
                Tools: C++, FreeRTOS, PlatformIO, BLE Communication, ESP32-S3
              </p>
            </div>

            {/* Self-Hosting Project */}
            <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <Server className="text-blue-600 w-6 h-6 mb-3" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Self-Hosted Cloud Infrastructure – Elkaza Domains
              </h3>
              <p className="text-gray-700 mb-2">
                Configured and deployed self-managed cloud services for <strong>elkaza.org</strong> and <strong>elkaza.at</strong>.
                The system runs on a 6 vCPU, 4 GB RAM Ubuntu VPS with Dockerized Next.js apps, Gemini AI integration,
                Nginx reverse proxy, and automated SSL management with Certbot.
              </p>
              <p className="text-sm text-gray-500">
                Platform: Ubuntu 22.04 · 6 vCPUs · 4 GB RAM · KVM VPS · Docker · Nginx
              </p>
            </div>
          </div>
        </div>

        {/* 2026 */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-8 text-right md:text-left">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">2026</h2>
            <p className="text-gray-600 mb-8">
              Future projects in development — focusing on AI-integrated systems,
              cybersecurity frameworks, and enterprise architecture automation.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="relative bg-gray-50 border border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-400 italic">
              <Calendar className="mx-auto mb-3 text-blue-400 w-6 h-6" />
              Upcoming project to be announced...
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
