import HomeProjectCard from '@modules/projects/components/cards/project-card';
import React from 'react';

import type { Project } from '../types/projects.types';

interface IProjectsFeedProps {
  projects: Project[];
}

const ProjectsFeed: React.FC<IProjectsFeedProps> = (props) => {
  const { projects } = props;

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        return <HomeProjectCard key={project.data.title} project={project} />;
      })}
    </div>
  );
};

export default ProjectsFeed;
