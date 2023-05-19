import { siteConfig } from '@config/config';
import ProjectShowcase from '@modules/projects/components/showcase/project-showcase';
import { getAllProjects, getProjectBySlug } from '@modules/projects/lib/project-utils';
import type { Project } from '@modules/projects/types/projects.types';
import type { Metadata } from 'next';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

const getProjectFromProps = async (props: ProjectPageProps): Promise<Project> => {
  const { params } = props;
  const { slug } = params;
  const project = await getProjectBySlug({ slug });
  return project;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.slug.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromProps({ params });
  return {
    title: project.metadata.title,
    description: project.metadata.description,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      url: `${siteConfig.url}/projects/${params.slug}`,
      images: [
        {
          url: project.metadata.thumbnails[0]!,
          width: 1500,
          height: 1000,
        },
      ],
    },
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const project = await getProjectFromProps(props);

  return <ProjectShowcase project={project} />;
}
