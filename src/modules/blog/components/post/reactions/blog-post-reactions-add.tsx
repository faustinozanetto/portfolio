import React from 'react';
import { Button } from '@modules/ui/components/buttons/button';
import { Popover, PopoverContent, PopoverTrigger } from '@modules/ui/components/popover/popover';
import { BLOG_REACTION_EMOJIS } from '@modules/blog/lib/blog.lib';
import BlogPostReactionsOption from './blog-post-reactions-option';

const BlogPostReactionsAdd: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="px-2" variant="outline" size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-current mr-2"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto" align="end" side="top">
        <div className="grid grid-cols-5 gap-2">
          {BLOG_REACTION_EMOJIS.map((emoji) => {
            return <BlogPostReactionsOption key={`add-${emoji}`} reaction={{ emoji, value: 0 }} showAmount={false} />;
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default BlogPostReactionsAdd;
