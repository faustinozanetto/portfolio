import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import PostParser from '@modules/blog/utils/posts-parser';
import * as fs from 'fs';
import { POSTS_DIRECTORY } from '@modules/blog/utils/constants';
import type { BlogPostMetadata, BlogPostSlug } from '@modules/blog/types/blog.types';
import BlogLayout from '@modules/layouts/components/blog/components/blog-layout';

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
        slug: filename.replace(/\.md$/, ''),
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
  const postParser: PostParser = new PostParser(slug);
  const post = await postParser.parsePost();

  // @ts-ignore
  const postMetadata: BlogPostMetadata = {
    ...post.frontmatter,
  };

  return { props: { postSource: post.compiledSource, postMetadata } };
};

export default BlogPostPage;
