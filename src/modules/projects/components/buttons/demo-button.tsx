import React from 'react';
import LinkButton from '@modules/ui/components/buttons/button-link';

type DemoButtonProps = {
  children?: React.ReactNode;
  href: string;
};

const DemoButton: React.FC<DemoButtonProps> = (props) => {
  const { href, children } = props;

  return (
    <LinkButton
      href={href}
      title="Project Demo"
      className="w-full"
      icon={
        <svg
          className="h-5 w-5 stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
          <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
        </svg>
      }
      target="_blank"
      aria-label="Demo Button"
    >
      {children}
    </LinkButton>
  );
};

export default DemoButton;
