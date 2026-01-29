/**
 * SEO Metadata Helper
 * Generates structured data and metadata for pages
 */

export function generatePersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Mohamed Elkaza",
        url: "https://elkaza.org",
        sameAs: [
            "https://github.com/Elkaza",
            "https://linkedin.com/in/elkaza",
        ],
        jobTitle: "Digital Transformation & Enterprise Architecture Specialist",
        worksFor: {
            "@type": "EducationalOrganization",
            name: "TU Wien",
        },
        alumniOf: [
            {
                "@type": "EducationalOrganization",
                name: "Technische Universität Wien",
            },
            {
                "@type": "EducationalOrganization",
                name: "FH Technikum Wien",
            },
        ],
        knowsAbout: [
            "Enterprise Architecture",
            "Digital Transformation",
            "IoT",
            "Project Management",
            "IPMA",
            "ArchiMate",
            "ServiceNow",
        ],
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Elkaza | Digital Transformation & Research",
        url: "https://elkaza.org",
        description:
            "Bridging enterprise architecture, digital innovation, and AI-driven transformation.",
        author: {
            "@type": "Person",
            name: "Mohamed Elkaza",
        },
        inLanguage: ["en", "de", "ar"],
    };
}

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Elkaza",
        url: "https://elkaza.org",
        logo: "https://elkaza.org/icon-512.png",
        sameAs: [
            "https://github.com/Elkaza",
            "https://linkedin.com/in/elkaza",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: "contact@elkaza.org",
            contactType: "General Inquiry",
        },
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
