import React from 'react';
import Link from 'next/link';
import { Button } from '@modules/ui/components/buttons/button';

export type BlogPostShareOptionProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const BlogPostShareOption: React.FC<BlogPostShareOptionProps> = (props) => {
  const { label, href, icon } = props;

  return (
    <Button asChild aria-label={`Share Post to ${label}`}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {icon} {label} Share
      </Link>
    </Button>
  );
};

export default BlogPostShareOption;
