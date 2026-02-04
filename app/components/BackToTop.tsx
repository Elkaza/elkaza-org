"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";

export default function BackToTop() {
    const { t } = useLocale();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-50"
            aria-label={t("back_to_top") || "Back to top"}
        >
            <ArrowUp className="h-6 w-6" />
        </button>
    );
}
