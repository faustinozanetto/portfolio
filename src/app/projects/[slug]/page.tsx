import React from 'react';
import { siteConfig } from '@config/config';
import ProjectShowcase from '@modules/projects/components/showcase/project-showcase';
import type { Metadata } from 'next';
import { allProjects } from '@contentlayer/generated';
import { notFound } from 'next/navigation';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const doc = allProjects.find((doc) => doc.slugAsParams === params.slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<ProjectPageProps['params'][]> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);
  if (!project) return notFound();

  const { title, description } = project;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/projects/${params.slug}`,
      images: [
        {
          url: project.thumbnails[0]!,
          width: 1500,
          height: 1000,
        },
      ],
    },
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const project = await getProjectFromParams(props.params);
  if (!project) return notFound();

  return <ProjectShowcase project={project} />;
}
