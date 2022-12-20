import type { BlogPost } from '@modules/blog/types/blog.types';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FiEye } from 'react-icons/fi';

interface IBlogPostCardProps {
  blogPost: BlogPost;
}

const BlogPostCard: React.FC<IBlogPostCardProps> = (props) => {
  const { blogPost } = props;

  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: {
          translateY: '-5px',
        },
      }}
    >
      <div className="w-full rounded-lg bg-neutral-100 shadow-lg dark:bg-neutral-800 md:max-w-sm">
        {/* Image */}
        <div className="relative h-[180px]">
          <Image
            src={blogPost.metadata.thumbnail}
            alt={blogPost.metadata.title}
            className="rounded-t-lg"
            objectFit="cover"
            layout="fill"
            priority
          />
        </div>
        {/* Bottom Information */}
        <div className="flex w-full flex-col space-y-1 p-4 text-neutral-900 dark:text-neutral-100">
          {/* Title */}
          <span className="text-xl font-bold">{blogPost.metadata.title}</span>
          {/* Author */}
          <div className="flex items-center space-x-2">
            <Image
              src={blogPost.metadata.author.image}
              alt={`Blog Author ${blogPost.metadata.author.name}`}
              width={50}
              height={50}
              className="rounded-3xl"
            />
            <span className="font-bold">{blogPost.metadata.author.name}</span>
          </div>
          {/* Tags */}
          <div className="flex space-x-1">
            <span className="font-bold">Tags: </span>
            {blogPost.metadata.tags.map((tag, index) => {
              return (
                <span key={tag} className="font-medium">
                  {tag}
                  {index >= 0 && index !== blogPost.metadata.tags.length - 1 ? ' - ' : null}
                </span>
              );
            })}
          </div>
          {/* Description */}
          <p className="trucated-text grow text-base sm:text-lg">{blogPost.metadata.description}</p>

          {/* Preview Link */}
          <LinkButton size="md" className="w-full " href={`/blog/${blogPost.slug.slug}`} leftIcon={<FiEye size={22} />}>
            Read More
          </LinkButton>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
