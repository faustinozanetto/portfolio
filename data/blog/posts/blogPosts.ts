import { PostTypes } from '../../../types/blog';

export const blogPosts: Array<PostTypes> = [
  {
    id: 0,
    title: 'Just a simple title',
    thumbnail: 'https://miro.medium.com/max/1000/0*y1Hb8_Xdy86Ktg2V',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore molestias ratione adipisci. Ipsa, fugiat!',
    readTime: 5,
    topic: 'tech',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Learning Java Fundamentals',
    thumbnail: 'https://miro.medium.com/max/1000/0*y1Hb8_Xdy86Ktg2V',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore molestias ratione adipisci. Ipsa, fugiat!',
    readTime: 10,
    topic: 'tech',
    createdAt: new Date(),
  },
];
