import React from 'react';
import { useTheme } from 'styled-components';
import NextImage from 'next/image';
import Box from '@modules/ui/components/box/box';
import Heading from '@modules/ui/components/heading/heading';
import Flex from '@modules/ui/components/flex/flex';
import Text from '@modules/ui/components/text/text';
import NextLink from 'next/link';
import Button from '@modules/ui/components/buttons/button';
import { FiEye } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';
import { HomeProjectCardImageContainer } from './home-project-card.styles';
import type { HomeProjectCardType } from './home-project-card.types';

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
    <Box backgroundColor={theme.colors.background[100]} borderRadius="lg" boxShadow={constructBoxShadow()}>
      {/* Image */}
      <HomeProjectCardImageContainer>
        <NextImage src={projectData.image} alt={projectData.title} objectFit="cover" layout="fill" />
      </HomeProjectCardImageContainer>

      {/* Bottom Information */}
      <Flex flexDirection="column" alignItems="flex-start" padding={theme.spacing.md}>
        {/* Title */}
        <Heading as="span" color="black" fontWeight="extrabold" fontSize="xl">
          {projectData.title}
        </Heading>
        {/* Description */}
        <Text color="black" fontSize="md" textAlign="left" margin="0">
          {projectData.description}
        </Text>
        {/* Buttons */}
        <Flex width="100%" paddingTop={theme.spacing.lg}>
          {/* Preview Link */}
          <Button size="md" color="white" backgroundColor="black" width="100%" leftIcon={<FiEye size={22} />}>
            Preview
          </Button>
          {/* Repo Link */}
          <Button
            variant="outline"
            backgroundColor="black"
            size="md"
            width="100%"
            leftIcon={<BiGitRepoForked size={22} />}
          >
            Repo
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeProjectCard;
