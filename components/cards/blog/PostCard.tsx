import { Box, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { PostTypes } from '../../../types/blog';

interface PostCardProps {
  postData: PostTypes;
}

export const PostCard: React.FC<PostCardProps> = ({ postData }) => {
  return (
    <>
      <Box>
        <VStack>
          {/* Title */}
          <Box>
            <Heading>{postData.title}</Heading>
          </Box>
          {/* Thumbnail */}
          <Image
            src={postData.thumbnail}
            alt={`${postData.title} Thumbnail`}
            objectFit='cover'
          />
        </VStack>
      </Box>
    </>
  );
};
