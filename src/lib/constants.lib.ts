import type { HomeProjectCardType } from '@modules/sections/components/home/projects/project-card/home-project-card.types';
import { ProjectTechnology } from '../types/portfolio.types';

// eslint-disable-next-line import/prefer-default-export
export const HOME_PROJECTS: HomeProjectCardType[] = [
  {
    title: 'Mecha Type',
    description:
      "Mecha Type is a web application creation with the intent of impronving the user's typing skills along with other features. It has been developed with NextJS and NestJS.",
    image: '/assets/projects/mecha-type/mecha-type-thumbnail.png',
    technologies: [
      ProjectTechnology.NextJS,
      ProjectTechnology.NestJS,
      ProjectTechnology.TypeScript,
      ProjectTechnology.CSS,
      ProjectTechnology.TailwindCSS,
    ],
    projectLink: 'https://mechatype.vercel.app/',
    repoLink: 'https://github.com/faustinozanetto/mecha-type-client',
  },
  {
    title: 'Snappy',
    description:
      "Snappy is a web created with NextJS. It's main purpose is to create code snippets that are highly customizable with ease. It features multiple configuration options and a set of ready to use presets.",
    image: '/assets/projects/snappy/snappy-thumbnail.png',
    technologies: [
      ProjectTechnology.NextJS,
      ProjectTechnology.TypeScript,
      ProjectTechnology.ChakraUI,
      ProjectTechnology.Redux,
    ],
    projectLink: 'https://snappyapp.vercel.app/',
    repoLink: 'https://github.com/faustinozanetto/snappy',
  },
  {
    title: 'Klangs Coffee',
    description:
      'Klangs Coffee is a fictional coffee shop located in Buenos Aires, Argentina. It was created to showcase my skills with CSS and React. It features a simple layout of multiple sections.',
    image: '/assets/projects/klangs-coffee/klangs-coffee-thumbnail.jpg',
    technologies: [ProjectTechnology.NextJS, ProjectTechnology.ChakraUI, ProjectTechnology.TypeScript],
    projectLink: 'https://klangscoffee.vercel.app/',
    repoLink: 'https://github.com/faustinozanetto/coffee-shop',
  },
  {
    title: 'Toply',
    description:
      'Toply is a simple to use and free web application that lets you visualize your most listened-to songs on Spotify.',
    image: '/assets/projects/toply/toply-thumbnail.jpg',
    technologies: [
      ProjectTechnology.NextJS,
      ProjectTechnology.TailwindCSS,
      ProjectTechnology.TypeScript,
      ProjectTechnology.React,
    ],
    projectLink: 'https://toply.vercel.app/',
    repoLink: 'https://github.com/faustinozanetto/toply',
  },
  {
    title: 'Frontend Tools',
    description:
      'Frontend Tools is a colecction of tools that are commonly used in frontend web development such as gradient editor, shadow generator, etc. Image generated with DeviceFrames.',
    image: '/assets/projects/frontend-tools/frontend-tools-thumbnail.png',
    technologies: [
      ProjectTechnology.NextJS,
      ProjectTechnology.TailwindCSS,
      ProjectTechnology.TypeScript,
      ProjectTechnology.React,
      ProjectTechnology.Redux,
    ],
    projectLink: 'https://frontend-tools.vercel.app/',
    repoLink: 'https://github.com/faustinozanetto/frontend-tools',
  },
];
