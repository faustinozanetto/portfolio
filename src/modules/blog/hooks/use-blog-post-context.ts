import { useContext } from 'react';
import { useStore } from 'zustand';
import { BlogPostContext } from '../components/post/context/blog-post-context';
import { BlogSliceActions, BlogSliceState } from '../state/blog.slice';

export const useBlogPostContext = <T>(selector: (state: BlogSliceState & BlogSliceActions) => T): T => {
  const store = useContext(BlogPostContext);
  if (!store) throw new Error('Missing BearContext.Provider in the tree');
  return useStore(store, selector);
};
