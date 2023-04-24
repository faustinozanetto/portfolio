import type { ProjectData } from '@modules/projects/types/projects.types';
import { m } from 'framer-motion';
import React from 'react';

type ProjectShowcaseMetadataProps = {
  metadata: ProjectData;
};

const ProjectShowcaseMetadata: React.FC<ProjectShowcaseMetadataProps> = (props) => {
  const { metadata } = props;
  const { title, date, description, technologies } = metadata;

  return (
    <div className="flex w-full flex-col">
      <m.h1
        className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-primary-500 dark:text-primary-300 md:mb-4 md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
      >
        {title}
      </m.h1>

      {/* Date */}
      <m.div
        className="flex flex-row items-center space-x-1"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-neutral-900 dark:stroke-neutral-100"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <line x1="16" y1="3" x2="16" y2="7" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="4" y1="11" x2="20" y2="11" />
          <line x1="11" y1="15" x2="12" y2="15" />
          <line x1="12" y1="15" x2="12" y2="18" />
        </svg>
        <time dateTime={new Date(date).toDateString()} className="font-semibold text-neutral-900 dark:text-neutral-100">
          {new Date(date).toDateString()}
        </time>
      </m.div>

      {/* Description */}
      <m.p
        className="my-2 text-neutral-900 dark:text-neutral-100 md:my-4 md:text-lg"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.35,
        }}
      >
        {description}
      </m.p>

      {/* Technologies */}
      <m.div
        className="flex flex-wrap space-x-1"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.45,
        }}
      >
        <span className="font-semibold text-neutral-900 dark:text-neutral-100">Technologies: </span>
        {technologies.map((tag) => {
          return (
            <span key={tag} className="font-medium text-neutral-800 dark:text-neutral-200">
              {`#${tag}`}
            </span>
          );
        })}
      </m.div>
    </div>
  );
};

export default ProjectShowcaseMetadata;
