import React from 'react';
import { allBlogPosts, allProjects } from '@contentlayer/generated';

import HomeBlog from '@modules/sections/components/home/blog/home-blog';
import HomeContact from '@modules/sections/components/home/contact/home-contact';
import HomeEducation from '@modules/sections/components/home/education/home-education';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';
import HomeSkills from '@modules/sections/components/home/skills/home-skills';
import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import ScrollToTop from '@modules/common/components/scroll-to-top';

export default function HomePage() {
  const blogPosts = allBlogPosts.slice(0, 4);
  const projects = allProjects
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 4);

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <HomeHero />
      <HomeAboutMe />
      <HomeSkills />
      <HomeProjects projects={projects} />
      <HomeEducation />
      <HomeBlog blogPosts={blogPosts} />
      <HomeContact />
      <ScrollToTop />
    </div>
  );
}
