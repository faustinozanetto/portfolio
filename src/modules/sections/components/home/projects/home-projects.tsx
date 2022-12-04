import React from 'react';
import Flex from '@modules/ui/components/flex/flex';
import Heading from '@modules/ui/components/heading/heading';
import Text from '@modules/ui/components/text/text';
import Grid from '@modules/ui/components/grid/grid';
import { useTheme } from 'styled-components';
import { HOME_PROJECTS } from '@lib/constants.lib';
import Section from '../../section/section';
import HomeProjectCard from './project-card/home-project-card';

interface IHomeProjectsProps {}

const HomeProjects: React.FC<IHomeProjectsProps> = (props) => {
  const {} = props;
  const theme = useTheme();

  return (
    <Section containerStyles={{ marginBottom: '20em' }}>
      <Flex flexDirection="column" alignItems="center">
        {/* Heading */}
        <Heading as="h1" fontSize="6xl" margin="0">
          Projects
        </Heading>
        {/* Text */}
        <Text fontSize="xl" textAlign="center" margin="0">
          Below are a collection of my personal and profesional projects I have completed in my past years of
          experience. You will encounter with different areas such as web development or computer graphics, using a
          broad varierty of programming languages and technologies like C++ or Typescript.
        </Text>

        {/* Projects */}
        <Grid
          gap="1rem"
          templateColumns="repeat(auto-fit, minmax(325px, 1fr))"
          templateRows="repeat(auto-fit, minmax(300px, 1fr))"
          width="100%"
          padding={theme.spacing.xl}
        >
          {HOME_PROJECTS.map((project, index) => {
            return <HomeProjectCard key={index} projectData={project} />;
          })}
        </Grid>
      </Flex>
    </Section>
  );
};

export default HomeProjects;
