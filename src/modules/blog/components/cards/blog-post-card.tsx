import Card from '@modules/ui/components/cards/card';
import React, { memo } from 'react';

import PostCardAuthorDetails from './common/post-card-author-details';
import PostCardTags from './common/post-card-tags';
import { BlogPost } from '@contentlayer/generated';

type BlogPostCardProps = {
  /** Data to display in the blog post card. */
  blogPost: BlogPost;
  /** Optional: Variant of the project card. */
  variant?: 'landscape' | 'portrait';
};

const BlogPostCard: React.FC<BlogPostCardProps> = (props) => {
  const { blogPost, variant = 'portrait' } = props;

  return (
    <Card href={`${blogPost.slug}`} title={blogPost.title} thumbnail={blogPost.image} variant={variant}>
      {/* Author & Date */}
      <PostCardAuthorDetails author={blogPost.author} date={new Date(blogPost.publishDate)} />
      {/* Tags */}
      <PostCardTags tags={blogPost.tags} />
      {/* Description */}
      <p className="truncate-text">{blogPost.description}</p>
      {/* Preview Link */}
      {/* <LinkButton size="md" className="w-full " href={`/blog/${blogPost.slug.slug}`} leftIcon={<FiEye size={22} />}>
            Read More
          </LinkButton> */}
    </Card>
  );
};

export default memo(BlogPostCard);
