import Link from 'next/link';
import React from 'react';
import type { ButtonProps } from './button';
import Button from './button';

type LinkButtonProps = ButtonProps & {
  href: string;
  target?: string;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { children, target, href = '/', ...rest } = props;
  return (
    <Link href={href} target={target}>
      <Button {...rest}>{children}</Button>
    </Link>
  );
};

export default LinkButton;
