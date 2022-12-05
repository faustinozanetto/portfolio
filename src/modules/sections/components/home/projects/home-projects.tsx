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
    <Section className="bg-gray-100 my-4 sm:my-6 md:my-8">
      <div className="flex flex-col">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-gray-900">Projects</h2>
        {/* Text */}
        <p className="text-lg font-regular text-gray-900 sm:text-xl">
          Below are a collection of my personal and profesional projects I have completed in my past years of
          experience. You will encounter with different areas such as web development or computer graphics, using a
          broad varierty of programming languages and technologies like C++ or Typescript.
        </p>

        {/* Projects */}
        <div className="grid gap-4 w-full mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {HOME_PROJECTS.map((project, index) => {
            return <HomeProjectCard key={index} projectData={project} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default HomeProjects;
