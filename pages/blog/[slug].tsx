import React from 'react';
import { BlogLayout } from '../../layouts/blog/BlogLayout';
import { PostTypes } from '../../types/blog';
import { getAllPosts, getPostBySlug } from '../api';

interface BlogPostProps {
  post: PostTypes;
  title: string;
  author: string;
  readTime: number;
  publishDate: string;
  content: any;
}

const BlogPost = ({
  title,
  author,
  readTime,
  publishDate,
  content,
}: BlogPostProps) => {
  return (
    <>
      <BlogLayout
        title={title}
        content={content}
        author={author}
        publishDate={publishDate}
        readTime={readTime}
      />
    </>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  //@ts-ignore
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default BlogPost;
