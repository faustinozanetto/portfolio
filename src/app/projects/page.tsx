import React from 'react';

import { getAllProjects } from '@modules/projects/lib/project-utils';
import { ProjectsPageList } from '@modules/projects/components/projects-page-list';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return <ProjectsPageList projects={projects} />;
}
