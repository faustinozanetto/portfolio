import matter from 'gray-matter';
import marked from 'marked';
import yaml from 'js-yaml';

export async function getAllPosts() {
  const context = require.context('../../_blog', false, /\.md$/);
  const posts = [];
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../../_blog/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace('.md', ''),
      title: meta.data.title,
      author: meta.data.author,
      readTime: meta.data.readTime,
      publishDate: meta.data.publishDate,
    });
  }
  return posts;
}

export async function getPostBySlug(slug: string) {
  const fileContent = await import(`../../_blog/${slug}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title,
    author: meta.data.author,
    readTime: meta.data.readTime,
    publishDate: meta.data.publishDate,
    content: content,
  };
}
