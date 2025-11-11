"use client";
import Image from "next/image";
import { useLocale } from "../LocaleProvider";

export default function AboutPage() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("nav_about")}</h1>
          <p className="mt-2 text-gray-500 italic">{t("about_tagline") ?? ""}</p>
        </aside>

        <div className="lg:col-span-9">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{t("about_lead") ?? ""}</p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image src="/globe.svg" alt="Elkaza graphic" width={400} height={400} className="rounded-2xl shadow-md object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">{t("about_profile_h2") ?? "Professional Profile"}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{t("about_p1") ?? ""}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{t("about_p2") ?? ""}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t("about_p3") ?? ""}</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">{t("about_comp_h2") ?? "Core Competencies"}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("comp_ea_title") ?? "Enterprise Architecture"}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t("comp_ea_list") ?? "ArchiMate • ADOIT • Sparx EA • BPMN 2.0"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("comp_sw_title") ?? "Software & Systems"}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t("comp_sw_list") ?? "Python • Java • TypeScript • Git • ServiceNow • XML/XSLT"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("comp_pm_title") ?? "Project Management"}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t("comp_pm_list") ?? "IPMA Level D • Agile • ITIL • ADKAR • Change Management"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("comp_net_title") ?? "Networking & Security"}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t("comp_net_list") ?? "Cisco • MikroTik • VPN • ISO 27001 • OWASP Top 10"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("comp_cloud_title") ?? "Cloud & Infrastructure"}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t("comp_cloud_list") ?? "AWS • Azure • VirtualBox • VMware"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("comp_lang_title") ?? "Languages"}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t("comp_lang_list") ?? "Arabic (Native) • English (C1) • German (B2)"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

