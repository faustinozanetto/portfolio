import { getAllBlogPostFiles } from '@modules/blog/lib/blog-utils';
import type { GetServerSideProps } from 'next';

const generateSitemap = (slugs: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://leerob.io/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  const blogSlugs: string[] = getAllBlogPostFiles().map((blogSlug) => {
    return `blog/${blogSlug.params.slug}`;
  });

  const pages = [...blogSlugs, ''];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(generateSitemap(pages));
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
