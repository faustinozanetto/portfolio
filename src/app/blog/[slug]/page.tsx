import '@styles/markdown.css';

import { allBlogPosts } from '@contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostContent from '@modules/blog/components/post/blog-post-content';
import { siteConfig } from '@config/config';

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

  return {
    title: blogPost.title,
    description: blogPost.description,
    publisher: 'Faustino Zanetto',
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      type: 'article',
      url: `${siteConfig.url}/blog/${blogPost.slug}`,
      publishedTime: blogPost.publishDate,
      images: [
        {
          url: blogPost.image,
          alt: blogPost.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blogPost.title,
      description: blogPost.description,
      images: [
        {
          url: blogPost.image,
          alt: blogPost.title,
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

  return <BlogPostContent blogPost={blogPost} />;
}
