'use client';

import useMediaQuery from '@hooks/use-media-query';
import CardsFeed from '@modules/ui/components/cards/feed/cards-feed';
import React from 'react';
import theme from 'tailwindcss/defaultTheme';

import { BlogPost } from '@contentlayer/generated';
import BlogPostCard from '../cards/blog-post-card';

type BlogFeedProps = {
  /** Blog posts to display in the feed */
  blogPosts: BlogPost[];
};

const BlogPostsFeed: React.FC<BlogFeedProps> = (props) => {
  const { blogPosts } = props;
  const isMediumDevice = useMediaQuery(`(max-width: ${theme.screens.md}`);

  return (
    <CardsFeed
      data={blogPosts}
      render={(cardProps, index) =>
        React.createElement(BlogPostCard, { key: index, blogPost: cardProps, variant: 'portrait' })
      }
      renderFeatured={(cardProps) =>
        React.createElement(BlogPostCard, {
          blogPost: cardProps,
          variant: isMediumDevice ? 'portrait' : 'landscape',
        })
      }
    />
  );
};

export default BlogPostsFeed;
