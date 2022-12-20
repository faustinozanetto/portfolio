import { getAllBlogPosts } from '@modules/blog/lib/blog-utils';
import type { BlogPost } from '@modules/blog/types/blog.types';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import BlogLatest from '@modules/sections/components/blog/blog-latest/blog-latest';
import type { GetStaticProps } from 'next';
import React from 'react';

interface IBlogPageProps {
  blogPosts: BlogPost[];
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
  const blogPosts = await getAllBlogPosts().then((posts) => {
    return posts;
  });
  return { props: { blogPosts } };
};

export default BlogPage;
