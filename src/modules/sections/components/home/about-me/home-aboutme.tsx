import NextImage from 'next/image';
import React from 'react';

import Section from '../../section/section';

interface IHomeAboutMeProps {}

const HomeAbutMe: React.FC<IHomeAboutMeProps> = (props) => {
  const {} = props;

  return (
    <Section className="my-4 bg-neutral-200 dark:bg-neutral-800 sm:my-10 md:my-14">
      <div className="grid grid-rows-1 items-start justify-center gap-4 sm:grid-cols-2 sm:grid-rows-1 sm:gap-6">
        {/* Left */}
        <NextImage
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="About me Image"
          priority
          className="w-full"
          width={400}
          height={400}
        />

        {/* Right */}
        <div className="flex flex-col space-y-2 text-neutral-900 dark:text-neutral-100 sm:space-y-4">
          <h2 className="text-5xl font-bold">About me</h2>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia veniam et nostrum fugiat ipsam ullam,
            quod eaque nihil asperiores ut! Fuga placeat numquam expedita, odio quos quisquam itaque et.
          </p>
          <p className="text-lg sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia veniam et nostrum fugiat ipsam ullam,
            quod eaque nihil asperiores ut! Fuga placeat numquam expedita, odio quos quisquam itaque et.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HomeAbutMe;
