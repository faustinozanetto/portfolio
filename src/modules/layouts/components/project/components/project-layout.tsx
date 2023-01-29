import DemoButton from '@modules/projects/components/buttons/demo-button';
import RepoButton from '@modules/projects/components/buttons/repo-button';
import ProjectThumbnailModal from '@modules/projects/components/project-thumbnail-modal';
import { useProjectThumnbail } from '@modules/projects/context/project-thumbnails-context';
import type { Project } from '@modules/projects/types/projects.types';
import Section from '@modules/sections/components/section/section';
import Image from '@modules/ui/components/images/image';
import { m } from 'framer-motion';

import BaseLayout from '../../base/base-layout';

interface IProjectLayoutProps {
  /**
   * Project to data to use.
   */
  project: Project;
}

const ProjectLayout: React.FC<IProjectLayoutProps> = (props) => {
  const { project } = props;
  const { selectedThumbnail, setSelectedThumbnail } = useProjectThumnbail();

  return (
    <BaseLayout
      headProps={{
        title: `${project.metadata.title} | Faustino Zanetto`,
      }}
    >
      <Section>
        <article className="flex flex-col items-center justify-center space-y-2 text-neutral-900 dark:text-neutral-100 md:space-y-4 lg:space-y-8">
          <div className="flex flex-col space-y-2 md:flex-row ">
            {/* Metadata */}
            <div className="flex flex-col space-y-2 md:w-4/5">
              <h1 className="text-center text-3xl font-extrabold leading-10 text-primary-500 dark:text-primary-300 md:text-start md:text-5xl md:leading-normal">
                {project.metadata.title}
              </h1>

              {/* Description */}
              <p className="text-base md:col-span-2 md:col-start-1 md:text-lg">{project.metadata.description}</p>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold leading-snug md:text-start md:text-xl md:leading-normal">
                  {project.metadata.title} was built with:
                </h2>
                {project.metadata.technologies.map((technology) => {
                  return (
                    <span
                      key={technology}
                      className="text-base font-medium text-neutral-800 dark:text-neutral-300 md:text-lg"
                    >
                      {`${technology} `}
                    </span>
                  );
                })}
              </div>
            </div>
            {/* Link Buttons */}
            <div className="space-y-2 md:w-1/5">
              {project.metadata.projectLink.exists && (
                <DemoButton className="w-full" href={project.metadata.projectLink.link}>
                  Demo
                </DemoButton>
              )}
              {project.metadata.repoLink.exists && (
                <RepoButton className="w-full" href={project.metadata.repoLink.link}>
                  Repo
                </RepoButton>
              )}
            </div>
          </div>
          {/* Thumbnails */}

          <div className="container columns-1 gap-4 md:columns-2">
            {project.metadata.thumbnails.length > 0 &&
              project.metadata.thumbnails.map((thumbnail, index) => {
                return (
                  <m.div
                    key={`thumb-${index}`}
                    initial={{ opacity: 0, translateY: -30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.15 * index,
                    }}
                    className="mb-4 w-full cursor-pointer"
                  >
                    <Image
                      src={thumbnail}
                      alt="Project thumbnail"
                      className="rounded-xl"
                      onClick={() => {
                        setSelectedThumbnail(thumbnail);
                      }}
                      width={800}
                      height={800}
                      priority
                    />
                  </m.div>
                );
              })}
          </div>

          <ProjectThumbnailModal thumbnail={selectedThumbnail} onClose={() => setSelectedThumbnail('')} />
        </article>
      </Section>
    </BaseLayout>
  );
};

export default ProjectLayout;
