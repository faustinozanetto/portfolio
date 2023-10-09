import React from 'react';
import ScrollToTop from '@modules/common/components/scroll-to-top';
import BlogPostContentMetadata from './blog-post-metadata';
import BlogPostContentMarkdown from './markdown/blog-post-content-markdown';
import BlogPostShare from './share/blog-post-share';
import BlogPostReactions from './reactions/blog-post-reactions';

const BlogPost: React.FC = () => {
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <BlogPostContentMetadata />
      <BlogPostContentMarkdown />
      <hr className="mt-12" />
      <BlogPostReactions />
      <BlogPostShare />
      <ScrollToTop />
    </article>
  );
};

export default BlogPost;
