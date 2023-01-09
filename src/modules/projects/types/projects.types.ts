export type ProjectLink = {
  exists: boolean;
  link?: string;
};

export type ProjectData = {
  title: string;
  description: string;
  thumbnails: string[];
  technologies: string[];
  projectLink: ProjectLink;
  repoLink: ProjectLink;
  stars?: number;
};

export type ProjectSlug = {
  slug: string;
};

export type Project = {
  metadata: ProjectData;
  slug: ProjectSlug;
};
