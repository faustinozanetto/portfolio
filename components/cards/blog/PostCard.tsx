import React from 'react';
import {
  Box,
  Text,
  Image,
  Stack,
  Center,
  Heading,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { PostTypes } from '../../../types/blog';
import { PostTopicEnum } from '../../../types/blog/PostTopicTypes';

interface PostCardProps {
  postData: PostTypes;
}

export const PostCard: React.FC<PostCardProps> = ({ postData }) => {
  const router = useRouter();

  const getTopicColor = (): string => {
    switch (postData.topic) {
      case PostTopicEnum.design:
        return 'green';
      case PostTopicEnum.games:
        return 'red';
      case PostTopicEnum.programming:
        return 'yellow';
      case PostTopicEnum.tech:
        return 'blue';
      case PostTopicEnum.food:
        return 'green';

      default:
        return 'blue';
    }
  };

  const handleBlogPostRoute = () => {
    router.push(`/blog/${postData.slug}`);
  };

  return (
    <motion.div
      transition={{ type: 'spring', stiffness: 50, duration: 0.2 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        handleBlogPostRoute();
      }}
    >
      <Center py={6}>
        <Box w='100%' boxShadow='2xl' rounded='lg' overflow='hidden' p={6}>
          {/* Thumbnail */}
          <Box bg='gray.100' mt={-6} mx={-6} mb={6} pos='relative'>
            <Image
              src={postData.thumbnail}
              alt={`${postData.title} Thumbnail`}
              width='full'
              height='full'
              objectFit='cover'
            />
          </Box>

          <Stack>
            {/* Title */}
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize='2xl'
              noOfLines={1}
            >
              {postData.title}
            </Heading>

            {/* Topic */}
            <Box mr='auto'>
              <Badge colorScheme={getTopicColor()} width='full'>
                {postData.topic}
              </Badge>
            </Box>

            {/* Reading Time */}
            <Box mr='auto'>
              <Text color={useColorModeValue('gray.800', 'gray.500')}>
                {postData.readTime} min read
              </Text>
            </Box>

            {/* Description */}
            <Text
              color={useColorModeValue('gray.800', 'gray.500')}
              noOfLines={3}
            >
              {postData.shortDescription}
            </Text>
          </Stack>
        </Box>
      </Center>
    </motion.div>
  );
};
