import type { ProjectTechnology } from '@types/portfolio.types';

export type HomeProjectCardType = {
  title: string;
  description: string;
  image: string;
  technologies: ProjectTechnology[];
  projectLink: string;
  repoLink: string;
};
