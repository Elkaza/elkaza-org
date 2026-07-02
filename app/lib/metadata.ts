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
            "https://www.linkedin.com/in/elkaza",
        ],
        jobTitle: "Business Informatics and IoT Master Student | Data Automation, Edge AI and Infrastructure",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Vienna",
            addressCountry: "Austria",
        },
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
            "Business Informatics",
            "Data Automation",
            "Python",
            "SQL",
            "Reporting",
            "Dashboards",
            "APIs",
            "Industry 4.0",
            "Edge AI",
            "TinyML",
            "AIoT",
            "Monitoring",
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
        name: "Elkaza | Business Informatics, IoT, Data Automation & Edge AI",
        url: "https://elkaza.org",
        description:
            "Portfolio covering data automation, IoT, edge AI, Industry 4.0, application engineering, infrastructure, monitoring, business informatics, and technical delivery.",
        author: {
            "@type": "Person",
            name: "Mohamed Elkaza",
        },
        inLanguage: ["en", "de"],
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
            "https://www.linkedin.com/in/elkaza",
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
