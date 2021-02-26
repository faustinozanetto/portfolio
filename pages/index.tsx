import { Box } from '@chakra-ui/react';
import React from 'react';
import { HeroSection, RecentPostsSection } from '../components/sections/home';
import { PostTypes } from '../types/blog';

export async function getStaticProps() {
  const res = await fetch(`https://api.jsonbin.io/b/603928720866664b1083eff5`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const posts: PostTypes[] = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

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

export default Home;
