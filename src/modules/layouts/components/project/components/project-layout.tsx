import DemoButton from '@modules/projects/components/buttons/demo-button';
import RepoButton from '@modules/projects/components/buttons/repo-button';
import type { Project } from '@modules/projects/types/projects.types';
import Section from '@modules/sections/components/section/section';
import Image from 'next/image';

import BaseLayout from '../../base/base-layout';

interface IProjectLayoutProps {
  project: Project;
}

const ProjectLayout: React.FC<IProjectLayoutProps> = (props) => {
  const { project } = props;

  return (
    <BaseLayout
      headProps={{
        title: `${project.metadata.title} | Faustino Zanetto`,
      }}
    >
      <Section>
        <article className="flex flex-col items-center justify-center text-neutral-900 dark:text-neutral-100">
          <div className="flex flex-col space-y-2 sm:flex-row">
            {/* Metadata */}
            <div className="flex flex-col space-y-2 sm:w-4/5">
              <h1 className="text-center text-3xl font-extrabold leading-10 text-primary-500 dark:text-primary-300 sm:text-start sm:text-5xl sm:leading-normal">
                {project.metadata.title}
              </h1>

              {/* Description */}
              <p className="text-base font-medium sm:col-span-2 sm:col-start-1 sm:text-lg">
                {project.metadata.description}
              </p>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold leading-snug sm:text-start sm:text-xl sm:leading-normal">
                  {project.metadata.title} was built with:
                </h2>
                {project.metadata.technologies.map((technology) => {
                  return (
                    <span
                      key={technology}
                      className="text-base font-medium text-neutral-800 dark:text-neutral-300 sm:text-lg"
                    >
                      {`${technology} `}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="space-y-2 sm:w-1/5">
              {/* <h3 className="flex flex-row items-center text-lg font-semibold leading-snug sm:text-start sm:text-xl sm:leading-normal">
                Stars:
                {project.metadata.stars} <FiStar size={22} />
              </h3> */}
              <DemoButton className="w-full" href={project.metadata.projectLink}>
                Demo
              </DemoButton>
              <RepoButton className="w-full" href={project.metadata.repoLink}>
                Repo
              </RepoButton>
            </div>
          </div>
          {/* Thumbnail */}
          <Image
            src={project.metadata.image}
            alt="Project thumbnail"
            width={1000}
            height={1000}
            priority
            className="my-4 h-auto w-full rounded-xl drop-shadow-xl sm:my-6"
          />
        </article>
      </Section>
    </BaseLayout>
  );
};

export default ProjectLayout;
