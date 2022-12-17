import type { BlogPostMetadata } from '@modules/blog/types/blog.types';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FiEye } from 'react-icons/fi';

interface IBlogPostCardProps {
  blogPost: BlogPostMetadata;
}

const BlogPostCard: React.FC<IBlogPostCardProps> = (props) => {
  const { blogPost } = props;

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
      <div className="max-w-sm rounded-md bg-gray-100 shadow-lg">
        {/* Image */}
        <div className="relative h-[180px]">
          <Image src={blogPost.thumbnail} alt={blogPost.title} objectFit="cover" layout="fill" />
        </div>
        {/* Bottom Information */}
        <div className="flex flex-col items-start p-4">
          {/* Title */}
          <span className="text-xl font-bold text-gray-900">{blogPost.title}</span>
          {/* Technology Badges */}
          <div className="flex flex-row space-x-2">
            {blogPost.tags.map((tag) => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
          {/* Description */}
          <p className="text-sm text-gray-900 sm:text-base">{blogPost.description}</p>
          {/* Buttons */}
          <div className="mt-2 flex w-full flex-row items-center justify-between">
            {/* Preview Link */}
            <LinkButton size="md" className="w-full" href="" target="_blank" leftIcon={<FiEye size={22} />}>
              Read More
            </LinkButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
