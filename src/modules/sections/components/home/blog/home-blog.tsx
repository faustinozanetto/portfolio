import BlogFeed from '@modules/blog/components/feed/blog-feed';
import type { BlogPost } from '@modules/blog/types/blog.types';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { m } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';

interface IHomeBlogProps {
  blogPosts: BlogPost[];
}

const HomeBlog: React.FC<IHomeBlogProps> = (props) => {
  const { blogPosts } = props;
  return (
    <Section>
      <div className="flex flex-col items-center justify-center space-y-4 text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'tween',
            duration: 0.25,
          }}
          className="text-4xl font-extrabold text-primary-500 dark:text-primary-300 md:text-5xl"
        >
          Checkout my Blog
        </m.h2>
        <m.p
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: 0.15,
          }}
          className="text-base md:text-center md:text-lg"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore odio praesentium placeat culpa esse
          doloribus in quaerat facilis quidem corporis, nisi error, quis maxime enim saepe! Incidunt quis aliquam,
          blanditiis nisi ratione maxime sapiente provident aut culpa autem alias soluta?
        </m.p>
        {/* Feed */}
        <BlogFeed blogPosts={blogPosts} />
        <LinkButton className="w-full md:w-auto" href="/blog">
          Checkout More
        </LinkButton>
      </div>
    </Section>
  );
};

export default HomeBlog;
