import LinkButton from '@modules/ui/components/buttons/button-link';
import { motion } from 'framer-motion';
import NextImage from 'next/legacy/image';
import React from 'react';
import { BiGitRepoForked } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';

import type { HomeProjectCardType } from './home-project-card.types';
import ProjectTechnologyBadge from './home-project-technology-badge';

interface IHomeProjectCardProps {
  projectData: HomeProjectCardType;
}

const HomeProjectCard: React.FC<IHomeProjectCardProps> = (props) => {
  const { projectData } = props;

  return (
    <motion.div
      initial="visible"
      whileHover="hover"
      variants={{
        visible: {
          transform: 'scale(1.0)',
        },
        hover: {
          transform: 'scale(1.05)',
        },
      }}
    >
      <div className="w-full rounded-lg bg-neutral-200 shadow-lg dark:bg-neutral-900 md:max-w-sm">
        {/* Image */}
        <div className="relative h-[180px]">
          <NextImage src={projectData.image} alt={projectData.title} objectFit="cover" layout="fill" />
        </div>

        {/* Bottom Information */}
        <div className="flex flex-col items-start p-4 text-neutral-900 dark:text-neutral-100">
          {/* Title */}
          <span className="text-xl font-bold">{projectData.title}</span>
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1">
            {projectData.technologies.map((technologyBadge, index) => {
              return <ProjectTechnologyBadge key={index} technology={technologyBadge} />;
            })}
          </div>
          {/* Description */}
          <p className="text-sm sm:text-base">{projectData.description}</p>
          {/* Buttons */}
          <div className="mt-2 flex w-full flex-row items-center space-x-2">
            {/* Preview Link */}
            <LinkButton
              size="md"
              className="w-full"
              href={projectData.projectLink}
              target="_blank"
              leftIcon={<FiEye size={22} />}
            >
              Preview
            </LinkButton>
            {/* Repo Link */}
            <LinkButton
              size="md"
              className="w-full"
              variant="outline"
              target="_blank"
              href={projectData.repoLink}
              leftIcon={<BiGitRepoForked size={22} />}
            >
              Repo
            </LinkButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeProjectCard;
