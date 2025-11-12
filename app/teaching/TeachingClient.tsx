"use client";
import Link from "next/link";
import Button from "../components/Button";
import { GraduationCap, Network, ShieldCheck, Lightbulb, Presentation } from "lucide-react";
import { useLocale } from "../LocaleProvider";

export default function TeachingClient() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
          <div className="w-20 h-1.5 bg-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">{t("nav_teaching")}</h1>
          <p className="mt-2 text-gray-500 italic">{t("teach_tagline")}</p>
        </aside>

        <div className="lg:col-span-9">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="group border rounded-xl p-6 transition bg-[var(--surface)] border-[var(--outline)] shadow-elev-1 hover:shadow-elev-2">
            <Presentation className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("teach_c1_title")}</h3>
            <p className="text-dim mb-4">
              {t("teach_c1_desc")}
            </p>
            <Link href="https://www.boc-group.com/products/adoit/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">
              {t("teach_c1_link")}
            </Link>
          </div>

          {/* Course 2 */}
          <div className="group border rounded-xl p-6 transition bg-[var(--surface)] border-[var(--outline)] shadow-elev-1 hover:shadow-elev-2">
            <Network className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("teach_c2_title")}</h3>
            <p className="text-dim mb-4">
              {t("teach_c2_desc")}
            </p>
            <Link href="/documents/thesis.pdf" className="text-blue-700 font-medium hover:underline">
              {t("teach_c2_link")}
            </Link>
          </div>

          {/* Course 3 */}
          <div className="group border rounded-xl p-6 transition bg-[var(--surface)] border-[var(--outline)] shadow-elev-1 hover:shadow-elev-2">
            <GraduationCap className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("teach_c3_title")}</h3>
            <p className="text-dim mb-4">
              {t("teach_c3_desc")}
            </p>
            <Link href="https://www.ipma.world/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">
              {t("teach_c3_link")}
            </Link>
          </div>

          {/* Course 4 */}
          <div className="group border rounded-xl p-6 transition bg-[var(--surface)] border-[var(--outline)] shadow-elev-1 hover:shadow-elev-2">
            <Lightbulb className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("teach_c4_title")}</h3>
            <p className="text-dim mb-4">
              {t("teach_c4_desc")}
            </p>
            <Link href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">
              {t("teach_c4_link")}
            </Link>
          </div>

          {/* Course 5 */}
          <div className="group border rounded-xl p-6 transition bg-[var(--surface)] border-[var(--outline)] shadow-elev-1 hover:shadow-elev-2">
            <ShieldCheck className="text-blue-600 mb-3 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t("teach_c5_title")}</h3>
            <p className="text-dim mb-4">
              {t("teach_c5_desc")}
            </p>
            <Link href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">
              {t("teach_c5_link")}
            </Link>
          </div>
          </div>
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">{t("teach_cta_h2")}</h2>
            <p className="text-dim mb-6 max-w-2xl mx-auto">
              {t("teach_cta_desc")}
            </p>
            <Button href="/contact" variant="filled">{t("teach_cta_btn")}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
