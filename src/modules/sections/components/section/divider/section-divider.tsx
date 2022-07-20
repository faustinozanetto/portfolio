import type { IBoxProps } from '@modules/ui/components/box/box';
import React from 'react';
import StyledSectionDivider from './section-divider.styles';

type ISectionDividerProps = IBoxProps & {
  dividerColor?: string;
};

const SectionDivider: React.FC<ISectionDividerProps> = (props) => {
  const { dividerColor = 'white', ...rest } = props;

  const generateRandomWidth = () => {
    const MAX = 1000;
    const MIN = 100;
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  };

  return (
    <svg
      fill={dividerColor}
      preserveAspectRatio="none"
      style={{
        display: 'block',
        height: '200px',
        width: `${generateRandomWidth()}%`,
        position: 'absolute',
        bottom: 0,
        left: 0,
        transform: 'rotateZ(180deg)',
      }}
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="shape-fill"
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      />
    </svg>
  );
};

export default SectionDivider;
