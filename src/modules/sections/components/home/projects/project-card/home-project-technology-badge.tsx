import React from 'react';
import type { ProjectTechnology } from '@typedefs/portfolio.types';

interface IProjectTechnologyBadgeProps {
  technology: ProjectTechnology;
}

const ProjectTechnologyBadge: React.FC<IProjectTechnologyBadgeProps> = (props) => {
  const { technology } = props;

  return <span className="text-blue-500 font-bold ">{technology}</span>;
};

export default ProjectTechnologyBadge;
