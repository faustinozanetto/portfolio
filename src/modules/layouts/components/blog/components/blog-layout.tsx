import React from 'react';
import { BlogPostMetadata } from '@modules/blog/types/blog.types';
import BaseLayout from '../../base/base-layout';
import Heading from '@modules/ui/components/heading/heading';
import { MDXRemote } from 'next-mdx-remote';
import Button from '@modules/ui/components/buttons/button';
import Section from '@modules/sections/components/section/section';
import Flex from '@modules/ui/components/flex/flex';
import Text from '@modules/ui/components/text/text';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import Box from '@modules/ui/components/box/box';

interface IBlogLayoutProps {
  postSource: string;
  postMetadata: BlogPostMetadata;
}

const components = { Button, Heading };

const BlogLayout: React.FC<IBlogLayoutProps> = (props) => {
  const { postSource, postMetadata } = props;
  const theme = useTheme();

  return (
    <BaseLayout
      headProps={{
        title: `${postMetadata?.title} | Faustino Zanetto`,
      }}
    >
      <Flex flexDirection="column" width="100%">
        {/* Post Metadata */}
        <Section containerStyles={{ marginBottom: '4em' }}>
          <Heading as="h1" fontSize="5xl" color={theme.colors.primary[400]} marginBottom={theme.spacing['sm']}>
            {postMetadata?.title}
          </Heading>
          <Text fontSize="2xl">{postMetadata.description}</Text>
          <Heading as="h2" fontSize="xl">
            {new Date(postMetadata.date).toDateString()}
          </Heading>
          <Flex alignItems="center" justifyContent="center" marginTop={theme.spacing['sm']}>
            {postMetadata.tags.map((tag) => {
              return (
                <Heading
                  as="span"
                  fontSize="lg"
                  fontWeight="bold"
                  color={theme.colors.primary[400]}
                  backgroundColor={theme.colors.background['100']}
                  padding={theme.spacing['xs']}
                  margin={theme.spacing['xs']}
                >
                  {tag}
                </Heading>
              );
            })}
          </Flex>
          <Box width="100%" marginTop={theme.spacing['lg']}>
            <Image
              src={postMetadata.thumbnail}
              alt={''}
              width={1000}
              height={600}
              sizes="100vw"
              style={{
                borderRadius: '1em',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Section>
        <Section containerStyles={{ marginBottom: '4em' }}>
          <MDXRemote compiledSource={postSource} components={components} />
        </Section>
      </Flex>
    </BaseLayout>
  );
};

export default BlogLayout;
