import type { ProjectData } from '@modules/projects/types/projects.types';
import { m } from 'framer-motion';
import React from 'react';

import DemoButton from '../buttons/demo-button';
import RepoButton from '../buttons/repo-button';

type ProjectShowcaseButtonsProps = {
  projectLink: ProjectData['projectLink'];
  repoLink: ProjectData['repoLink'];
};

const ProjectShowcaseButtons: React.FC<ProjectShowcaseButtonsProps> = (props) => {
  const { projectLink, repoLink } = props;

  return (
    <m.div
      className="space-y-2 md:w-1/5"
      initial={{ opacity: 0, translateX: 20 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'tween',
        duration: 0.25,
        delay: 0.35,
      }}
    >
      {projectLink.exists && (
        <DemoButton className="w-full" href={projectLink.link}>
          Demo
        </DemoButton>
      )}
      {repoLink.exists && (
        <RepoButton className="w-full" href={repoLink.link}>
          Repo
        </RepoButton>
      )}
    </m.div>
  );
};

export default ProjectShowcaseButtons;
