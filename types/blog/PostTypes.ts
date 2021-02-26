import { PostTopicEnum } from './PostTopicTypes';

export type PostTypes = {
  id: number;
  title: string;
  thumbnail: string;
  shortDescription: string;
  readTime: number;
  topic: PostTopicEnum;
};
