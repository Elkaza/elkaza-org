import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/app/lib/projects';
import ProjectDetailPageContent from '@/app/components/ProjectDetailPageContent';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | Mohamed Elkaza',
        };
    }

    return {
        title: `${project.title.en} | Mohamed Elkaza`,
        description: project.oneLiner.en,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailPageContent slug={slug} />;
}
