'use client';

import useMediaQuery from '@hooks/use-media-query';
import CardsFeed from '@modules/ui/components/cards/feed/cards-feed';
import React from 'react';
import theme from 'tailwindcss/defaultTheme';

import { Project } from '@contentlayer/generated';
import ProjectCard from './cards/project-card';

type ProjectsFeedProps = {
  /** Projects to display in the feed */
  projects: Project[];
};

const ProjectsFeed: React.FC<ProjectsFeedProps> = (props) => {
  const { projects } = props;
  const isMediumDevice = useMediaQuery(`(max-width: ${theme.screens.md}`);

  return (
    <CardsFeed
      data={projects}
      render={(cardProps: Project, index) =>
        React.createElement(ProjectCard, { key: index, project: cardProps, variant: 'portrait' })
      }
      renderFeatured={(cardProps: Project) =>
        React.createElement(ProjectCard, {
          project: cardProps,
          variant: isMediumDevice ? 'portrait' : 'landscape',
        })
      }
    />
  );
};

export default ProjectsFeed;
