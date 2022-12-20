import { getAllBlogPosts } from '@modules/blog/lib/blog-utils';
import type { BlogPost } from '@modules/blog/types/blog.types';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import HomeBlog from '@modules/sections/components/home/blog/home-blog';
import HomeExperience from '@modules/sections/components/home/experience/home-experience';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';
import type { GetStaticProps } from 'next';
import React from 'react';

interface IHomePageProps {
  blogPosts: BlogPost[];
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { blogPosts } = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Home Page',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <HomeHero />
      <HomeAboutMe />
      <HomeExperience />
      <HomeProjects />
      <HomeBlog blogPosts={blogPosts} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getAllBlogPosts().then((posts) => {
    return posts.slice(0, 4);
  });
  return { props: { blogPosts } };
};

export default HomePage;
