import type { BlogPostMetadata } from '@modules/blog/types/blog.types';
import { POSTS_DIRECTORY } from '@modules/blog/utils/constants';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import BlogLatest from '@modules/sections/components/blog/blog-latest/blog-latest';
import fs from 'fs';
import type { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import React from 'react';

interface IBlogPageProps {
  blogPosts: BlogPostMetadata[];
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
  const postSlugs = fs.readdirSync(POSTS_DIRECTORY);
  const blogPosts: BlogPostMetadata[] = await Promise.all(
    postSlugs.map(async (slug) => {
      const realSlug = slug.replace(/\.mdx$/, '');
      const path = join(POSTS_DIRECTORY, `${realSlug}.mdx`);
      const fileContents = fs.readFileSync(path, 'utf8');

      const serialized = await serialize(fileContents, {
        parseFrontmatter: true,
      });

      const postMetadata: BlogPostMetadata = {
        title: serialized.frontmatter.title,
        description: serialized.frontmatter.description,
        thumbnail: serialized.frontmatter.thumbnail,
        tags: serialized.frontmatter.tags as unknown as string[],
        date: serialized.frontmatter.date as unknown as Date,
      };

      return postMetadata;
    })
  );

  return {
    props: {
      blogPosts,
    },
  };
};

export default BlogPage;
