import { Badge } from '@modules/ui/components/badge/badge';
import React from 'react';

type PostCardTagsProps = {
  tags: string[];
};

const PostCardTags: React.FC<PostCardTagsProps> = (props) => {
  const { tags } = props;

  return (
    <div className="mb-1.5 flex flex-wrap gap-1">
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  );
};

export default PostCardTags;
