import Card from '@modules/ui/components/cards/card';
import React, { memo } from 'react';

import { BlogPost } from '@contentlayer/generated';
import PostCardAuthorDetails from './common/post-card-author-details';
import PostCardTags from './common/post-card-tags';

type BlogPostCardProps = {
  /** Data to display in the blog post card. */
  blogPost: BlogPost;
  /** Optional: Variant of the project card. */
  variant?: 'landscape' | 'portrait';
};

const BlogPostCard: React.FC<BlogPostCardProps> = (props) => {
  const { blogPost, variant = 'portrait' } = props;

  return (
    <Card href={blogPost.slug} title={blogPost.title} thumbnail={blogPost.image} variant={variant}>
      {/* Author & Date */}
      <PostCardAuthorDetails author={blogPost.author} date={new Date(blogPost.publishDate)} />
      {/* Tags */}
      <PostCardTags tags={blogPost.tags} />
      {/* Description */}
      <p className="line-clamp">{blogPost.description}</p>
    </Card>
  );
};

export default memo(BlogPostCard);
