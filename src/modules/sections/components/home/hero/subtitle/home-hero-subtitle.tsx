import React from 'react';
import type { IHeadingProps } from '@modules/ui/components/heading/heading';
import StyledHomeHeroSubtitle from './home-hero-subtitle.styled';

type IHomeHeroSubtitleProps = IHeadingProps;

const HomeHeroSubtitle: React.FC<IHomeHeroSubtitleProps> = (props) => {
  const { children } = props;

  return (
    <StyledHomeHeroSubtitle fontSize="5xl" fontWeight="bold" textAlign="left" margin="0" padding="0.25rem">
      {children}
    </StyledHomeHeroSubtitle>
  );
};

export default HomeHeroSubtitle;
