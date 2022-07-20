import React from 'react';
import Flex from '@modules/ui/components/flex/flex';
import Heading from '@modules/ui/components/heading/heading';
import Text from '@modules/ui/components/text/text';
import Grid from '@modules/ui/components/grid/grid';
import Section from '../../section';
import type { HomeProjectCardType } from './project-card/home-project-card.types';
import HomeProjectCard from './project-card/home-project-card';
import { useTheme } from 'styled-components';

interface IHomeProjectsProps {}

const PROJECTS: HomeProjectCardType[] = Array.from({ length: 6 }).map(() => {
  return {
    title: 'Project Title',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia veniam et nostrum fugiat ipsam ullam quod eaque nihil asperiores ut!',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    repoLink: '',
    projectLink: '',
  };
});

const HomeProjects: React.FC<IHomeProjectsProps> = (props) => {
  const {} = props;
  const theme = useTheme();

  return (
    <Section>
      <Flex flexDirection="column" alignItems="center">
        {/* Heading */}
        <Heading as="h1" fontSize="6xl" margin="0">
          Projects
        </Heading>
        {/* Text */}
        <Text fontSize="xl" textAlign="center" margin="0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia veniam et nostrum fugiat ipsam ullam,
          quod eaque nihil asperiores ut! Fuga placeat numquam expedita, odio quos quisquam itaque et.
        </Text>

        {/* Projects */}
        <Grid
          gap="1rem"
          templateColumns="repeat(auto-fit, minmax(275px, 1fr))"
          templateRows="repeat(auto-fit, minmax(275px, 1fr))"
          width="100%"
          padding={theme.spacing.xl}
        >
          {PROJECTS.map((project, index) => {
            return <HomeProjectCard key={index} projectData={project} />;
          })}
        </Grid>
      </Flex>
    </Section>
  );
};

export default HomeProjects;
