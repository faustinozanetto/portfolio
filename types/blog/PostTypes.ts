import { PostTopicTypes } from './PostTopicTypes';

export type PostTypes = {
  title: string;
  thumbnail: string;
  shortDescription: string;
  readTime: number;
  topic: PostTopicTypes;
};
