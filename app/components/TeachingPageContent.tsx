"use client";
import Link from "next/link";
import { Network, Users, Cpu, GraduationCap, ExternalLink } from "lucide-react";
import { useLocale } from "../LocaleProvider";


export default function TeachingPageContent() {
    const { t } = useLocale();
    return (
        <main className="min-h-screen bg-page text-main transition-colors duration-300">
            <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
                <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
                    <div className="w-20 h-1.5 bg-blue-600 mb-3" />
                    <h1 className="text-3xl font-bold">{t("nav_teaching")}</h1>
                    <p className="mt-2 text-muted italic">{t("teach_tagline")}</p>
                </aside>

                <div className="lg:col-span-9">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Course 1 - DigiTrans & EA */}
                        <div className="group bg-card border border-subtle rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                            <Network className="text-blue-600 mb-3 w-8 h-8" />
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("teach_c1_title")}</h3>
                            <p className="text-main mb-4">
                                {t("teach_c1_desc")}
                            </p>
                            <Link href="/contact" className="text-blue-700 font-medium hover:underline">
                                {t("teach_c1_link")}
                            </Link>
                        </div>

                        {/* Course 2 - PM */}
                        <div className="group bg-card border border-subtle rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                            <Users className="text-blue-600 mb-3 w-8 h-8" />
                            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("teach_c2_title")}</h3>
                            <p className="text-main mb-4">
                                {t("teach_c2_desc")}
                            </p>
                            <Link href="https://www.ipma.world/" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1.5">
                                {t("teach_c2_link")} <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* Course 3 - IoT */}
                        <div className="group bg-card border border-subtle rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                            <Cpu className="text-blue-600 mb-3 w-8 h-8" />
                            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("teach_c3_title")}</h3>
                            <p className="text-main mb-4">
                                {t("teach_c3_desc")}
                            </p>
                            <Link href="/contact" className="text-blue-700 dark:text-blue-400 font-medium hover:underline">
                                {t("teach_c3_link")}
                            </Link>
                        </div>

                        {/* Course 4 - Skills */}
                        <div className="group bg-card border border-subtle rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                            <GraduationCap className="text-blue-600 mb-3 w-8 h-8" />
                            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{t("teach_c4_title")}</h3>
                            <p className="text-main mb-4">
                                {t("teach_c4_desc")}
                            </p>
                            <Link href="/contact" className="text-blue-700 dark:text-blue-400 font-medium hover:underline">
                                {t("teach_c4_link")}
                            </Link>
                        </div>


                    </div>
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-semibold mb-4">{t("teach_cta_h2")}</h2>
                        <p className="text-main mb-6 max-w-2xl mx-auto">
                            {t("teach_cta_desc")}
                        </p>
                        <Link href="/contact" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition">{t("teach_cta_btn")}</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
