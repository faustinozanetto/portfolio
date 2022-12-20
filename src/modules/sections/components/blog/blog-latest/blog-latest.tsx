import BlogPostCard from '@modules/blog/components/blog-post-card/blog-post-card';
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
        <div className="w-fit leading-10">
          <h1 className="text-5xl font-extrabold text-blue-500 dark:text-blue-300">
            Check out my latest work and news, here in my blog
          </h1>
        </div>
        {/* Paragraph */}
        <p className="text-lg font-medium">
          Look through my latest post in my blog to stay up to date with new projects and news about my personal and
          profesional carreer in the it industry. You&apos;ll find posts detailing the development of my personal
          projects and other topics.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blogPost) => {
            return <BlogPostCard key={blogPost.metadata.title} blogPost={blogPost} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default BlogLatest;
