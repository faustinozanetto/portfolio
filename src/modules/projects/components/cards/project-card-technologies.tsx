import { Badge } from '@modules/ui/components/badge/badge';
import React from 'react';

type ProjectCardTechnologiesProps = {
  technologies: string[];
};

const ProjectCardTechnologies: React.FC<ProjectCardTechnologiesProps> = (props) => {
  const { technologies } = props;

  return (
    <div className="flex flex-wrap gap-1">
      {technologies.map((technology) => (
        <Badge key={technology}>{technology}</Badge>
      ))}
    </div>
  );
};

export default ProjectCardTechnologies;
