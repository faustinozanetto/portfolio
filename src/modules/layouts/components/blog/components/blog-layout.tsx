import type { BlogPostMetadata } from '@modules/blog/types/blog.types';
import Section from '@modules/sections/components/section/section';
import Button from '@modules/ui/components/buttons/button';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import BaseLayout from '../../base/base-layout';

interface IBlogLayoutProps {
  postSource: string;
  postMetadata: BlogPostMetadata;
}

const components = { Button };

const BlogLayout: React.FC<IBlogLayoutProps> = (props) => {
  const { postSource, postMetadata } = props;
  return (
    <BaseLayout
      headProps={{
        title: `${postMetadata?.title} | Faustino Zanetto`,
      }}
    >
      <div className="flex flex-col">
        {/* Post Metadata */}
        <Section>
          {/* Metadata */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">{postMetadata?.title}</h1>
            <p className="text-lg font-medium text-gray-900">{postMetadata.description}</p>
            <span className="text-sm font-bold">{new Date(postMetadata.date).toDateString()}</span>
            <div className="flex items-center">
              <span className="mr-2 text-lg">Tags: </span>
              {postMetadata.tags.map((tag) => {
                return (
                  <span key={tag} className="text-sm font-bold">
                    {tag}
                  </span>
                );
              })}
            </div>

            <Image
              src={postMetadata.thumbnail}
              alt={''}
              width={1000}
              height={600}
              sizes="100vw"
              style={{
                borderRadius: '0.5em',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="blog-post py-4">
            <MDXRemote compiledSource={postSource} components={components} />
          </div>
        </Section>
      </div>
    </BaseLayout>
  );
};

export default BlogLayout;
