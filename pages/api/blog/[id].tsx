import { NextApiRequest, NextApiResponse } from 'next';
import { blogPosts } from '../../../data/blog/posts/blogPosts';
import { PostTypes } from '../../../types/blog';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostTypes>
) {
  const {
    query: { id },
  } = req;
  const data = blogPosts;
  const post = data.find((element) => element.id === parseInt(id[0]));
  if (post) {
    res.json(post);
  }
}
