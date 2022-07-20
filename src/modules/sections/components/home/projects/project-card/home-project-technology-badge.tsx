import React from 'react';
import type { ProjectTechnology } from '@types/portfolio.types';
import { useTheme } from 'styled-components';
import Heading from '@modules/ui/components/heading/heading';

interface IProjectTechnologyBadgeProps {
  technology: ProjectTechnology;
}

const ProjectTechnologyBadge: React.FC<IProjectTechnologyBadgeProps> = (props) => {
  const { technology } = props;
  const theme = useTheme();

  return (
    <Heading
      as="span"
      backgroundColor={theme.colors.primary[500]}
      color={theme.colors.text}
      fontWeight="bold"
      fontSize="sm"
      padding="0.25rem"
      margin="0.125rem"
    >
      {technology}
    </Heading>
  );
};

export default ProjectTechnologyBadge;
