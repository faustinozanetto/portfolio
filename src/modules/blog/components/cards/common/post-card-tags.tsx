import React from 'react';

type PostCardTagsProps = {
  tags: string[];
};

const PostCardTags: React.FC<PostCardTagsProps> = (props) => {
  const { tags } = props;

  return (
    <div className="mb-1.5 flex flex-wrap gap-1">
      {tags.map((tag) => {
        return (
          <span
            key={tag}
            className="rounded-lg bg-primary-300 px-1 text-sm font-semibold text-neutral-800 dark:bg-primary-800 dark:text-neutral-200"
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default PostCardTags;
