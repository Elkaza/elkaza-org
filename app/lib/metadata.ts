/**
 * SEO Metadata Helper
 * Generates structured data and metadata for pages
 */
import { profile } from "./profile";

export function generatePersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        url: profile.websiteUrl,
        sameAs: [
            profile.githubUrl,
            profile.linkedinUrl,
        ],
        jobTitle: profile.title.en,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Vienna",
            addressCountry: "Austria",
        },
        affiliation: [
            {
                "@type": "EducationalOrganization",
                name: "TU Wien",
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
            "Application Engineering",
            "Technical Implementation",
            "Business Analysis",
            "Self-Hosted Infrastructure",
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
        name: `${profile.name} | ${profile.title.en}`,
        url: profile.websiteUrl,
        description: profile.introduction.en,
        author: {
            "@type": "Person",
            name: profile.name,
        },
        inLanguage: ["en", "de"],
    };
}

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Elkaza",
        url: profile.websiteUrl,
        logo: `${profile.websiteUrl}/icon-512.png`,
        sameAs: [
            profile.githubUrl,
            profile.linkedinUrl,
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: profile.email,
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
