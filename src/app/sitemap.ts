export default async function sitemap() {
  const routes = ['', '/blog', '/projects', '/about', '/contact'].map((route) => ({
    url: `https://www.faustinozanetto.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
