'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Project } from '@contentlayer/generated';
import DemoButton from '../buttons/demo-button';
import RepoButton from '../buttons/repo-button';

type ProjectShowcaseButtonsProps = {
  projectLink: Project['projectLink'];
  repoLink: Project['repoLink'];
};

const ProjectShowcaseButtons: React.FC<ProjectShowcaseButtonsProps> = (props) => {
  const { projectLink, repoLink } = props;

  return (
    <motion.div
      className="gap-2 md:w-1/5"
      initial={{ opacity: 0, translateX: 20 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'tween',
        duration: 0.25,
        delay: 0.35,
      }}
    >
      {projectLink && projectLink.link ? <DemoButton href={projectLink.link}>Demo</DemoButton> : null}
      {repoLink && repoLink.link ? <RepoButton href={repoLink.link}>Repo</RepoButton> : null}
    </motion.div>
  );
};

export default ProjectShowcaseButtons;
