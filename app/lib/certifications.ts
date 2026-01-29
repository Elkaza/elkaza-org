
import { Award, BookOpen, ScrollText, FileSpreadsheet, LucideIcon } from "lucide-react";

export type CertType = "professional_certification" | "university_course" | "professional_training";
export type CertCategory = "project_management" | "business_analysis" | "excel_vba";

export type Certification = {
    id: string;
    titleKey: string;
    issuerKey: string;
    type: CertType;
    category: CertCategory;

    // Human readable date label (Key) e.g. "since Oct 2025"
    dateLabelKey: string;

    // ISO Date strings for sorting
    validFrom?: string;
    completedDate?: string;
    issuedDate?: string;

    // Optional metadata
    ects?: number;
    gradeKey?: string;
    providerKey?: string; // Optional provider override/addition
    proofKey?: string; // "Proof available on request" key
    tags: string[]; // ["Project Management"]

    icon: LucideIcon;
};

export const certifications: Certification[] = [
    {
        id: "ipma-d",
        titleKey: "cert_ipma_title",
        issuerKey: "cert_ipma_issuer",
        type: "professional_certification",
        category: "project_management",
        dateLabelKey: "cert_ipma_date", // "since Oct 2025"
        validFrom: "2025-10-01",
        proofKey: "cert_avail_req",
        tags: ["Project Management"],
        icon: Award,
    },
    {
        id: "uni-graz",
        titleKey: "cert_graz_title",
        issuerKey: "cert_graz_issuer",
        type: "university_course",
        category: "project_management",
        dateLabelKey: "cert_graz_date_completed", // "completed 17 Oct 2025" (using completed date as main label)
        completedDate: "2025-10-17",
        issuedDate: "2025-11-03",
        gradeKey: "cert_graz_grade",
        ects: 10,
        proofKey: "cert_avail_req",
        tags: ["Project Management"],
        icon: BookOpen,
    },
    {
        id: "linkedin-ba",
        titleKey: "cert_li_title",
        issuerKey: "cert_li_issuer",
        type: "professional_training",
        category: "business_analysis",
        dateLabelKey: "cert_li_date", // "completed 30 Mar 2023"
        completedDate: "2023-03-30",
        proofKey: "cert_avail_req",
        tags: ["Business Analysis"],
        icon: ScrollText,
    },
    {
        id: "excel-vba",
        titleKey: "cert_excel_title",
        issuerKey: "cert_excel_issuer",
        type: "professional_training",
        category: "excel_vba",
        dateLabelKey: "cert_excel_date", // "Issued: 13 Sep 2022"
        issuedDate: "2022-09-13",
        providerKey: "cert_excel_provider",
        proofKey: "cert_avail_req",
        tags: ["Excel/VBA"],
        icon: FileSpreadsheet,
    }
];

// Helper to get effective date for sorting
export const getEffectiveDate = (c: Certification): string => {
    return c.validFrom || c.issuedDate || c.completedDate || "1970-01-01";
};

// Sort Logic: Type Priority -> Date Descending
export const sortCertifications = (items: Certification[]): Certification[] => {
    const typePriority: Record<CertType, number> = {
        "professional_certification": 1,
        "university_course": 2,
        "professional_training": 3
    };

    return [...items].sort((a, b) => {
        // 1. Sort by Type Priority
        const typeDiff = typePriority[a.type] - typePriority[b.type];
        if (typeDiff !== 0) return typeDiff;

        // 2. Sort by Date Descending
        const dateA = getEffectiveDate(a);
        const dateB = getEffectiveDate(b);
        return dateB.localeCompare(dateA); // Descending
    });
};
