import BlogFeed from '@modules/blog/components/feed/blog-feed';
import type { BlogPost } from '@modules/blog/types/blog.types';
import LinkButton from '@modules/ui/components/buttons/button-link';
import { m } from 'framer-motion';
import React from 'react';

import Section from '../../section/section';

type HomeBlogProps = {
  blogPosts: BlogPost[];
};

const HomeBlog: React.FC<HomeBlogProps> = (props) => {
  const { blogPosts } = props;
  return (
    <Section id="blog">
      {/* Heading */}
      <m.h2
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
        className="mb-2 text-4xl font-extrabold text-primary-500 dark:text-primary-300 md:mb-4 md:text-5xl"
      >
        Checkout my Blog
      </m.h2>
      <m.p
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
        className="mb-2 text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
      >
        Below are some of the posts I´ve wrote across the years and are hosted here in my personal blog for people to
        read them and learn something more about me. You can find posts about technical topic such as web development or
        game programming and also gardening stuff!.
      </m.p>
      {/* Feed */}
      <BlogFeed blogPosts={blogPosts} />
      <LinkButton className="w-full md:w-auto" href="/blog">
        Checkout More
      </LinkButton>
    </Section>
  );
};

export default HomeBlog;
