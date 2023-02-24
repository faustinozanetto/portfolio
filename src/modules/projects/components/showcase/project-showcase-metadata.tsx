import type { ProjectData } from '@modules/projects/types/projects.types';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';

type ProjectShowcaseMetadataProps = {
  metadata: ProjectData;
};

const ProjectShowcaseMetadata: React.FC<ProjectShowcaseMetadataProps> = (props) => {
  const { metadata } = props;
  const { title, date, description, technologies } = metadata;

  return (
    <div className="flex w-full flex-col space-y-2">
      <h1 className="text-start text-3xl font-extrabold leading-10 text-primary-500 dark:text-primary-300 md:text-5xl md:leading-normal">
        {title}
      </h1>

      <div className="flex flex-row items-center space-x-1">
        <FiCalendar size={22} />
        <time dateTime={new Date(date).toDateString()} className="font-semibold text-neutral-800 dark:text-neutral-200">
          {new Date(date).toDateString()}
        </time>
      </div>

      {/* Description */}
      <p className="text-base md:col-span-2 md:col-start-1 md:text-lg">{description}</p>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold leading-snug md:text-start md:text-xl md:leading-normal">
          {title} was built with:
        </h2>
        {technologies.map((technology) => {
          return (
            <span key={technology} className="text-base font-medium text-neutral-800 dark:text-neutral-300 md:text-lg">
              {`${technology} `}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowcaseMetadata;
