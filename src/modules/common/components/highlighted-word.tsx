import React from 'react';

type HighlightedWordProps = {
  children: React.ReactNode;
};

const HighlightedWord: React.FC<HighlightedWordProps> = (props) => {
  const { children } = props;

  return <span className="font-bold text-primary">{children}</span>;
};

export default HighlightedWord;
