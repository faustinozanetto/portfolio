import { getAllBlogPostFiles, getBlogPostBySlug } from '@modules/blog/lib/blog-utils';
import type { BlogPostCompiled } from '@modules/blog/types/blog.types';
import BlogLayout from '@modules/layouts/components/blog/components/blog-layout';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type BlogPostPageProps = {
  blogPostCompiled: BlogPostCompiled;
};

const BlogPostPage: React.FC<BlogPostPageProps> = (props) => {
  const { blogPostCompiled } = props;
  return <BlogLayout blogPostCompiled={blogPostCompiled} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogPostFiles();

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  if (params === undefined) return { notFound: true };

  const slug: string = params.slug as string;
  try {
    const blogPost = await getBlogPostBySlug({ slug }).then((post) => {
      return post;
    });
    return { props: { blogPostCompiled: blogPost } };
  } catch (error) {
    return { notFound: true };
  }
};

export default BlogPostPage;
