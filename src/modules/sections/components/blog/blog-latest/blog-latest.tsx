import BlogPostCard from '@modules/blog/components/blog-post-card/blog-post-card';
import type { BlogPostMetadata } from '@modules/blog/types/blog.types';
import Section from '@modules/sections/components/section/section';
import React from 'react';

interface IBlogLatestProps {
  blogPosts: BlogPostMetadata[];
}

const BlogLatest: React.FC<IBlogLatestProps> = (props) => {
  const { blogPosts } = props;
  return (
    <Section className="mb-4 bg-gray-100 sm:mb-10 md:mb-14">
      <div className="flex flex-col">
        {/* Titles */}
        <div className="mb-4 w-fit leading-10">
          <h1 className="text-5xl font-extrabold text-blue-600">Check out my latest work and news</h1>
        </div>
        {/* Paragraph */}
        <p className="text-lg font-medium text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, magni incidunt ut alias ex dolorem
          unde velit pariatur debitis quaerat.
        </p>

        <div className="grid gap-4 bg-gray-300 p-2">
          {blogPosts.map((blogPost) => {
            return <BlogPostCard key={blogPost.title} blogPost={blogPost} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default BlogLatest;
