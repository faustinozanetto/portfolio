import type { BlogPost } from '@modules/blog/types/blog.types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';

import PostCardAuthorDetails from './common/post-card-author-details';
import PostCardTags from './common/post-card-tags';
import PostCardTitle from './common/post-card-title';

interface IBlogPostCardProps {
  blogPost: BlogPost;
  variant?: 'landscape' | 'portrait';
}

const BlogPostCard: React.FC<IBlogPostCardProps> = (props) => {
  const { blogPost, variant = 'portrait' } = props;

  return (
    <Link href={`/blog/${blogPost.slug.slug}`}>
      <div
        className={clsx(
          'group cursor-pointer overflow-hidden rounded-lg bg-neutral-100 shadow-lg transition-all dark:bg-neutral-800',
          variant === 'portrait' && 'w-full md:max-w-sm',
          variant === 'landscape' && 'grid grid-cols-2'
        )}
      >
        {/* Image */}
        <div className={clsx(variant === 'portrait' && 'h-[180px]')}>
          <Image
            src={blogPost.metadata.thumbnail}
            alt={blogPost.metadata.title}
            className="h-full bg-cover object-cover"
            sizes="80vw"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        {/* Bottom Information */}
        <div className="flex w-full flex-col space-y-1 p-4 text-neutral-900 dark:text-neutral-100">
          {/* Title */}
          <PostCardTitle title={blogPost.metadata.title} />
          {/* Author & Date */}
          <PostCardAuthorDetails author={blogPost.metadata.author} date={blogPost.metadata.date} />
          {/* Tags */}
          <PostCardTags tags={blogPost.metadata.tags} />
          {/* Description */}
          <p className="text-base font-medium sm:text-lg">{blogPost.metadata.description}</p>
          {/* Preview Link */}
          {/* <LinkButton size="md" className="w-full " href={`/blog/${blogPost.slug.slug}`} leftIcon={<FiEye size={22} />}>
            Read More
          </LinkButton> */}
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogPostCard);
