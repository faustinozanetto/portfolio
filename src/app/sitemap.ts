import { siteConfig } from '@config/config';
import { allBlogPosts } from '@contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishDate,
  }));

  const routes = ['', '/blog', '/projects', '/about', '/contact'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
