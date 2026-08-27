import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetailPageContent from "@/app/components/ProjectDetailPageContent";
import { projects } from "@/app/lib/projects";
import { localizedMetadata } from "@/app/lib/seo";

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
      title: "Project Not Found | Mohamed Elkaza",
    };
  }

  return localizedMetadata({
    locale: "en",
    path: `/projects/${project.slug}`,
    title: `${project.title.en} | Mohamed Elkaza`,
    description: project.seoDescription?.en ?? project.oneLiner.en,
  });
}

export default async function EnglishProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageContent slug={slug} />;
}
