import type { BlogPostMetadata, BlogPostSlug } from '@modules/blog/types/blog.types';
import { POSTS_DIRECTORY } from '@modules/blog/utils/constants';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import BlogLatest from '@modules/sections/components/blog/blog-latest/blog-latest';
import fs from 'fs';
import type { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import React from 'react';

interface IBlogPageProps {
  blogPosts: { metadata: BlogPostMetadata; slug: BlogPostSlug }[];
}

const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const { blogPosts } = props;

  return (
    <BaseLayout
      headProps={{
        title: 'Blog | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <BlogLatest blogPosts={blogPosts} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogSlugs: BlogPostSlug[] = fs.readdirSync(POSTS_DIRECTORY).map((slug) => {
    return { slug };
  });
  const blogPosts: { metadata: BlogPostMetadata; slug: BlogPostSlug }[] = await Promise.all(
    blogSlugs.map(async (slug) => {
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
      };

      const parsedSlug: BlogPostSlug = { slug: realSlug };
      return { metadata, slug: parsedSlug };
    })
  );

  return {
    props: {
      blogPosts,
      blogSlugs,
    },
  };
};

export default BlogPage;
