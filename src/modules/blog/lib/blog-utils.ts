import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import type { BlogPost, BlogPostAuthor, BlogPostCompiled, BlogPostMetadata, BlogPostSlug } from '../types/blog.types';
import { POSTS_DIRECTORY } from '../utils/constants';

/**
 * Returns an array containing all the blog post slugs.
 * @returns The array of slugs.
 */
export const getAllBlogPostSlugs = (): BlogPostSlug[] => {
  const blogSlugs: BlogPostSlug[] = fs.readdirSync(POSTS_DIRECTORY).map((slug) => {
    return { slug };
  });
  return blogSlugs;
};

/**
 * Returns an array containing all the blog post file names.
 * @returns The array of file names.
 */
export const getAllBlogPostFiles = (): { params: BlogPostSlug }[] => {
  const filenames: string[] = fs.readdirSync(POSTS_DIRECTORY);

  const paths: { params: BlogPostSlug }[] = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx$/, ''),
      },
    };
  });
  return paths;
};

/**
 * Returns a promise of blog posts array containing the data of each post, containing the metadata and slug.
 * @returns The promise of blog posts.
 */
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const blogPosts: BlogPost[] = await Promise.all(
    getAllBlogPostSlugs().map(async (slug) => {
      const realSlug = slug.slug.replace(/\.mdx$/, '');
      const path = join(POSTS_DIRECTORY, `${realSlug}.mdx`);
      const fileContents = fs.readFileSync(path, 'utf8');

      const serialized = await serialize(fileContents, {
        parseFrontmatter: true,
      });

      const metadata: BlogPostMetadata = {
        title: serialized.frontmatter.title,
        description: serialized.frontmatter.description,
        thumbnail: serialized.frontmatter.thumbnail,
        tags: serialized.frontmatter.tags as unknown as string[],
        date: serialized.frontmatter.date as unknown as Date,
        author: serialized.frontmatter.author as unknown as BlogPostAuthor,
      };

      const parsedSlug: BlogPostSlug = { slug: realSlug };
      return { metadata, slug: parsedSlug };
    })
  );

  const sortedPosts: BlogPost[] = blogPosts.sort((a, b) => {
    return new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime();
  });

  return sortedPosts;
};

/**
 * Returns a blog post by a given slug if found.
 * @param slug Slug of the post to search.
 * @returns The promise of the blog post.
 */
export const getBlogPostBySlug = async (slug: BlogPostSlug): Promise<BlogPostCompiled> => {
  const realSlug = slug.slug.replace(/\.mdx$/, '');
  const path = join(POSTS_DIRECTORY, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(path, 'utf8');

  const serialized = await serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  });

  const metadata: BlogPostMetadata = {
    title: serialized.frontmatter.title,
    description: serialized.frontmatter.description,
    thumbnail: serialized.frontmatter.thumbnail,
    tags: serialized.frontmatter.tags as unknown as string[],
    date: serialized.frontmatter.date as unknown as Date,
    author: serialized.frontmatter.author as unknown as BlogPostAuthor,
  };

  return { blogPost: { slug, metadata }, compiledSource: serialized.compiledSource };
};
