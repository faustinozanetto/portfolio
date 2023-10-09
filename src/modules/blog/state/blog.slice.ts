import { BlogPost } from '@contentlayer/generated';
import { createStore } from 'zustand';

export type BlogSliceState = {
  blogPost: BlogPost;
  views: number;
};

export type BlogSliceActions = {
  setBlogPost: (blogPost: BlogPost) => void;
};

export type BlogPostStore = ReturnType<typeof createBlogPostStore>;

export const createBlogPostStore = (initProps: BlogSliceState) => {
  return createStore<BlogSliceState & BlogSliceActions>()((set) => ({
    ...initProps,
    setBlogPost(blogPost) {
      set({ blogPost });
    },
  }));
};
