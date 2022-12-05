import * as fs from 'fs';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import type { BlogPostSlug } from '../types/blog.types';
import { POSTS_DIRECTORY } from './constants';

class PostParser {
  private postSlug: BlogPostSlug;

  constructor(postSlug: string) {
    this.postSlug = {
      slug: postSlug,
    };
  }

  private parsePostContentBySlug(slug: BlogPostSlug): string {
    const contents: string = fs.readFileSync(`${POSTS_DIRECTORY}/${slug.slug}.md`, 'utf-8');
    return contents;
  }

  public async parsePost() {
    const content = this.parsePostContentBySlug(this.postSlug);

    const source: MDXRemoteSerializeResult = await serialize(content, {
      parseFrontmatter: true,
    });
    return source;
  }
}

export default PostParser;
