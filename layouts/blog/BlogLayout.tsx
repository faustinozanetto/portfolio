import {
  Avatar,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

interface BlogLayoutProps {
  title: string;
  author: string;
  readTime: number;
  publishDate: string;
  content: any;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  author,
  publishDate,
  readTime,
  content,
}) => {
  return (
    <>
      <Container maxW='5xl' py={['1em', '1em', '2em', '3em', '3em']}>
        <article>
          {/* Post Details */}
          <VStack>
            {/* Title */}
            <Flex w='full' alignItems='center'>
              <Heading as='h1' fontSize='4xl'>
                {title}
              </Heading>
            </Flex>
            <Divider />
            {/* Details */}
            <Flex w='full' alignItems='center'>
              <HStack>
                <Avatar />
                <VStack alignItems='left' spacing='0'>
                  <HStack>
                    <Text fontWeight='300' fontSize='sm'>
                      {author} |
                    </Text>
                    <Text fontWeight='300' fontSize='sm'>
                      {publishDate}
                    </Text>
                  </HStack>
                  <Text fontWeight='300' fontSize='sm'>
                    {readTime} min read
                  </Text>
                </VStack>
              </HStack>
            </Flex>
          </VStack>

          {/* Post Content */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
};
