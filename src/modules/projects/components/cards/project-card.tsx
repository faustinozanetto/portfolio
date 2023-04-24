import type { Project } from '@modules/projects/types/projects.types';
import type { CardProps } from '@modules/ui/components/cards/card';
import Card from '@modules/ui/components/cards/card';
import React from 'react';

interface IProjectCardProps {
  /** Data to display in the project card. */
  project: Project;
  /** Optional: Variant of the project card. */
  variant?: CardProps['variant'];
}

const ProjectCard: React.FC<IProjectCardProps> = (props) => {
  const { project, variant = 'portrait' } = props;

  return (
    <Card
      href={`/projects/${project.slug.slug}`}
      title={project.metadata.title}
      thumbnail={project.metadata.thumbnails.length && project.metadata.thumbnails[0]}
      variant={variant}
    >
      <div className="flex flex-wrap space-x-1 text-primary-600 opacity-70 dark:text-primary-300">
        {project.metadata.technologies.map((technology) => {
          return (
            <span key={technology} className="font-medium">
              {`#${technology}`}
            </span>
          );
        })}
      </div>
      {/* Description */}
      <p className="truncate-text">{project.metadata.description}</p>
    </Card>
  );
};

export default ProjectCard;
