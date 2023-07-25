export type ProjectLink = {
  exists: boolean;
  link?: string;
};

export type ProjectData = {
  description: string;
  isFeatured: boolean;
  projectLink: ProjectLink;
  repoLink: ProjectLink;
  technologies: string[];
  thumbnails: string[];
  title: string;
};

export type ProjectSlug = {
  slug: string;
};

export type Project = {
  metadata: ProjectData;
  slug: ProjectSlug;
};
