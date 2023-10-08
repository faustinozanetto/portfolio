import React from 'react';
import { BlogPost } from '@contentlayer/generated';
import ScrollToTop from '@modules/common/components/scroll-to-top';
import BlogPostContentMetadata from './blog-post-metadata';
import BlogPostContentMarkdown from './markdown/blog-post-content-markdown';
import BlogPostContentShare from './share/blog-post-content-share';

type BlogPostContentProps = {
  blogPost: BlogPost;
};

const BlogPostContent: React.FC<BlogPostContentProps> = (props) => {
  const { blogPost } = props;
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <BlogPostContentMetadata blogPost={blogPost} />
      <BlogPostContentMarkdown code={blogPost.body.code} />
      <hr className="mt-12" />
      <BlogPostContentShare blogPost={blogPost} />
      <ScrollToTop />
    </article>
  );
};

export default BlogPostContent;
