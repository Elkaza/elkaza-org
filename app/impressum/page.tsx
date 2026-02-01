"use client";
import { useLocale } from "../LocaleProvider";

export default function ImpressumPage() {
    const { t } = useLocale();

    return (
        <main className="flex flex-col items-start justify-start w-full max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-8 text-main">
            <h1 className="text-3xl md:text-4xl font-bold">{t("legal_impressum_title")}</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("legal_responsible_title")}</h2>
                <div className="space-y-1">
                    <p className="font-medium">Mohamed Elkaza</p>
                    <p className="text-muted">{t("legal_location")}</p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("legal_contact_title")}</h2>
                <p>
                    <a href="mailto:contact@elkaza.org" className="text-blue-600 hover:underline">
                        contact@elkaza.org
                    </a>
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("legal_purpose_title")}</h2>
                <p className="text-muted leading-relaxed">{t("legal_purpose_desc")}</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("legal_disclaimer_title")}</h2>
                <p className="text-muted leading-relaxed">{t("legal_disclaimer_desc")}</p>
            </section>
        </main>
    );
}
