import { BlogPostAuthor } from '@contentlayer/generated';
import Image from '@modules/ui/components/images/image';
import React from 'react';

type PostCardAuthorDetailsProps = {
  author: BlogPostAuthor;
  date: Date;
};

const PostCardAuthorDetails: React.FC<PostCardAuthorDetailsProps> = (props) => {
  const { author, date } = props;

  return (
    <div className="mb-2 flex items-center space-x-2">
      <Image
        src={author.image}
        alt={`Blog Author ${author.name}`}
        title="Blog Author"
        priority
        width={85}
        height={85}
        className="h-10 w-10 rounded-full md:h-14 md:w-14"
      />
      <div className="flex flex-col">
        <span className="font-bold">{author.name}</span>
        <div className="flex flex-row items-center space-x-1">
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
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <line x1="11" y1="15" x2="12" y2="15" />
            <line x1="12" y1="15" x2="12" y2="18" />
          </svg>
          <time dateTime={new Date(date).toDateString()} className="text-sm">
            {new Date(date).toDateString()}
          </time>
        </div>
      </div>
    </div>
  );
};

export default PostCardAuthorDetails;
