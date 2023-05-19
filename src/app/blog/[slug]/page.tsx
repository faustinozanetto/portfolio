import { siteConfig } from '@config/config';
import { getAllBlogPostSlugs, getBlogPostBySlug } from '@modules/blog/lib/blog-utils';
import type { BlogPostCompiled } from '@modules/blog/types/blog.types';
import BlogLayout from '@modules/layouts/components/blog/components/blog-layout';
import type { Metadata } from 'next';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

const getBlogPostFromProps = async (props: BlogPostPageProps): Promise<BlogPostCompiled> => {
  const { params } = props;
  const { slug } = params;
  const blogPost = await getBlogPostBySlug({ slug });
  return blogPost;
};

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPostSlugs();

  return blogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blogPost = await getBlogPostFromProps({ params });
  return {
    title: blogPost.blogPost.metadata.title,
    description: blogPost.blogPost.metadata.description,
    openGraph: {
      title: blogPost.blogPost.metadata.title,
      description: blogPost.blogPost.metadata.description,
      url: `${siteConfig.url}/blog/${params.slug}`,
      images: [
        {
          url: blogPost.blogPost.metadata.thumbnail,
          width: 1500,
          height: 1000,
        },
      ],
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const blogPost = await getBlogPostFromProps(props);

  return <BlogLayout blogPostCompiled={blogPost} />;
}
