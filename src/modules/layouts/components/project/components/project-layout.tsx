import DemoButton from '@modules/projects/components/buttons/demo-button';
import RepoButton from '@modules/projects/components/buttons/repo-button';
import ProjectThumbnailModal from '@modules/projects/components/project-thumbnail-modal';
import { useProjectThumnbail } from '@modules/projects/context/project-thumbnails-context';
import type { Project } from '@modules/projects/types/projects.types';
import Section from '@modules/sections/components/section/section';
import Image from '@modules/ui/components/images/image';

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
        <article className="flex flex-col items-center justify-center space-y-2 text-neutral-900 dark:text-neutral-100 sm:space-y-4 md:space-y-8">
          <div className="flex flex-col space-y-2 sm:flex-row ">
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
            {/* Link Buttons */}
            <div className="space-y-2 sm:w-1/5">
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
          <div className="container columns-1 gap-4 sm:columns-2">
            {project.metadata.thumbnails.length > 0 &&
              project.metadata.thumbnails.map((thumbnail, index) => {
                return (
                  <Image
                    key={`thumb-${index}`}
                    src={thumbnail}
                    alt="Project thumbnail"
                    className="mb-4 w-full cursor-pointer rounded-xl"
                    onClick={() => {
                      setSelectedThumbnail(thumbnail);
                    }}
                    width={800}
                    height={800}
                    priority
                  />
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
