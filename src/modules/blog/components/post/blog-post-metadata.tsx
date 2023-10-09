import React from 'react';
import Image from 'next/image';
import { useBlogPostContext } from '@modules/blog/hooks/use-blog-post-context';
import BlogPostContentBack from './blog-post-content-back';
import PostCardTags from '../cards/common/post-card-tags';
import BlogPostViewsCount from './views/blog-post-views-count';

const BlogPostContentMetadata: React.FC = () => {
  const blogPost = useBlogPostContext((s) => s.blogPost);

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <time className="block text-sm">Published on {new Date(blogPost.publishDate).toDateString()}</time>
        <BlogPostContentBack />
      </div>
      <h1 className="inline-block font-heading text-4xl leading-tight lg:text-5xl font-extrabold">{blogPost.title}</h1>
      <div className="flex justify-between items-center my-2">
        <div className="flex gap-4 items-center">
          <Image
            src={blogPost.author.image}
            alt={`Blog Author ${blogPost.author.name}`}
            priority
            width={45}
            height={45}
            className="rounded-full"
          />
          <div>
            <p className="block font-medium leading-none">{blogPost.author.name}</p>
            <span className="text-sm opacity-80">Post Author</span>
          </div>
        </div>
        <BlogPostViewsCount />
      </div>
      <PostCardTags tags={blogPost.tags} />
      <Image
        src={blogPost.image}
        alt={`${blogPost.title} Image`}
        width={720}
        height={420}
        className="my-4 rounded-lg border-2 border-primary w-full"
        priority
      />
    </div>
  );
};

export default BlogPostContentMetadata;
