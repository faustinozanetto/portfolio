import React from 'react';

interface IPostCardTitleProps {
  title: string;
}

const PostCardTitle: React.FC<IPostCardTitleProps> = (props) => {
  const { title } = props;

  return (
    <h2 className="text-lg font-bold  leading-snug tracking-tight sm:text-xl">
      <span
        className="bg-gradient-to-r from-blue-200 to-blue-100 bg-[length:0px_10px] bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_4px]
          group-hover:bg-[length:100%_10px]
          dark:from-blue-600 dark:to-blue-800"
      >
        {title}
      </span>
    </h2>
  );
};

export default PostCardTitle;
