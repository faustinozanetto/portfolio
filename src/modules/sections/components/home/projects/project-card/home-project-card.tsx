import type { Project } from '@modules/projects/types/projects.types';
import { motion } from 'framer-motion';
import NextImage from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

interface IHomeProjectCardProps {
  project: Project;
}

const HomeProjectCard: React.FC<IHomeProjectCardProps> = (props) => {
  const { project } = props;

  return (
    <Link href={`/projects/${project.slug.slug}`}>
      <motion.div
        initial="visible"
        whileHover="hover"
        variants={{
          visible: {
            transform: 'scale(1.0)',
          },
          hover: {
            transform: 'scale(1.05)',
          },
        }}
      >
        <div className="group w-full cursor-pointer overflow-hidden rounded-lg bg-neutral-100 shadow-lg transition-all dark:bg-neutral-900">
          {/* Image */}
          <div className="relative h-[180px]">
            <NextImage src={project.data.image} alt={project.data.title} objectFit="cover" layout="fill" />
          </div>

          {/* Bottom Information */}
          <div className="flex flex-col items-start p-4 text-neutral-900 dark:text-neutral-100">
            {/* Title */}
            <span className="text-xl font-bold">{project.data.title}</span>
            {/* Technology Badges */}
            <div className="flex flex-wrap gap-1">
              {project.data.technologies.map((technology, index) => {
                return (
                  <span key={index} className="font-bold text-blue-500 dark:text-blue-300">
                    {technology}
                  </span>
                );
              })}
            </div>
            {/* Description */}
            <p className="text-sm sm:text-base">{project.data.description}</p>
            {/* Buttons */}

            {/* <div className="mt-2 flex w-full flex-row items-center space-x-2">

              <LinkButton
                size="md"
                className="w-full"
                href={project.data.projectLink}
                target="_blank"
                leftIcon={<FiEye size={22} />}
              >
                Preview
              </LinkButton>

              <LinkButton
                size="md"
                className="w-full"
                variant="outline"
                target="_blank"
                href={project.data.repoLink}
                leftIcon={<BiGitRepoForked size={22} />}
              >
                Repo
              </LinkButton>
            </div> */}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default HomeProjectCard;
