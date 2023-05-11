import type { Project } from '@modules/projects/types/projects.types';
import Section from '@modules/sections/components/section/section';
import React from 'react';

import ProjectShowcaseButtons from './project-showcase-buttons';
import ProjectShowcaseMetadata from './project-showcase-metadata';
import ProjectShowcaseThumbnails from './project-showcase-thumbnails';

type ProjectShowcaseProps = {
  /**
   * Project to data to use.
   */
  project: Project;
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = (props) => {
  const { project } = props;

  return (
    <Section>
      <article className="flex flex-col items-center justify-center text-neutral-900 dark:text-neutral-100">
        <div className="flex w-full flex-col space-y-2 md:flex-row">
          <ProjectShowcaseMetadata metadata={project.metadata} />
          <ProjectShowcaseButtons repoLink={project.metadata.repoLink} projectLink={project.metadata.projectLink} />
        </div>
        <ProjectShowcaseThumbnails thumbnails={project.metadata.thumbnails} />
      </article>
    </Section>
  );
};

export default ProjectShowcase;
