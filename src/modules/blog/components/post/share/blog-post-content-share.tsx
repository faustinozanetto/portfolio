import React from 'react';
import { BlogPost } from '@contentlayer/generated';
import BlogPostContentShareOption, { type BlogPostContentShareOptionProps } from './blog-post-content-share-option';

type ShareOptionWithURLGenerator = Omit<BlogPostContentShareOptionProps, 'href'> & {
  generateURL: (blogPost: BlogPost) => string;
};

const SHARE_OPTIONS: ShareOptionWithURLGenerator[] = [
  {
    label: 'Twitter',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
    generateURL(blogPost) {
      const TWITTER_BASE_URL = 'https://twitter.com';

      const shareMessage = `🚀 Check out this awesome blog post "${blogPost.title}" by Faustino Zanetto!\n\n`;
      const encodedMessage = encodeURIComponent(shareMessage);

      const completePostURL = process.env.NEXT_PUBLIC_URL + encodeURIComponent(blogPost.slug);

      const tweetURL = `${TWITTER_BASE_URL}/share?url=${completePostURL}&text=${encodedMessage}`;
      return tweetURL;
    },
  },
];

type BlogPostContentShareProps = {
  blogPost: BlogPost;
};

const BlogPostContentShare: React.FC<BlogPostContentShareProps> = (props) => {
  const { blogPost } = props;

  return (
    <div className="my-4">
      <h3 className="text-lg font-extrabold">Share the Post</h3>
      <p>
        Spread the knowledge! Share this insightful blog post with your friends and colleagues on multiple platforms.
      </p>
      <div className="flex gap-4 justify-end mt-2">
        {SHARE_OPTIONS.map((option) => (
          <BlogPostContentShareOption
            key={option.label}
            icon={option.icon}
            label={option.label}
            href={option.generateURL(blogPost)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostContentShare;
