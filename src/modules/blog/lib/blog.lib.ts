import { BlogPost } from '@contentlayer/generated';

export const BLOG_REACTION_EMOJIS: string[] = ['👍', '❤️', '😄', '👏', '😮', '🎉', '🙌', '😊', '🔥', '💯'];

/**
 * Returns the react-query query key used in the blog post reactions component.
 * @param blogPost Blog post data.
 * @returns Query key.
 */
export const getBlogPostReactionQueryKey = (blogPost: BlogPost): string[] => {
  return ['blog-post-reactions', blogPost.slugAsParams];
};
