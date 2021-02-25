import React from 'react';
import {
  Text,
  Container,
  SimpleGrid,
  Heading,
  VStack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { PostCard } from '../../cards/blog';
import { PostTopicEnum } from '../../../types/blog/PostTopicTypes';

interface RecentPostsProps {}

export const RecentPosts: React.FC<RecentPostsProps> = ({}) => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container
        maxW='container.sm'
        py={{ base: 14, sm: 20, md: 28 }}
        centerContent
      >
        <VStack spacing={4}>
          {/* Top */}
          <VStack spacing={4}>
            <Heading textAlign={'center'}>Check my Recent Blog Posts</Heading>
            <Text textAlign={'center'}>
              Have a look at my most recent blog posts, you may want to head to
              the Blog page to read more!
            </Text>
          </VStack>

          {/* Bottom */}
          <SimpleGrid minChildWidth={{ base: '250px', md: '350px' }}>
            {Array(0, 1, 2).map((card, index) => {
              return (
                <PostCard
                  key={index}
                  postData={{
                    title: 'Learning Javascript',
                    shortDescription:
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore molestias ratione adipisci. Ipsa, fugiat!',
                    readTime: 5,
                    thumbnail:
                      'https://miro.medium.com/max/1000/0*y1Hb8_Xdy86Ktg2V',
                    topic: PostTopicEnum.programming,
                  }}
                />
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
