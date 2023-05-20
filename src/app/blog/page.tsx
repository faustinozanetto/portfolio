'use client';

import { allBlogPosts } from '@contentlayer/generated';
import BlogFeed from '@modules/blog/components/feed/blog-feed';
import { motion } from 'framer-motion';

export default async function BlogPage() {
  return (
    <section className="container mx-auto my-8 w-full max-w-5xl items-start justify-center p-4 md:my-12 md:max-w-6xl md:p-8 lg:my-16 lg:max-w-7xl">
      {/* Titles */}
      <motion.h1
        className="mb-2 text-4xl font-extrabold text-primary-600 dark:text-primary-300 md:mb-4 md:text-5xl"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
        }}
      >
        Check out my latest work and news, here in my blog
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="mb-2 text-neutral-900 dark:text-neutral-100 md:mb-4 md:text-lg"
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: 0.25,
          delay: 0.15,
        }}
      >
        Look through my latest post in my blog to stay up to date with new projects and news about my personal and
        profesional carreer in the it industry. You&apos;ll find posts detailing the development of my personal projects
        and other topics.
      </motion.p>

      <BlogFeed blogPosts={allBlogPosts} />
    </section>
  );
}
