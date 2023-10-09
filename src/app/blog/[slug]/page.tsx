import React from 'react';

import { allBlogPosts } from '@contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@config/config';
import BlogPostWrapper from '@modules/blog/components/post/blog-post-wrapper';
import { getBlogPostViewsFromRedis } from '@modules/blog/actions/blog.actions';

export const revalidate = 60;

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

async function getBlogPostFromParams(params: BlogPostPageProps['params']) {
  const doc = allBlogPosts.find((doc) => doc.slugAsParams === params.slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<BlogPostPageProps['params'][]> {
  return allBlogPosts.map((blogPost) => ({
    slug: blogPost.slugAsParams,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blogPost = await getBlogPostFromParams(params);

  if (!blogPost) {
    notFound();
  }

  const { title, description } = blogPost;

  return {
    title,
    description,
    publisher: 'Faustino Zanetto',
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteConfig.url}/blog/${blogPost.slug}`,
      publishedTime: blogPost.publishDate,
      authors: blogPost.author.name,
      images: [
        {
          url: blogPost.image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: blogPost.image,
          alt: title,
        },
      ],
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const blogPost = await getBlogPostFromParams(props.params);

  if (!blogPost) {
    notFound();
  }

  const views = await getBlogPostViewsFromRedis(blogPost.slugAsParams);

  return <BlogPostWrapper blogPost={blogPost} views={views} />;
}
