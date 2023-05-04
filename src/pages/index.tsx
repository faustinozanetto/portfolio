import { getAllBlogPosts } from '@modules/blog/lib/blog-utils';
import type { BlogPost } from '@modules/blog/types/blog.types';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import { getFeaturedProjects } from '@modules/projects/lib/project-utils';
import type { Project } from '@modules/projects/types/projects.types';
import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import HomeBlog from '@modules/sections/components/home/blog/home-blog';
import HomeEducation from '@modules/sections/components/home/education/home-education';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';
import type { GetStaticProps } from 'next';
import React from 'react';

type HomePageProps = {
  blogPosts: BlogPost[];
  projects: Project[];
};

const HomePage: React.FC<HomePageProps> = (props) => {
  const { blogPosts, projects } = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Home Page | Faustino Zanetto',
        description:
          'My web developer portfolio showcases my work and skills in various projects, with a focus on creating effective and visually appealing solutions.',
      }}
    >
      <HomeHero />
      <HomeAboutMe />
      <HomeProjects projects={projects} />
      <HomeEducation />
      <HomeBlog blogPosts={blogPosts} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getAllBlogPosts().then((posts) => {
    return posts.slice(0, 4);
  });
  const projects: Project[] = await getFeaturedProjects();
  return { props: { blogPosts, projects } };
};

export default HomePage;
