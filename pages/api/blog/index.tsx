import { NextApiRequest, NextApiResponse } from 'next';
import { blogPosts } from '../../../data/blog/posts/blogPosts';
import { PostTypes } from '../../../types/blog';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<PostTypes[]>
) {
  if (blogPosts) {
    res.json(blogPosts);
  }
}
