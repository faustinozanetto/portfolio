import { PostTypes } from '../../../types/blog';

export const blogPosts: Array<PostTypes> = [
  {
    id: 0,
    slug: 'test',
    title: 'Just a simple title',
    thumbnail: 'https://miro.medium.com/max/1000/0*y1Hb8_Xdy86Ktg2V',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore molestias ratione adipisci. Ipsa, fugiat!',
    readTime: 5,
    topic: 'tech',
    publishDate: '25/01/2021',
  },
  {
    id: 1,
    slug: 'java-fundamentals',
    title: 'Learning Java Fundamentals',
    thumbnail:
      'https://cursos.delenaformacion.com/1402-large_default/curso-de-programacion-java.jpg',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore molestias ratione adipisci. Ipsa, fugiat!',
    readTime: 10,
    topic: 'tech',
    publishDate: '12/02/2021',
  },
  {
    id: 2,
    slug: 'hydroponic-is-the-future',
    title: 'Why hydroponic is the futur?',
    thumbnail:
      'https://www.rimolgreenhouses.com/sites/default/files/images/blog/D13_1.JPG',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore molestias ratione adipisci. Ipsa, fugiat!',
    readTime: 15,
    topic: 'food',
    publishDate: '22/02/2021',
  },
  {
    id: 3,
    slug: 'save-the-artic',
    title: 'Why is the Artic so important for the planet?',
    thumbnail:
      'https://www.greenpeace.org/usa/wp-content/uploads/2013/06/Screen-Shot-2013-06-09-at-7.40.08-PM.png',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore molestias ratione adipisci. Ipsa, fugiat!',
    readTime: 15,
    topic: 'nature',
    publishDate: '22/02/2021',
  },
];
