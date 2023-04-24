import type { LinkButtonProps } from '@modules/ui/components/buttons/button-link';
import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';

type DemoButtonProps = LinkButtonProps & {
  href: string;
  children?: React.ReactNode;
};

const DemoButton: React.FC<DemoButtonProps> = (props) => {
  const { href, children, ...rest } = props;

  return (
    <LinkButton
      colorScheme="secondary"
      href={href}
      icon={
        <svg
          className="stroke-neutral-900 dark:stroke-neutral-100"
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
      {...rest}
    >
      {children}
    </LinkButton>
  );
};

export default DemoButton;
