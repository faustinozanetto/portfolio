import { BlogPost } from '@contentlayer/generated';
import React from 'react';
import Image from 'next/image';

type BlogPostContentMetadataProps = {
  blogPost: BlogPost;
};

const BlogPostContentMetadata: React.FC<BlogPostContentMetadataProps> = (props) => {
  const { blogPost } = props;
  return (
    <div>
      <time className="block text-sm text-neutral-800 dark:text-neutral-300">
        Published on {new Date(blogPost.publishDate).toDateString()}
      </time>
      <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl font-extrabold">
        {blogPost.title}
      </h1>
      {/* Author Details */}
      <div className="mt-4 flex space-x-4 items-center">
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
      <Image
        src={blogPost.image}
        alt={`${blogPost.title} Image`}
        width={720}
        height={420}
        className="my-4 rounded-lg border-2 border-primary-400 dark:border-primary-800 w-full md:my-6"
        priority
      />
    </div>
  );
};

export default BlogPostContentMetadata;
