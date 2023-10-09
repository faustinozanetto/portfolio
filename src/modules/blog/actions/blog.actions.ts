import { kv } from '@modules/redis/lib/redis.lib';
import { BlogPost } from '@contentlayer/generated';
import { BlogPostReaction, BlogPostReactionAction } from '../types/blog.types';

const BLOGPOST_REDIS_KEY = process.env.NODE_ENV === 'development' ? 'blogpostdev' : 'blogpost';

/**
 * Function responsible for getting the blog post reactions from redis.
 * @param slug Blog post slug.
 * @returns Reactions array.
 */
export const getBlogPostReactionsFromRedis = async (slug: BlogPost['slug']): Promise<BlogPostReaction[]> => {
  const KEY = ['reactions', BLOGPOST_REDIS_KEY, slug].join(':');

  const blogPostReactions = await kv.hgetall<Record<string, number>>(KEY);

  if (!blogPostReactions) return [];

  const entries = Object.entries(blogPostReactions);
  const reactions: BlogPostReaction[] = entries.map(([emoji, value]) => ({ emoji, value }));

  return reactions;
};

/**
 * Function responsible for updating a reaction of a blog post.
 * @param slug Blog post slug.
 * @param action Update action.
 * @param emoji Emoji to update.
 */
export const updateBlogPostReactionToRedis = async (
  slug: BlogPost['slug'],
  action: BlogPostReactionAction,
  emoji: string
) => {
  const INCREMENT_VALUES: Record<BlogPostReactionAction, number> = {
    decrement: -1,
    increment: 1,
  };

  const KEY = ['reactions', BLOGPOST_REDIS_KEY, slug].join(':');

  await kv.hincrby(KEY, emoji, INCREMENT_VALUES[action]);
};

/**
 * Function responsible for incrementing page view of a blog post.
 * @param slug Blog post slug.
 */
export const incrementBlogPostViewToRedis = async (slug: BlogPost['slug']) => {
  const KEY = ['pageviews', BLOGPOST_REDIS_KEY, slug].join(':');

  await kv.incr(KEY);
};

/**
 * Function responsible for getting the page views of a blog post.
 * @param slug Blog post slug.
 * @returns Page views or 0 if none.
 */
export const getBlogPostViewsFromRedis = async (slug: BlogPost['slug']): Promise<number> => {
  const KEY = ['pageviews', BLOGPOST_REDIS_KEY, slug].join(':');

  const views = (await kv.get<number>(KEY)) ?? 0;

  return views;
};
