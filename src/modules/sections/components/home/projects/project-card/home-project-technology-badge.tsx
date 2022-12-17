import type { ProjectTechnology } from '@typedefs/portfolio.types';
import React from 'react';

interface IProjectTechnologyBadgeProps {
  technology: ProjectTechnology;
}

const ProjectTechnologyBadge: React.FC<IProjectTechnologyBadgeProps> = (props) => {
  const { technology } = props;

  return <span className="font-bold text-blue-500 dark:text-blue-300">{technology}</span>;
};

export default ProjectTechnologyBadge;
