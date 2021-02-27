import { Box } from '@chakra-ui/react';
import React from 'react';
import { HeroSection, RecentPostsSection } from '../components/sections/home';
import { blogPosts } from '../data/blog/posts/blogPosts';
import { PostTypes } from '../types/blog';

type HomeProps = {
  posts: PostTypes[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <Box>
        <HeroSection />
        <RecentPostsSection posts={posts} />
      </Box>
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

export default Home;
