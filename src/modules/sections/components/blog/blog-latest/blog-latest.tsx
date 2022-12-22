import BlogFeed from '@modules/blog/components/feed/blog-feed';
import type { BlogPost } from '@modules/blog/types/blog.types';
import Section from '@modules/sections/components/section/section';
import React from 'react';

interface IBlogLatestProps {
  blogPosts: BlogPost[];
}

const BlogLatest: React.FC<IBlogLatestProps> = (props) => {
  const { blogPosts } = props;

  return (
    <Section className="my-4 bg-neutral-100 dark:bg-neutral-900 sm:my-10 md:my-14">
      <div className="flex flex-col space-y-4 text-neutral-900 dark:text-neutral-100 sm:space-y-8">
        {/* Titles */}
        <h2 className="text-center text-5xl font-extrabold leading-10 text-blue-500 dark:text-blue-300">
          Check out my latest work and news, here in my blog
        </h2>

        {/* Paragraph */}
        <p className="text-base font-medium sm:text-lg">
          Look through my latest post in my blog to stay up to date with new projects and news about my personal and
          profesional carreer in the it industry. You&apos;ll find posts detailing the development of my personal
          projects and other topics.
        </p>

        <BlogFeed blogPosts={blogPosts} />
      </div>
    </Section>
  );
};

export default BlogLatest;
