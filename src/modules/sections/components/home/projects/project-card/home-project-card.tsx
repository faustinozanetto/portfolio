import React from 'react';
import { useTheme } from 'styled-components';
import NextImage from 'next/legacy/image';
import Box from '@modules/ui/components/box/box';
import Heading from '@modules/ui/components/heading/heading';
import Flex from '@modules/ui/components/flex/flex';
import Text from '@modules/ui/components/text/text';
import { FiEye } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';
import { motion } from 'framer-motion';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { HomeProjectCardImageContainer } from './home-project-card.styles';
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
      <div className="bg-gray-100 rounded-lg shadow-lg max-w-sm">
        {/* Image */}
        <div className="relative h-[180px]">
          <NextImage src={projectData.image} alt={projectData.title} objectFit="cover" layout="fill" />
        </div>

        {/* Bottom Information */}
        <div className="flex flex-col items-start p-4">
          {/* Title */}
          <span className="text-gray-900 text-xl font-bold">{projectData.title}</span>
          {/* Technology Badges */}
          <div className="flex flex-row space-x-2">
            {projectData.technologies.map((technologyBadge, index) => {
              return <ProjectTechnologyBadge key={index} technology={technologyBadge} />;
            })}
          </div>
          {/* Description */}
          <p className="text-sm font-regular text-gray-900 sm:text-base">{projectData.description}</p>
          {/* Buttons */}
          <div className="flex flex-row w-full items-center justify-between mt-2">
            {/* Preview Link */}
            <LinkButton size="md" className="w-full" href={projectData.projectLink} leftIcon={<FiEye size={22} />}>
              Preview
            </LinkButton>
            {/* Repo Link */}
            <LinkButton
              size="md"
              className="w-full"
              variant="outline"
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
