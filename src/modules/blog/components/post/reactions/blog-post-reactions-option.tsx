'use client';

import React, { useRef } from 'react';

import { Button } from '@modules/ui/components/buttons/button';
import { useBlogPostContext } from '@modules/blog/hooks/use-blog-post-context';
import { BlogPostReaction, BlogPostReactionAction } from '@modules/blog/types/blog.types';
import { useQueryClient } from '@tanstack/react-query';
import { getBlogPostReactionQueryKey } from '@modules/blog/lib/blog.lib';

export type BlogPostReactionsOptionProps = {
  reaction: BlogPostReaction;
  showAmount?: boolean;
};

const BlogPostReactionsOption: React.FC<BlogPostReactionsOptionProps> = (props) => {
  const { reaction, showAmount = true } = props;

  const queryClient = useQueryClient();
  const blogPost = useBlogPostContext((s) => s.blogPost);

  const url = useRef<URL>(new URL(`/api/blog/${blogPost.slugAsParams}/reaction`, process.env.NEXT_PUBLIC_URL));

  const handleReactionClicked = async () => {
    const action: BlogPostReactionAction = 'increment';

    const response = await fetch(url.current.toString(), {
      method: 'POST',
      body: JSON.stringify({
        emoji: reaction.emoji,
        action,
      }),
    });

    if (!response.ok) return;

    // Trigger a refetch of the reactions data
    await queryClient.invalidateQueries(getBlogPostReactionQueryKey(blogPost));
  };

  return (
    <Button className="px-2 text-base" variant="outline" size="sm" onClick={handleReactionClicked}>
      {showAmount && <span className="text-xs font-bold mr-1">{reaction.value}</span>} {reaction.emoji}
    </Button>
  );
};

export default BlogPostReactionsOption;
