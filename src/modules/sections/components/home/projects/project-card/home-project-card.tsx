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
  const theme = useTheme();

  const constructBoxShadow = (): string => {
    const baseColor = `rgba(37, 99, 235, 0.35)`;
    return `${baseColor} 0px 5px 15px`;
  };

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
      <Box
        backgroundColor={theme.colors.background[100]}
        borderRadius="lg"
        boxShadow={constructBoxShadow()}
        maxWidth="325px"
        margin="0 auto"
      >
        {/* Image */}
        <HomeProjectCardImageContainer>
          <NextImage src={projectData.image} alt={projectData.title} objectFit="cover" layout="fill" />
        </HomeProjectCardImageContainer>

        {/* Bottom Information */}
        <Flex flexDirection="column" alignItems="flex-start" padding={theme.spacing.md}>
          {/* Title */}
          <Heading as="span" color="black" fontWeight="extrabold" fontSize="2xl">
            {projectData.title}
          </Heading>
          {/* Technology Badges */}
          <Flex flexDirection="row" alignItems="center">
            {projectData.technologies.map((technologyBadge, index) => {
              return <ProjectTechnologyBadge key={index} technology={technologyBadge} />;
            })}
          </Flex>
          {/* Description */}
          <Text color="black" fontSize="md" textAlign="left" margin="0" marginBottom="auto">
            {projectData.description}
          </Text>
          {/* Buttons */}
          <Flex width="100%" paddingTop={theme.spacing.lg} alignItems="center" justifyContent="space-between">
            {/* Preview Link */}
            <LinkButton
              size="md"
              color="white"
              width="100%"
              backgroundColor="black"
              href={projectData.projectLink}
              leftIcon={<FiEye size={22} />}
            >
              Preview
            </LinkButton>
            {/* Repo Link */}
            <LinkButton
              size="md"
              width="100%"
              backgroundColor="black"
              variant="outline"
              href={projectData.repoLink}
              leftIcon={<BiGitRepoForked size={22} />}
            >
              Repo
            </LinkButton>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default HomeProjectCard;
