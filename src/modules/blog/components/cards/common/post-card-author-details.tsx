import Image from '@modules/ui/components/images/image';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import type { BlogPostAuthor } from '../../../types/blog.types';

interface IPostCardAuthorDetailsProps {
  author: BlogPostAuthor;
  date: Date;
}

const PostCardAuthorDetails: React.FC<IPostCardAuthorDetailsProps> = (props) => {
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
        <span className="font-bold">{author.name}</span>
        <div className="flex flex-row items-center space-x-1">
          <FiCalendar size={22} />
          <time
            dateTime={new Date(date).toDateString()}
            className="font-semibold text-neutral-800 dark:text-neutral-200"
          >
            {new Date(date).toDateString()}
          </time>
        </div>
      </div>
    </div>
  );
};

export default PostCardAuthorDetails;
