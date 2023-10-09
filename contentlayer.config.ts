/* eslint-disable no-param-reassign */
import { ComputedFields, defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

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

const projectComputedFields: ComputedFields<'Project'> = {
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

const ExternalLink = defineNestedType(() => ({
  name: 'ExternalLink',
  fields: {
    link: {
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

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    isFeatured: {
      type: 'boolean',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    thumbnails: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
    publishDate: {
      type: 'date',
      required: true,
    },
    projectLink: {
      type: 'nested',
      of: ExternalLink,
      required: false,
    },
    repoLink: {
      type: 'nested',
      of: ExternalLink,
      required: false,
    },
    technologies: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
  },
  computedFields: projectComputedFields,
}));

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: 'min-dark',
  onVisitLine(node) {
    if (node.children.length === 0) {
      // if code block has a empty line, add a space instead of keeping it blank
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    const nodeClass = node.properties.className;
    if (nodeClass && nodeClass.length > 0) {
      node.properties.className.push('line--highlighted');
    } else {
      node.properties.className = ['line--highlighted'];
    }
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word--highlighted'];
  },
};

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // @ts-ignore
      [rehypePrettyCode, rehypePrettyCodeOptions],
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
