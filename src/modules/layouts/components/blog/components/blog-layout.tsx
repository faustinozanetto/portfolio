import type { BlogPostCompiled } from '@modules/blog/types/blog.types';
import Section from '@modules/sections/components/section/section';
import Button from '@modules/ui/components/buttons/button';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { FiCalendar } from 'react-icons/fi';

import BaseLayout from '../../base/base-layout';

interface IBlogLayoutProps {
  blogPostCompiled: BlogPostCompiled;
}

const components = { Button };

const BlogLayout: React.FC<IBlogLayoutProps> = (props) => {
  const { blogPostCompiled } = props;
  return (
    <BaseLayout
      headProps={{
        title: `${blogPostCompiled.blogPost.metadata.title} | Faustino Zanetto`,
      }}
    >
      <Section>
        {/* Metadata */}
        <div className="flex flex-col text-neutral-900 dark:text-neutral-100">
          <h1 className="text-4xl font-extrabold leading-10 text-blue-500 dark:text-blue-300 sm:text-5xl sm:leading-normal">
            {blogPostCompiled.blogPost.metadata.title}
          </h1>
          <div className="flex flex-col space-y-0.5 sm:space-y-1">
            <p className="text-base font-medium sm:text-lg">{blogPostCompiled.blogPost.metadata.description}</p>
            <div className="flex flex-row items-center space-x-1">
              <FiCalendar size={22} />
              <span className="font-semibold">{new Date(blogPostCompiled.blogPost.metadata.date).toDateString()}</span>
            </div>
            <div className="flex space-x-1">
              <span className="font-bold">Tags: </span>
              {blogPostCompiled.blogPost.metadata.tags.map((tag, index) => {
                return (
                  <span key={tag} className="font-medium">
                    {tag}
                    {index >= 0 && index !== blogPostCompiled.blogPost.metadata.tags.length - 1 ? ' - ' : null}
                  </span>
                );
              })}
            </div>
          </div>
          <Image
            src={blogPostCompiled.blogPost.metadata.thumbnail}
            alt="Blog post thumbnail"
            width={1000}
            height={800}
            className="my-2 h-auto w-full rounded-xl drop-shadow-xl sm:my-4"
          />
          <div className="flex items-center space-x-2">
            <Image
              src={blogPostCompiled.blogPost.metadata.author.image}
              alt={`Blog Author ${blogPostCompiled.blogPost.metadata.author.name}`}
              width={50}
              height={50}
              className="rounded-3xl"
            />
            <span className="font-bold">{blogPostCompiled.blogPost.metadata.author.name}</span>
          </div>
        </div>
        <div className="blog-post py-4">
          <MDXRemote compiledSource={blogPostCompiled.compiledSource} components={components} />
        </div>
      </Section>
    </BaseLayout>
  );
};

export default BlogLayout;
