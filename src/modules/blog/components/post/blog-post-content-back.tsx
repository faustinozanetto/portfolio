import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';

const BlogPostContentBack: React.FC = () => (
  <LinkButton
    href="/blog"
    title="Go Back"
    variant="ghost"
    aria-label="Go Back"
    size="sm"
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 stroke-current"
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
);

export default BlogPostContentBack;
