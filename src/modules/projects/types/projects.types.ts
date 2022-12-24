export type ProjectData = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectLink: string;
  repoLink: string;
};

export type ProjectSlug = {
  slug: string;
};

export type Project = {
  data: ProjectData;
  slug: ProjectSlug;
};
