import useMediaQuery from '@hooks/use-media-query';
import CardsFeed from '@modules/ui/components/cards/feed/cards-feed';
import React from 'react';
import theme from 'tailwindcss/defaultTheme';

import type { Project } from '../types/projects.types';
import ProjectCard from './cards/project-card';

interface IProjectsFeedProps {
  /** Projects to display in the feed */
  projects: Project[];
}

const ProjectsFeed: React.FC<IProjectsFeedProps> = (props) => {
  const { projects } = props;
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.screens.sm}`);

  return (
    <CardsFeed
      data={projects}
      render={(cardProps: Project, index) => {
        return React.createElement(ProjectCard, { key: index, project: cardProps, variant: 'portrait' });
      }}
      renderFeatured={(cardProps: Project) => {
        return React.createElement(ProjectCard, {
          project: cardProps,
          variant: isSmallDevice ? 'portrait' : 'landscape',
        });
      }}
    />
  );
};

export default ProjectsFeed;
