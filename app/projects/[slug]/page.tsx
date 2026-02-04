import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/app/lib/projects';
import ProjectDetailPageContent from '@/app/components/ProjectDetailPageContent';
import HomeSecurityLabCaseStudy from '@/app/components/HomeSecurityLabCaseStudy';

import FreeRTOSCaseStudy from '@/app/components/FreeRTOSCaseStudy';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | Mohamed El-Kaza',
        };
    }

    return {
        title: `${project.title.en} | Mohamed El-Kaza`,
        description: project.summary.en,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Use custom case study for home-security-lab
    if (slug === 'home-security-lab') {
        return <HomeSecurityLabCaseStudy />;
    }

    // Use custom case study for freertos-sensor
    if (slug === 'freertos-sensor') {
        return <FreeRTOSCaseStudy />;
    }

    return <ProjectDetailPageContent slug={slug} />;
}
