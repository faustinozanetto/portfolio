import useMediaQuery from '@hooks/use-media-query';
import type { BlogPost } from '@modules/blog/types/blog.types';
import CardsFeed from '@modules/ui/components/cards/feed/cards-feed';
import React from 'react';
import theme from 'tailwindcss/defaultTheme';

import BlogPostCard from '../cards/blog-post-card';

interface IBlogFeedProps {
  /** Blog posts to display in the feed */
  blogPosts: BlogPost[];
}

const BlogPostsFeed: React.FC<IBlogFeedProps> = (props) => {
  const { blogPosts } = props;
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.screens.sm}`);

  return (
    <CardsFeed
      data={blogPosts}
      render={(cardProps: BlogPost, index) => {
        return React.createElement(BlogPostCard, { key: index, blogPost: cardProps, variant: 'portrait' });
      }}
      renderFeatured={(cardProps: BlogPost) => {
        return React.createElement(BlogPostCard, {
          blogPost: cardProps,
          variant: isSmallDevice ? 'portrait' : 'landscape',
        });
      }}
    />
  );
};

export default BlogPostsFeed;
