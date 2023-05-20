import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';

const BlogPostContentBack: React.FC = () => {
  return (
    <div className="absolute right-4 top-4">
      <LinkButton
        href="/blog"
        variant="ghost"
        size="sm"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-neutral-900 dark:stroke-neutral-50"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="11" y2="18" />
            <line x1="5" y1="12" x2="11" y2="6" />
          </svg>
        }
      >
        Back
      </LinkButton>
    </div>
  );
};

export default BlogPostContentBack;