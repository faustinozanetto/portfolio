import type { LinkButtonProps } from '@modules/ui/components/buttons/button-link';
import LinkButton from '@modules/ui/components/buttons/button-link';
import React from 'react';
import { FiGlobe } from 'react-icons/fi';

type IDemoButtonProps = LinkButtonProps & {
  href: string;
  children?: React.ReactNode;
};

const DemoButton: React.FC<IDemoButtonProps> = (props) => {
  const { href, children, ...rest } = props;

  return (
    <LinkButton
      colorScheme="teal"
      href={href}
      leftIcon={<FiGlobe size={22} />}
      target="_blank"
      aria-label="Demo Button"
      {...rest}
    >
      {children}
    </LinkButton>
  );
};

export default DemoButton;
