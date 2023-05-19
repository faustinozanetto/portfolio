import { getAllBlogPosts } from '@modules/blog/lib/blog-utils';
import { getFeaturedProjects } from '@modules/projects/lib/project-utils';
import HomeAboutMe from '@modules/sections/components/home/about-me/home-aboutme';
import HomeBlog from '@modules/sections/components/home/blog/home-blog';
import HomeEducation from '@modules/sections/components/home/education/home-education';
import HomeHero from '@modules/sections/components/home/hero/home-hero';
import HomeProjects from '@modules/sections/components/home/projects/home-projects';

export default async function HomePage() {
  let blogPosts = await getAllBlogPosts();
  blogPosts = blogPosts.slice(0, 4);
  const projects = await getFeaturedProjects();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <HomeHero />
      <HomeAboutMe />
      <HomeProjects projects={projects} />
      <HomeEducation />
      <HomeBlog blogPosts={blogPosts} />
    </div>
  );
}
