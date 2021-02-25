import { Text, Container, Grid, Heading, VStack, Icon } from '@chakra-ui/react';
import React from 'react';

interface RecentPostsProps {}

export const RecentPosts: React.FC<RecentPostsProps> = ({}) => {
  return (
    <Container maxWidth='3xl'>
      <VStack spacing={4} py={[10, 12, 14, 16]} align='center'>
        {/* Top */}
        <VStack spacing={4}>
          <Heading>Check my Recent Blog Posts</Heading>
          <Text>
            Have a look at my most recent blog posts, you may want to head to
            the Blog page to read more!
          </Text>
        </VStack>
        {/* Bottom */}
        <Grid>
          <Icon
            width='274'
            height='426'
            viewBox='0 0 274 426'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M118.368 235.196H42.4719C33.2437 235.196 27.4691 225.214 32.069 217.214L135.965 36.5257C142.091 25.8727 158.368 30.2189 158.368 42.5073V195.196C158.368 217.288 140.459 235.196 118.368 235.196Z' />
          </Icon>
        </Grid>
      </VStack>
    </Container>
  );
};
