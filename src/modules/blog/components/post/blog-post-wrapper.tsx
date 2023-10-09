'use client';

import React from 'react';

import { BlogPost as BlogPostData } from '@contentlayer/generated';
import BlogPost from './blog-post';
import BlogPostProvider from './context/blog-post-provider';

type BlogPostWrapperProps = {
  blogPost: BlogPostData;
};

const BlogPostWrapper: React.FC<BlogPostWrapperProps> = (props) => {
  const { blogPost } = props;

  return (
    <BlogPostProvider blogPost={blogPost}>
      <BlogPost />
    </BlogPostProvider>
  );
};

export default BlogPostWrapper;
