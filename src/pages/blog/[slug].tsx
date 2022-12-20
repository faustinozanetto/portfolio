import { getAllBlogPostFiles, getBlogPostBySlug } from '@modules/blog/lib/blog-utils';
import type { BlogPostCompiled } from '@modules/blog/types/blog.types';
import BlogLayout from '@modules/layouts/components/blog/components/blog-layout';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface IBlogPostPageProps {
  blogPostCompiled: BlogPostCompiled;
}

const BlogPostPage: React.FC<IBlogPostPageProps> = (props) => {
  const { blogPostCompiled } = props;
  return <BlogLayout blogPostCompiled={blogPostCompiled} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogPostFiles();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug: string = context.params.slug as string;
  const blogPostCompiled: BlogPostCompiled = await getBlogPostBySlug({ slug }).then((post) => {
    return post;
  });

  return { props: { blogPostCompiled } };
};

export default BlogPostPage;
