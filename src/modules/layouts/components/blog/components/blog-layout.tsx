import PostCardAuthorDetails from '@modules/blog/components/cards/common/post-card-author-details';
import PostCardTags from '@modules/blog/components/cards/common/post-card-tags';
import PostAuthorDetails from '@modules/blog/components/post/post-author-details';
import type { BlogPostCompiled } from '@modules/blog/types/blog.types';
import Section from '@modules/sections/components/section/section';
import Button from '@modules/ui/components/buttons/button';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

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
        <article className="flex flex-col items-center justify-center text-neutral-900 dark:text-neutral-100">
          {/* Metadata */}
          <div className="flex flex-col">
            <h1 className="mb-2 text-center text-3xl font-extrabold leading-10 text-blue-500 dark:text-blue-300 sm:mb-4 sm:text-4xl sm:leading-normal md:mb-6">
              {blogPostCompiled.blogPost.metadata.title}
            </h1>
            {/* Description */}
            <p className="text-base font-medium sm:text-lg">{blogPostCompiled.blogPost.metadata.description}</p>

            {/* Author & Date */}
            <PostCardAuthorDetails
              author={blogPostCompiled.blogPost.metadata.author}
              date={blogPostCompiled.blogPost.metadata.date}
            />

            {/* Tagss */}
            <PostCardTags tags={blogPostCompiled.blogPost.metadata.tags} />

            {/* Thumbnail */}
            <Image
              src={blogPostCompiled.blogPost.metadata.thumbnail}
              alt="Blog post thumbnail"
              width={1000}
              height={1000}
              className="my-2 h-auto w-full rounded-xl drop-shadow-xl sm:my-4"
            />
          </div>
          {/* Actual post from mdx file */}
          <div className="blog-post prose prose-neutral w-full max-w-none py-4 dark:prose-invert">
            <MDXRemote compiledSource={blogPostCompiled.compiledSource} components={components} />
          </div>
          {/* Author bottom details */}
          <PostAuthorDetails blogAuthor={blogPostCompiled.blogPost.metadata.author} />
        </article>
      </Section>
    </BaseLayout>
  );
};

export default BlogLayout;
