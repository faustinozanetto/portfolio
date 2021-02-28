import React from 'react';
import {
  Container,
  Heading,
  Spacer,
  Flex,
  Text,
  Grid,
  Stack,
} from '@chakra-ui/react';
import { PostTypes } from '../../types/blog';
import { blogPosts } from '../../data/blog/posts/blogPosts';
import { PostCard } from '../../components/cards/blog';

type BlogProps = {
  posts: PostTypes[];
};

const Blog = ({ posts }: BlogProps) => {
  return (
    <>
      <Container maxW='5xl' py={['1em', '1em', '2em', '3em', '3em']}>
        <Flex flexDir='column' align={['center']}>
          {/* Top */}
          <Flex flexDir='column'>
            <Heading as='h1'>Personal Blog</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              exercitationem reiciendis. Sapiente repellat illo rerum cum,
              suscipit non nisi magni!
            </Text>
          </Flex>

          <Spacer />

          {/* Bottom */}
          <Stack>
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(3, 1fr)',
                'repeat(3, 1fr)',
              ]}
              gap={4}
            >
              {posts.map((post, index) => {
                return <PostCard key={index} postData={post} />;
              })}
            </Grid>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const posts: PostTypes[] = blogPosts;

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export default Blog;
