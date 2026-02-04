"use client";
import { useLocale } from "../LocaleProvider";

export default function DatenschutzPageContent() {
    const { t } = useLocale();

    return (
        <main className="flex flex-col items-start justify-start w-full max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-8 text-main">
            <h1 className="text-3xl md:text-4xl font-bold">{t("legal_privacy_title")}</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("privacy_overview_title")}</h2>
                <p className="text-muted leading-relaxed">{t("privacy_overview_desc")}</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("privacy_contact_form_title")}</h2>
                <p className="text-muted leading-relaxed">{t("privacy_contact_form_desc")}</p>
                <ul className="list-disc ml-6 space-y-1 text-muted">
                    <li>{t("privacy_data_name")}</li>
                    <li>{t("privacy_data_email")}</li>
                    <li>{t("privacy_data_message")}</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("privacy_purpose_title")}</h2>
                <p className="text-muted leading-relaxed">{t("privacy_purpose_desc")}</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("privacy_retention_title")}</h2>
                <p className="text-muted leading-relaxed">{t("privacy_retention_desc")}</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("privacy_rights_title")}</h2>
                <p className="text-muted leading-relaxed">{t("privacy_rights_desc")}</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">{t("privacy_contact_title")}</h2>
                <p className="text-muted">
                    {t("privacy_contact_desc")}{" "}
                    <a href="mailto:contact@elkaza.org" className="text-blue-600 hover:underline">
                        contact@elkaza.org
                    </a>
                </p>
            </section>
        </main>
    );
}
