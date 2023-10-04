import { siteConfig } from '@config/config';
import { allBlogPosts, allProjects } from '@contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogPosts.map((post) => ({
    url: `${siteConfig.url}${post.slug}`,
    lastModified: post.publishDate,
  }));

  const projects = allProjects.map((project) => ({
    url: `${siteConfig.url}${project.slug}`,
    lastModified: project.publishDate,
  }));

  const routes = ['', '/blog', '/projects'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...projects];
}
