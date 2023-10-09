'use client';

import { useBlogPostContext } from '@modules/blog/hooks/use-blog-post-context';
import React, { useEffect, useRef } from 'react';

const BlogPostViewReport: React.FC = () => {
  const blogPost = useBlogPostContext((s) => s.blogPost);

  const url = useRef<URL>(new URL(`/api/blog/${blogPost.slugAsParams}/view`, process.env.NEXT_PUBLIC_URL));

  useEffect(() => {
    fetch(url.current, {
      method: 'POST',
    });
  }, []);

  return null;
};

export default BlogPostViewReport;
