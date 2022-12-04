import React from 'react';
import Flex from '@modules/ui/components/flex/flex';
import NextImage from 'next/legacy/image';
import Heading from '@modules/ui/components/heading/heading';
import Text from '@modules/ui/components/text/text';
import Grid from '@modules/ui/components/grid/grid';
import Section from '../../section/section';

interface IHomeAboutMeProps {}

const HomeAbutMe: React.FC<IHomeAboutMeProps> = (props) => {
  const {} = props;

  return (
    <Section hasDivider dividerColor="black" backgroundColor="white" containerStyles={{ marginBottom: '20em' }}>
      <Grid gap="1rem" templateColumns="auto 1fr" templateRows="1fr" width="100%">
        {/* Left */}
        <Flex>
          <NextImage
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="About me Image"
            objectFit="cover"
            width={350}
            height={500}
          />
        </Flex>

        {/* Right */}
        <Flex flexDirection="column">
          <Heading as="h1" fontSize="6xl" textAlign="left" color="black" margin="0">
            About me
          </Heading>
          <Text fontSize="xl" textAlign="left" color="black" margin="0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia veniam et nostrum fugiat ipsam ullam,
            quod eaque nihil asperiores ut! Fuga placeat numquam expedita, odio quos quisquam itaque et.
          </Text>
          <Text fontSize="xl" textAlign="left" color="black" margin="0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia veniam et nostrum fugiat ipsam ullam,
            quod eaque nihil asperiores ut! Fuga placeat numquam expedita, odio quos quisquam itaque et.
          </Text>
        </Flex>
      </Grid>
    </Section>
  );
};

export default HomeAbutMe;
