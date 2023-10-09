'use client';

import React from 'react';

import { BlogPost as BlogPostData } from '@contentlayer/generated';
import BlogPost from './blog-post';
import BlogPostProvider from './context/blog-post-provider';

type BlogPostWrapperProps = {
  blogPost: BlogPostData;
  views: number;
};

const BlogPostWrapper: React.FC<BlogPostWrapperProps> = (props) => {
  const { blogPost, views } = props;

  return (
    <BlogPostProvider blogPost={blogPost} views={views}>
      <BlogPost />
    </BlogPostProvider>
  );
};

export default BlogPostWrapper;
