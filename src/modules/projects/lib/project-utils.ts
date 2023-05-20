import type { Project, ProjectData, ProjectSlug } from '../types/projects.types';
import projects from '../../../../content/projects/projects-data.json';

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
      return {
        metadata: {
          ...project,
        },
        slug: { slug: generateProjectSlug(project) },
      };
    })
  );

  return mappedProjects;
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
  const mappedProjects: Project[] = await Promise.all(
    projects
      .filter((project) => project.isFeatured)
      .map(async (project) => {
        return {
          metadata: {
            ...project,
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
  const foundProject = projects.find((project: ProjectData) => {
    return generateProjectSlug(project) === slug.slug;
  });
  if (!foundProject) throw new Error('Could not find project with the given slug');
  return { metadata: { ...foundProject }, slug };
};
