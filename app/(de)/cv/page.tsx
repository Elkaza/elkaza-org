import CvPageContent from "@/app/components/CvPageContent";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
    locale: "de",
    path: "/cv",
    title: "CV | Mohamed Elkaza",
    description: "CV of Mohamed Elkaza covering application engineering, automation, infrastructure, IT operations, networking, monitoring, and IoT specialization.",
});

export default function CvPage() {
    return <CvPageContent />;
}
