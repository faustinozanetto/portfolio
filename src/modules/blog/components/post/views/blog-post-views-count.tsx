'use client';

import React from 'react';
import { useBlogPostContext } from '@modules/blog/hooks/use-blog-post-context';

const BlogPostViewsCount: React.FC = () => {
  const views = useBlogPostContext((s) => s.views);

  return (
    <div
      className="px-2 py-1 bg-background border shadow rounded flex items-center justify-center gap-2 text-sm font-bold"
      aria-label={`Blog Post Views: ${views}`}
    >
      {views}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-4 stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="2" />
        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
      </svg>
    </div>
  );
};

export default BlogPostViewsCount;
