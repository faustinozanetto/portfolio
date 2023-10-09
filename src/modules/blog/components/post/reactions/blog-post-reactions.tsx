'use client';

import React from 'react';
import { useBlogPostContext } from '@modules/blog/hooks/use-blog-post-context';
import { BlogPostReaction } from '@modules/blog/types/blog.types';
import { useQuery } from '@tanstack/react-query';
import { BLOG_REACTION_EMOJIS, getBlogPostReactionQueryKey } from '@modules/blog/lib/blog.lib';
import BlogPostReactionsOption from './blog-post-reactions-option';
import BlogPostReactionsAdd from './blog-post-reactions-add';
import BlogPostReactionsOptionPlaceholder from './blog-post-reactions-option-placeholder';

const BlogPostReactions: React.FC = () => {
  const { blogPost } = useBlogPostContext((s) => s);

  const url = new URL(`/api/blog/${blogPost.slugAsParams}/reaction`, process.env.NEXT_PUBLIC_URL);

  const { data, isLoading } = useQuery<{ reactions: BlogPostReaction[] }>({
    queryKey: getBlogPostReactionQueryKey(blogPost),
    queryFn: async () => {
      const res = await fetch(url.toString());
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-4">
      <h3 className="text-lg font-extrabold">Emoji Feedback</h3>
      <p>
        I&apos;d love to hear your thoughts! Share your emoji reactions to this blog post with me. What&apos;s your
        emoji review? 😄👏👍🤔🎉
      </p>
      <div className="flex flex-wrap gap-2 items-center justify-end mt-2">
        {isLoading &&
          Array.from({ length: BLOG_REACTION_EMOJIS.length }).map((_, i) => (
            <BlogPostReactionsOptionPlaceholder key={`reaction-placeholder-${i}`} />
          ))}

        {data && (
          <>
            {data.reactions.length === 0 && <p>Be the first to react to this post!</p>}
            <BlogPostReactionsAdd />
            {data.reactions.length > 0 &&
              data.reactions
                .sort((a, b) => b.value - a.value)
                .map((reaction) => {
                  return (
                    <BlogPostReactionsOption
                      key={`reaction-option-${reaction.emoji}-${reaction.value}`}
                      reaction={reaction}
                    />
                  );
                })}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPostReactions;
