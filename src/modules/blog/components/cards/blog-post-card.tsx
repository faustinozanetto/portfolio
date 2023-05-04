import type { BlogPost } from '@modules/blog/types/blog.types';
import Card from '@modules/ui/components/cards/card';
import React, { memo } from 'react';

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
    <Card
      href={`/blog/${blogPost.slug.slug}`}
      title={blogPost.metadata.title}
      thumbnail={blogPost.metadata.thumbnail}
      variant={variant}
    >
      {/* Author & Date */}
      <PostCardAuthorDetails author={blogPost.metadata.author} date={blogPost.metadata.date} />
      {/* Tags */}
      <PostCardTags tags={blogPost.metadata.tags} />
      {/* Description */}
      <p className="truncate-text">{blogPost.metadata.description}</p>
      {/* Preview Link */}
      {/* <LinkButton size="md" className="w-full " href={`/blog/${blogPost.slug.slug}`} leftIcon={<FiEye size={22} />}>
            Read More
          </LinkButton> */}
    </Card>
  );
};

export default memo(BlogPostCard);
