"use client";

import { useState, FormEvent } from "react";
import { useLocale } from "../LocaleProvider";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

const CONTACT_EMAIL = "contact@elkaza.org";
const isContactFormEnabled = process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true";
const errorMessages: Record<string, string> = {
    invalid_email: "contact_form_invalid_email",
    invalid_request: "contact_form_error",
    payload_too_large: "contact_form_too_large",
    rate_limited: "contact_form_rate_limited",
    required: "contact_form_required",
    server_error: "contact_form_error",
    unavailable: "contact_form_unavailable",
};

export default function ContactForm() {
    const { t } = useLocale();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isContactFormEnabled || status === "loading") return;

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "", company: "" });
            } else {
                setStatus("error");
                const errorKey = typeof data.errorCode === "string" ? errorMessages[data.errorCode] : undefined;
                setErrorMessage(errorKey ? t(errorKey) : t("contact_form_error"));
            }
        } catch {
            setStatus("error");
            setErrorMessage(t("contact_form_error"));
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {!isContactFormEnabled && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
                    <p className="font-semibold">{t("contact_form_disabled_title")}</p>
                    <p className="mt-2 text-sm leading-relaxed">
                        {t("contact_form_disabled_body")}{" "}
                        <a className="font-semibold underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                            {CONTACT_EMAIL}
                        </a>
                    </p>
                </div>
            )}

            {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" size={20} />
                    <p className="text-green-800 dark:text-green-200">{t("contact_form_success")}</p>
                </div>
            )}

            {status === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                    <p className="text-red-800 dark:text-red-200">{errorMessage}</p>
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-main mb-2">
                    <span className="flex items-center gap-2">
                        <User size={16} />
                        {t("contact_form_name")}
                    </span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact_form_name_placeholder")}
                    className="w-full px-4 py-2 rounded-lg border border-subtle bg-card text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-main mb-2">
                    <span className="flex items-center gap-2">
                        <Mail size={16} />
                        {t("contact_form_email")}
                    </span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact_form_email_placeholder")}
                    className="w-full px-4 py-2 rounded-lg border border-subtle bg-card text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-main mb-2">
                    <span className="flex items-center gap-2">
                        <MessageSquare size={16} />
                        {t("contact_form_subject")}
                    </span>
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t("contact_form_subject_placeholder")}
                    className="w-full px-4 py-2 rounded-lg border border-subtle bg-card text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-main mb-2">
                    <span className="flex items-center gap-2">
                        <MessageSquare size={16} />
                        {t("contact_form_message")}
                    </span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t("contact_form_message_placeholder")}
                    className="w-full px-4 py-2 rounded-lg border border-subtle bg-card text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                />
            </div>

            <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <button
                type="submit"
                disabled={!isContactFormEnabled || status === "loading"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                {!isContactFormEnabled ? (
                    <>
                        <Mail size={18} />
                        {t("contact_form_disabled_button")}
                    </>
                ) : status === "loading" ? (
                    <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t("contact_form_sending")}
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        {t("contact_form_submit")}
                    </>
                )}
            </button>
        </form>
    );
}
