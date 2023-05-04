import React from 'react';

type ProjectCardTechnologiesProps = {
  technologies: string[];
};

const ProjectCardTechnologies: React.FC<ProjectCardTechnologiesProps> = (props) => {
  const { technologies } = props;

  return (
    <div className="flex flex-wrap gap-1">
      {technologies.map((technology) => {
        return (
          <span
            key={technology}
            className="rounded-lg bg-primary-300 px-1 text-sm font-semibold text-neutral-800 dark:bg-primary-800 dark:text-neutral-200"
          >
            {technology}
          </span>
        );
      })}
    </div>
  );
};

export default ProjectCardTechnologies;
