export type BlogPostAuthor = {
  name: string;
  image: string;
};

export type BlogPostMetadata = {
  title: string;
  description: string;
  date: Date;
  thumbnail: string;
  tags: string[];
  author: BlogPostAuthor;
};

export type BlogPostSlug = {
  slug: string;
};

export type BlogPost = {
  metadata: BlogPostMetadata;
  slug: BlogPostSlug;
};

export type BlogPostCompiled = {
  blogPost: BlogPost;
  compiledSource: string;
};
