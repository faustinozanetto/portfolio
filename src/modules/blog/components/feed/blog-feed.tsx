import useMediaQuery from '@hooks/use-media-query';
import type { BlogPost } from '@modules/blog/types/blog.types';
import React from 'react';

import BlogPostCard from '../cards/blog-post-card';

interface IBlogFeedProps {
  blogPosts: BlogPost[];
}

const BlogFeed: React.FC<IBlogFeedProps> = (props) => {
  const { blogPosts } = props;
  const isSmallDevice = useMediaQuery('(max-width: 640px');

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="sm:col-span-3">
        <BlogPostCard blogPost={blogPosts[0]} variant={isSmallDevice ? 'portrait' : 'landscape'} />
      </div>
      {blogPosts.slice(1, blogPosts.length).map((blogPost) => {
        return <BlogPostCard key={blogPost.metadata.title} blogPost={blogPost} />;
      })}
    </div>
  );
};

export default BlogFeed;
