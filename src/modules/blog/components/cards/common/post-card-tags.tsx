import React from 'react';

type PostCardTagsProps = {
  tags: string[];
};

const PostCardTags: React.FC<PostCardTagsProps> = (props) => {
  const { tags } = props;

  return (
    <div className="mt-1 flex flex-wrap space-x-1">
      <span className="font-semibold text-neutral-900 dark:text-neutral-100">Tags: </span>
      {tags.map((tag) => {
        return (
          <span key={tag} className="font-medium text-neutral-800 dark:text-neutral-200">
            {`#${tag}`}
          </span>
        );
      })}
    </div>
  );
};

export default PostCardTags;
