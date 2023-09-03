import React from 'react';
import type { CardProps } from '@modules/ui/components/cards/card';
import Card from '@modules/ui/components/cards/card';

import { Project } from '@contentlayer/generated';
import ProjectCardTechnologies from './project-card-technologies';

type ProjectCardProps = {
  /** Data to display in the project card. */
  project: Project;
  /** Optional: Variant of the project card. */
  variant?: CardProps['variant'];
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { project, variant = 'portrait' } = props;

  return (
    <Card href={project.slug} title={project.title} thumbnail={project.thumbnails[0]} variant={variant}>
      <ProjectCardTechnologies technologies={project.technologies} />
      {/* Description */}
      <p className="line-clamp-4 mt-1.5">{project.description}</p>
    </Card>
  );
};

export default ProjectCard;
