import type { BlogPostMetadata, BlogPostSlug } from '@modules/blog/types/blog.types';
import { POSTS_DIRECTORY } from '@modules/blog/utils/constants';
import BlogLayout from '@modules/layouts/components/blog/components/blog-layout';
import * as fs from 'fs';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface IBlogPostPageProps {
  postSource: string;
  postMetadata: BlogPostMetadata;
}

const BlogPostPage: React.FC<IBlogPostPageProps> = (props) => {
  const { postSource, postMetadata } = props;
  return <BlogLayout postSource={postSource} postMetadata={postMetadata} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames: string[] = fs.readdirSync(POSTS_DIRECTORY);

  const paths: { params: BlogPostSlug }[] = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx$/, ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug: string = context.params.slug as string;
  const realSlug = slug.replace(/\.mdx$/, '');
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
    },
  });

  const postMetadata: BlogPostMetadata = {
    title: serialized.frontmatter.title,
    description: serialized.frontmatter.description,
    thumbnail: serialized.frontmatter.thumbnail,
    tags: serialized.frontmatter.tags as unknown as string[],
    date: serialized.frontmatter.date as unknown as Date,
  };

  return { props: { postSource: serialized.compiledSource, postMetadata } };
};

export default BlogPostPage;
