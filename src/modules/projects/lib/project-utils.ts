import projects from '@data/projects/projects-data.json';
import { DEV } from '@modules/core/utils/constants';

import type { Project, ProjectData, ProjectSlug } from '../types/projects.types';

/**
 * Gets the amount of stars of a project from github.
 * @param project The project to fetch the stars.
 * @returns The stars.
 */
const getProjectStars = async (project: Partial<ProjectData>): Promise<number> => {
  try {
    if (DEV) return 0;

    const githubProjectName: string = project.repoLink.split('/').slice(-1)[0];

    const stars = await fetch(`https://api.github.com/repos/faustinozanetto/${githubProjectName}`)
      .then((res) => res.json())
      .then((repository) => repository.stargazers_count || 0);

    return stars;
  } catch (error) {
    throw new Error('An error occurred while trying to fetch project stars.');
  }
};

/**
 * Generates the project slug by a given project data. The format is converte all words to lowercase and join them with -. Example: Frontend Tools -> frontend-tools
 * @param projectData The project data to base the slug.
 * @returns The slug.
 */
const generateProjectSlug = (projectData: ProjectData): string => {
  const slug = projectData.title
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-');
  return slug;
};

/**
 * Returns an array containing all the projects slugs.
 * @returns The array of slugs.
 */
export const getAllProjectsSlugs = (): ProjectSlug[] => {
  const slugs: ProjectSlug[] = projects.map((project: ProjectData) => {
    return { slug: generateProjectSlug(project) };
  });
  return slugs;
};

/**
 * Returns an array of projects containing the data of each project and the slug.
 * @returns The array of projects.
 */
export const getAllProjects = async (): Promise<Project[]> => {
  const mappedProjects: Project[] = await Promise.all(
    projects.map(async (project) => {
      const projectStars = await await getProjectStars(project);

      return {
        metadata: {
          ...project,
          stars: projectStars,
        },
        slug: { slug: generateProjectSlug(project) },
      };
    })
  );

  return mappedProjects;
};

/**
 * Returns a project by a given slug if found.
 * @param slug Slug of the project to search.
 * @returns The project.
 */
export const getProjectBySlug = async (slug: ProjectSlug): Promise<Project> => {
  const foundProject: ProjectData = projects.find((project: ProjectData) => {
    return generateProjectSlug(project) === slug.slug;
  });
  if (!foundProject) throw new Error('Could not find project with the given slug');
  const stars = await getProjectStars(foundProject);
  return { metadata: { ...foundProject, stars }, slug };
};
