import useFilterData from '@hooks/use-filter-data';
import BlogFeed from '@modules/blog/components/feed/blog-feed';
import { getAllBlogPosts } from '@modules/blog/lib/blog-utils';
import type { BlogPost } from '@modules/blog/types/blog.types';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import Section from '@modules/sections/components/section/section';
import clsx from 'clsx';
import { m } from 'framer-motion';
import type { GetStaticProps } from 'next';
import React from 'react';

interface IBlogPageProps {
  blogPosts: BlogPost[];
}

const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const { blogPosts } = props;
  /**
   * Function that generates the posible filters from the projects.
   * @returns The posible filters.
   */
  const getFiltersFunc = (): string[] => {
    const filtersSet = new Set<string>();
    blogPosts.map((project) => project.metadata.tags).map((tags) => tags.forEach((tag) => filtersSet.add(tag)));
    return Array.from(filtersSet.values());
  };

  /**
   * Function that handles the filtering for the useFilterData hook.
   * @param data The data to filter.
   * @param filter The selected filter.
   * @returns The filtered data.
   */
  const filterFunc = (data: BlogPost[], filter: string): BlogPost[] => {
    return data.filter((project) => project.metadata.tags.includes(filter));
  };

  const { filteredData, posibleFilters, selectedFilter, setSelectedFilter } = useFilterData<BlogPost, string>(
    blogPosts,
    'all',
    getFiltersFunc,
    filterFunc
  );

  return (
    <BaseLayout
      headProps={{
        title: 'Blog | Faustino Zanetto',
        description:
          'Home page of my personal portfolio, where you can find more information about me and the projects ive worked on.',
      }}
    >
      <Section className="my-4 bg-neutral-100 dark:bg-neutral-900 md:my-10 lg:my-14">
        <div className="flex flex-col space-y-4 text-neutral-900 dark:text-neutral-100 md:space-y-8">
          {/* Titles */}
          <m.h2
            className="text-center text-3xl font-extrabold leading-10 text-primary-500 dark:text-primary-300  md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'tween',
              duration: 0.15,
            }}
          >
            Check out my latest work and news, here in my blog
          </m.h2>

          {/* Paragraph */}
          <m.p
            className="text-center text-base md:text-lg"
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
          >
            Look through my latest post in my blog to stay up to date with new projects and news about my personal and
            profesional carreer in the it industry. You&apos;ll find posts detailing the development of my personal
            projects and other topics.
          </m.p>

          <div className="flex flex-col items-start">
            <m.h3
              className="text-center text-2xl font-extrabold leading-10 text-primary-500 dark:text-primary-300"
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'tween',
                duration: 0.35,
              }}
            >
              Filter by Tags
            </m.h3>
            <m.div
              className="flex flex-wrap items-center justify-center space-x-2"
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'tween',
                duration: 0.25,
              }}
            >
              {posibleFilters.concat('all').map((tag, index) => {
                return (
                  <m.span
                    key={tag}
                    className={clsx(
                      'cursor-pointer hover:text-primary-500 dark:hover:text-primary-300 md:text-lg',
                      selectedFilter === tag
                        ? 'font-bold text-primary-500 dark:text-primary-300'
                        : 'text-neutral-800 dark:text-neutral-300'
                    )}
                    onClick={() => setSelectedFilter(tag)}
                    initial={{ opacity: 0, translateY: -20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'tween',
                      duration: (index + 1) * 0.1,
                    }}
                  >
                    {tag}
                  </m.span>
                );
              })}
            </m.div>
          </div>
          <BlogFeed blogPosts={filteredData} />
        </div>
      </Section>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getAllBlogPosts().then((posts) => {
    return posts;
  });
  return { props: { blogPosts } };
};

export default BlogPage;
