import type { ProjectData } from '@modules/projects/types/projects.types';
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
    <div className="space-y-2 md:w-1/5">
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
    </div>
  );
};

export default ProjectShowcaseButtons;
