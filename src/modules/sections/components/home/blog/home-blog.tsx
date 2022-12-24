import BlogFeed from '@modules/blog/components/feed/blog-feed';
import type { BlogPost } from '@modules/blog/types/blog.types';
import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';

import Section from '../../section/section';

interface IHomeBlogProps {
  blogPosts: BlogPost[];
}

const HomeBlog: React.FC<IHomeBlogProps> = (props) => {
  const { blogPosts } = props;
  return (
    <Section className="bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col items-center justify-center space-y-4 text-neutral-900 dark:text-neutral-100">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-500 dark:text-blue-300 sm:text-5xl">Checkout my Blog</h2>
        <p className="text-center text-base font-medium sm:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore odio praesentium placeat culpa esse
          doloribus in quaerat facilis quidem corporis, nisi error, quis maxime enim saepe! Incidunt quis aliquam,
          blanditiis nisi ratione maxime sapiente provident aut culpa autem alias soluta?
        </p>
        {/* Feed */}
        <BlogFeed blogPosts={blogPosts} />
        <LinkButton className="w-full sm:w-auto" href="/blog">
          Checkout More
        </LinkButton>
      </div>
    </Section>
  );
};

export default HomeBlog;
