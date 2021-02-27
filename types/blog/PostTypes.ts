import { PostTopicEnum } from './PostTopicTypes';

export type PostTypes = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  readTime: number;
  topic: PostTopicEnum | string;
  publishDate: string;
};
