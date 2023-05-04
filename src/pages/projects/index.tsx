import useFilterData from '@hooks/use-filter-data';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import ProjectsFeed from '@modules/projects/components/projects-feed';
import { getAllProjects } from '@modules/projects/lib/project-utils';
import type { Project } from '@modules/projects/types/projects.types';
import Section from '@modules/sections/components/section/section';
import clsx from 'clsx';
import { m } from 'framer-motion';
import type { GetStaticProps } from 'next';
import React from 'react';

type ProjectsPageProps = {
  projects: Project[];
};

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { projects } = props;

  /**
   * Function that generates the posible filters from the projects.
   * @returns The posible filters.
   */
  const getFiltersFunc = (): string[] => {
    const filtersSet = new Set<string>();
    projects
      .map((project) => project.metadata.technologies)
      .map((technologies) => technologies.forEach((technology) => filtersSet.add(technology)));
    return Array.from(filtersSet.values());
  };

  /**
   * Function that handles the filtering for the useFilterData hook.
   * @param data The data to filter.
   * @param filter The selected filter.
   * @returns The filtered data.
   */
  const filterFunc = (data: Project[], filter: string): Project[] => {
    return data.filter((project) => project.metadata.technologies.includes(filter));
  };

  const { filteredData, posibleFilters, selectedFilter, setSelectedFilter } = useFilterData<Project, string>(
    projects,
    'all',
    getFiltersFunc,
    filterFunc
  );

  return (
    <BaseLayout
      headProps={{
        title: 'Projects | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <Section className="bg-neutral-100 dark:bg-neutral-900">
        {/* Titles */}
        <m.h1
          className="mb-2 text-4xl font-extrabold text-primary-600 dark:text-primary-300 md:mb-4 md:text-5xl"
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
          }}
        >
          Take a look at all the projects I&apos;ve worked on!
        </m.h1>

        {/* Paragraph */}
        <m.p
          className="mb-2 text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.15,
          }}
        >
          Look through my latest post in my blog to stay up to date with new projects and news about my personal and
          profesional carreer in the it industry.
        </m.p>
        {/* Filtering */}
        <div className="flex flex-col items-start">
          <m.h3
            className="text-2xl font-extrabold leading-10 text-primary-600 dark:text-primary-300"
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.25,
            }}
          >
            Filter by Technologies
          </m.h3>
          <m.div
            className="flex flex-wrap items-center justify-center space-x-2"
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'tween',
              duration: 0.25,
              delay: 0.35,
            }}
          >
            {posibleFilters.concat('all').map((fil) => {
              return (
                <span
                  key={fil}
                  className={clsx(
                    'cursor-pointer font-medium hover:text-primary-500 dark:hover:text-primary-300',
                    selectedFilter === fil
                      ? 'font-bold text-primary-500 dark:text-primary-300'
                      : 'text-neutral-800 dark:text-neutral-300'
                  )}
                  onClick={() => setSelectedFilter(fil)}
                >
                  {fil}
                </span>
              );
            })}
          </m.div>
        </div>
        <ProjectsFeed projects={filteredData} />
      </Section>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await getAllProjects();

  return { props: { projects } };
};

export default ProjectsPage;
