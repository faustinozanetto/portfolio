import React from 'react';

interface IPostCardTagsProps {
  tags: string[];
}

const PostCardTags: React.FC<IPostCardTagsProps> = (props) => {
  const { tags } = props;

  return (
    <div className="flex space-x-1">
      <span className="font-bold">Tags: </span>
      {tags.map((tag, index) => {
        return (
          <span key={tag} className="font-medium">
            {tag}
            {index >= 0 && index !== tags.length - 1 ? ' - ' : null}
          </span>
        );
      })}
    </div>
  );
};

export default PostCardTags;
