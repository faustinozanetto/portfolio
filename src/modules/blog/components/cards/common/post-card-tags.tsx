import React from 'react';

interface IPostCardTagsProps {
  tags: string[];
}

const PostCardTags: React.FC<IPostCardTagsProps> = (props) => {
  const { tags } = props;

  return (
    <div className="flex flex-wrap space-x-1 opacity-70">
      {tags.map((tag) => {
        return (
          <span key={tag} className="font-medium">
            {`#${tag}`}
          </span>
        );
      })}
    </div>
  );
};

export default PostCardTags;
