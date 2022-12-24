import BlogFeed from '@modules/blog/components/feed/blog-feed';
import type { BlogPost } from '@modules/blog/types/blog.types';
import Section from '@modules/sections/components/section/section';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

interface IBlogLatestProps {
  blogPosts: BlogPost[];
}

const BlogLatest: React.FC<IBlogLatestProps> = (props) => {
  const { blogPosts } = props;
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const retrievePostTags = useMemo(() => {
    const tagsSet = new Set<string>();
    blogPosts
      .map((post) => post.metadata.tags)
      .map((tags) =>
        tags.forEach((tag) => {
          tagsSet.add(tag);
        })
      );
    return Array.from(tagsSet.values());
  }, []);

  const filteredBlogPosts = useMemo(() => {
    let filteredPosts: BlogPost[] = blogPosts;
    if (selectedTag !== 'all') {
      filteredPosts = blogPosts.filter((post) => post.metadata.tags.includes(selectedTag));
    }
    return filteredPosts;
  }, [selectedTag]);

  return (
    <Section className="my-4 bg-neutral-100 dark:bg-neutral-900 sm:my-10 md:my-14">
      <div className="flex flex-col space-y-4 text-neutral-900 dark:text-neutral-100 sm:space-y-8">
        {/* Titles */}
        <h2 className="text-center text-3xl font-extrabold leading-10 text-blue-500 dark:text-blue-300 sm:text-4xl md:text-5xl">
          Check out my latest work and news, here in my blog
        </h2>

        {/* Paragraph */}
        <p className="text-base font-medium sm:text-lg">
          Look through my latest post in my blog to stay up to date with new projects and news about my personal and
          profesional carreer in the it industry. You&apos;ll find posts detailing the development of my personal
          projects and other topics.
        </p>

        <div className="flex flex-col items-start">
          <h3 className="text-center text-2xl font-extrabold leading-10 text-blue-500 dark:text-blue-300">
            Filter by Tags
          </h3>
          <div className="flex flex-wrap items-center justify-center space-x-2">
            {retrievePostTags.concat('all').map((tag) => {
              return (
                <span
                  key={tag}
                  className={clsx(
                    'cursor-pointer  hover:text-blue-500 dark:hover:text-blue-300 sm:text-lg',
                    selectedTag === tag
                      ? 'font-bold text-blue-500 dark:text-blue-300'
                      : 'text-neutral-800 dark:text-neutral-300'
                  )}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <BlogFeed blogPosts={filteredBlogPosts} />
      </div>
    </Section>
  );
};

export default BlogLatest;
