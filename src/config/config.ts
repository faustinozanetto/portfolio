import type { SiteConfig } from './types/config.types';

export const siteConfig: SiteConfig = {
  name: 'Faustino Zanetto',
  description:
    'My web developer portfolio showcases my work and skills in various projects, with a focus on creating effective and visually appealing solutions.',
  url: process.env.NEXT_PUBLIC_URL!,
};
