import { BlogPostStore } from '@modules/blog/state/blog.slice';
import { createContext } from 'react';

export const BlogPostContext = createContext<BlogPostStore | null>(null);
