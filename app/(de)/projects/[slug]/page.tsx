import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/app/lib/projects';
import ProjectDetailPageContent from '@/app/components/ProjectDetailPageContent';
import { localizedMetadata } from '@/app/lib/seo';

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
        ...localizedMetadata({
            locale: "de",
            path: `/projects/${project.slug}`,
            title: `${project.title.de} | Mohamed Elkaza`,
            description: project.seoDescription?.de ?? project.oneLiner.de,
        }),
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
