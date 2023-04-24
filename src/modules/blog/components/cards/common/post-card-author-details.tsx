import Image from '@modules/ui/components/images/image';
import React from 'react';

import type { BlogPostAuthor } from '../../../types/blog.types';

type PostCardAuthorDetailsProps = {
  author: BlogPostAuthor;
  date: Date;
};

const PostCardAuthorDetails: React.FC<PostCardAuthorDetailsProps> = (props) => {
  const { author, date } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={author.image}
        alt={`Blog Author ${author.name}`}
        priority
        width={85}
        height={85}
        className="h-12 w-12 rounded-3xl md:h-16 md:w-16"
      />
      <div className="flex flex-col">
        <span className="font-bold text-neutral-900 dark:text-neutral-50">{author.name}</span>
        <div className="flex flex-row items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-neutral-900 dark:stroke-neutral-100"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <line x1="11" y1="15" x2="12" y2="15" />
            <line x1="12" y1="15" x2="12" y2="18" />
          </svg>
          <time
            dateTime={new Date(date).toDateString()}
            className="font-semibold text-neutral-900 dark:text-neutral-100"
          >
            {new Date(date).toDateString()}
          </time>
        </div>
      </div>
    </div>
  );
};

export default PostCardAuthorDetails;
