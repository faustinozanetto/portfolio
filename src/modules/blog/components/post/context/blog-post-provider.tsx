'use client';

import React, { useRef } from 'react';
import { BlogSliceState, BlogPostStore, createBlogPostStore } from '@modules/blog/state/blog.slice';
import { BlogPostContext } from './blog-post-context';

type BlogPostProviderProps = React.PropsWithChildren<BlogSliceState>;

const BlogPostProvider: React.FC<BlogPostProviderProps> = (props) => {
  const { children, ...rest } = props;

  const storeRef = useRef<BlogPostStore>();

  if (!storeRef.current) {
    storeRef.current = createBlogPostStore(rest);
  }
  return <BlogPostContext.Provider value={storeRef.current}>{children}</BlogPostContext.Provider>;
};

export default BlogPostProvider;
