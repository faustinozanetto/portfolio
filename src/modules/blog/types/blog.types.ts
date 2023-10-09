export type BlogPostReaction = {
  emoji: string;
  value: number;
};

export type BlogPostReactionAction = 'increment' | 'decrement';
