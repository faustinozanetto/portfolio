/* eslint-disable no-underscore-dangle */
import { ComputedFields, defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const blogComputedFields: ComputedFields<'BlogPost'> = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

const BlogPostAuthor = defineNestedType(() => ({
  name: 'BlogPostAuthor',
  fields: {
    name: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
  },
}));

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    publishDate: {
      type: 'date',
      required: true,
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
    author: {
      required: true,
      type: 'nested',
      of: BlogPostAuthor,
    },
  },
  computedFields: blogComputedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
