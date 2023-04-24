import PostCardAuthorDetails from '@modules/blog/components/cards/common/post-card-author-details';
import PostCardTags from '@modules/blog/components/cards/common/post-card-tags';
import PostAuthorDetails from '@modules/blog/components/post/post-author-details';
import type { BlogPostCompiled } from '@modules/blog/types/blog.types';
import Section from '@modules/sections/components/section/section';
import { Button } from '@modules/ui/components/buttons/button';
import Image from '@modules/ui/components/images/image';
import { m } from 'framer-motion';
import { MDXRemote } from 'next-mdx-remote';

import BaseLayout from '../../base/base-layout';

type BlogLayoutProps = {
  blogPostCompiled: BlogPostCompiled;
};

const components = { Button };

const BlogLayout: React.FC<BlogLayoutProps> = (props) => {
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
          <div className="flex w-full flex-col">
            <m.h1
              className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-primary-500 dark:text-primary-300 md:mb-4 md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'tween',
                duration: 0.25,
              }}
            >
              {blogPostCompiled.blogPost.metadata.title}
            </m.h1>
            {/* Description */}
            <m.p
              className="mb-2 text-lg font-normal text-neutral-800 dark:text-neutral-300 md:mb-4 lg:text-xl"
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'tween',
                duration: 0.25,
                delay: 0.15,
              }}
            >
              {blogPostCompiled.blogPost.metadata.description}
            </m.p>

            {/* Author & Date */}
            <m.div
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'tween',
                duration: 0.25,
                delay: 0.25,
              }}
            >
              <PostCardAuthorDetails
                author={blogPostCompiled.blogPost.metadata.author}
                date={blogPostCompiled.blogPost.metadata.date}
              />
            </m.div>

            {/* Tags */}
            <m.div
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'tween',
                duration: 0.25,
                delay: 0.35,
              }}
            >
              <PostCardTags tags={blogPostCompiled.blogPost.metadata.tags} />
            </m.div>

            {/* Thumbnail */}
            <Image
              src={blogPostCompiled.blogPost.metadata.thumbnail}
              alt="Blog post thumbnail"
              width={500}
              height={500}
              priority
              className="my-2 max-h-[500px] w-full rounded-xl bg-cover object-cover drop-shadow-xl md:my-4"
            />
          </div>
          {/* Actual post from mdx file */}
          <div className="blog-post prose-sm w-full !max-w-full py-4 dark:prose-invert md:prose-base lg:prose">
            <MDXRemote
              compiledSource={blogPostCompiled.compiledSource}
              components={components}
              scope={undefined}
              frontmatter={undefined}
            />
          </div>
          {/* Author bottom details */}
          <PostAuthorDetails blogAuthor={blogPostCompiled.blogPost.metadata.author} />
        </article>
      </Section>
    </BaseLayout>
  );
};

export default BlogLayout;
