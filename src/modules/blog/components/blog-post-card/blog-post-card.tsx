import type { BlogPostMetadata, BlogPostSlug } from '@modules/blog/types/blog.types';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FiEye } from 'react-icons/fi';

interface IBlogPostCardProps {
  blogPost: BlogPostMetadata;
  blogSlug: BlogPostSlug;
}

const BlogPostCard: React.FC<IBlogPostCardProps> = (props) => {
  const { blogPost, blogSlug } = props;

  return (
    <motion.div
      initial="visible"
      whileHover="hover"
      variants={{
        visible: {
          transform: 'scale(1.0)',
        },
        hover: {
          transform: 'scale(1.05)',
        },
      }}
    >
      <div className="w-full rounded-lg bg-neutral-100 shadow-lg dark:bg-neutral-800 md:max-w-sm">
        {/* Image */}
        <div className="relative h-[180px]">
          <Image src={blogPost.thumbnail} alt={blogPost.title} objectFit="cover" layout="fill" priority />
        </div>
        {/* Bottom Information */}
        <div className="flex flex-col items-start p-4 text-neutral-900 dark:text-neutral-100">
          {/* Title */}
          <span className="text-xl font-bold">{blogPost.title}</span>
          {/* Technology Badges */}
          <div className="flex flex-row space-x-2">
            {blogPost.tags.map((tag) => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
          {/* Description */}
          <p className="text-sm sm:text-base">{blogPost.description}</p>
          {/* Buttons */}
          <div className="mt-2 flex w-full flex-row items-center justify-between">
            {/* Preview Link */}
            <LinkButton size="md" className="w-full" href={`/blog/${blogSlug.slug}`} leftIcon={<FiEye size={22} />}>
              Read More
            </LinkButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
