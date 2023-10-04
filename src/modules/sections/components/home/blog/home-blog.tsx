'use client';

import BlogFeed from '@modules/blog/components/feed/blog-feed';
import { motion } from 'framer-motion';
import React from 'react';

import { BlogPost } from '@contentlayer/generated';
import Link from 'next/link';
import Section from '../../section/section';

type HomeBlogProps = {
  blogPosts: BlogPost[];
};

const HomeBlog: React.FC<HomeBlogProps> = (props) => {
  const { blogPosts } = props;
  return (
    <Section id="blog" alternateColors>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
        className="mb-2 text-4xl font-extrabold text-primary md:mb-4 md:text-5xl"
      >
        Checkout my Blog
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
        className="mb-2 md:mb-4 md:text-lg"
      >
        Here is a selection of posts I have written over the years, all hosted on my personal blog. These articles offer
        readers the opportunity to delve deeper into my areas of expertise and gain insight into my diverse interests.
        Read more at{' '}
        <Link href="/blog" title="Blog" className="underline decoration-primary decoration-2">
          Blog
        </Link>
        .
      </motion.p>
      {/* Feed */}
      <BlogFeed blogPosts={blogPosts} />
    </Section>
  );
};

export default HomeBlog;
