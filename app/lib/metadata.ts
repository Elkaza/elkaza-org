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
        jobTitle: "IT Infrastructure, Application & Automation Engineer",
        affiliation: [
            {
                "@type": "EducationalOrganization",
                name: "Technische Universitaet Wien",
            },
            {
                "@type": "EducationalOrganization",
                name: "FH Technikum Wien",
            },
        ],
        knowsAbout: [
            "IT Operations",
            "System Administration",
            "Network Engineering",
            "Windows Server",
            "Linux",
            "Proxmox VE",
            "Systems Administration",
            "Application Engineering",
            "Technical Project Delivery",
            "Business Analysis",
            "Owner-Controlled Infrastructure",
            "Privacy-First Analytics",
            "Automation",
            "ITSM",
            "Project Management",
            "ServiceNow",
            "IoT",
        ],
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Elkaza | IT Infrastructure, Systems & Projects",
        url: "https://elkaza.org",
        description:
            "Portfolio covering IT operations, systems administration, application engineering, software automation, cybersecurity-minded infrastructure, technical delivery, business analysis, and ongoing IoT systems work.",
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
