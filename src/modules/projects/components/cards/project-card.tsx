import type { Project } from '@modules/projects/types/projects.types';
import type { CardProps } from '@modules/ui/components/cards/card';
import Card from '@modules/ui/components/cards/card';
import React from 'react';

import ProjectCardTechnologies from './project-card-technologies';

type ProjectCardProps = {
  /** Data to display in the project card. */
  project: Project;
  /** Optional: Variant of the project card. */
  variant?: CardProps['variant'];
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { project, variant = 'portrait' } = props;

  const fallbackThumbnail = 'assets/projects/gardentify-thumbnail-1.png';

  return (
    <Card
      href={`/projects/${project.slug.slug}`}
      title={project.metadata.title}
      thumbnail={project.metadata.thumbnails[0] ?? fallbackThumbnail}
      variant={variant}
    >
      <ProjectCardTechnologies technologies={project.metadata.technologies} />
      {/* Description */}
      <p className="line-clamp-4 mt-1.5">{project.metadata.description}</p>
    </Card>
  );
};

export default ProjectCard;
