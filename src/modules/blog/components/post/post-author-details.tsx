import type { BlogPostAuthor } from '@modules/blog/types/blog.types';
import Image from 'next/image';
import React from 'react';

interface IPostAuthorDetailsProps {
  blogAuthor: BlogPostAuthor;
}

const PostAuthorDetails: React.FC<IPostAuthorDetailsProps> = (props) => {
  const { blogAuthor } = props;

  return (
    <div className="mt-3 rounded-2xl bg-neutral-200 p-8 dark:bg-neutral-800">
      <div className="flex flex-wrap items-start justify-center sm:flex-nowrap  sm:justify-start sm:space-x-4">
        <Image
          src={blogAuthor.image}
          alt={`Blog Author ${blogAuthor.name}`}
          width={500}
          height={500}
          priority
          className="relative mt-1 h-24 w-24 shrink-0 rounded-full"
        />
        <div className="flex flex-col text-center sm:text-start">
          <span className="font-bold">About {blogAuthor.name}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, excepturi. Deserunt laboriosam id
            reiciendis quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostAuthorDetails;
