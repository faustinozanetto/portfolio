import React from 'react';

import { Project } from '@contentlayer/generated';
import ProjectShowcaseButtons from './project-showcase-buttons';
import ProjectShowcaseMetadata from './project-showcase-metadata';
import ProjectShowcaseThumbnails from './thumbnails/project-showcase-thumbnails';

type ProjectShowcaseProps = {
  project: Project;
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = (props) => {
  const { project } = props;

  return (
    <section className="container mx-auto my-8 w-full max-w-5xl items-start justify-center p-4 md:my-12 md:max-w-6xl md:p-8 lg:my-16 lg:max-w-7xl">
      <article className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col gap-2 md:flex-row p-4 rounded-lg shadow md:p-6 border">
          <ProjectShowcaseMetadata project={project} />
          <ProjectShowcaseButtons repoLink={project.repoLink} projectLink={project.projectLink} />
        </div>
        <ProjectShowcaseThumbnails thumbnails={project.thumbnails} />
      </article>
    </section>
  );
};

export default ProjectShowcase;
