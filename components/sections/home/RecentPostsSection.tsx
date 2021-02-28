import React from 'react';
import {
  Text,
  Container,
  Heading,
  VStack,
  Box,
  Grid,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { PostCard } from '../../cards/blog';
import { PostTypes } from '../../../types/blog';

interface RecentPostsSectionProps {
  posts: PostTypes[];
}

export const RecentPostsSection: React.FC<RecentPostsSectionProps> = ({
  posts,
}) => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW='5xl' py={{ base: 12, sm: 16, md: 20 }} centerContent>
        {/* Top */}
        <VStack spacing={4} p={4}>
          <Heading textAlign={'center'}>Check my Recent Blog Posts</Heading>
          <Text textAlign={'center'}>
            Have a look at my most recent blog posts, you may want to head to
            the Blog page to read more!
          </Text>
        </VStack>

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
            {posts.slice(0, 3).map((post, index) => {
              return <PostCard key={index} postData={post} />;
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};
