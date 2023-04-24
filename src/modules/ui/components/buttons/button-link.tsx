import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import type { ButtonProps } from './button';
import { Button } from './button';

export type LinkButtonProps = ButtonProps & {
  href: string;
  target?: string;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { children, target, href = '/', ...rest } = props;
  return (
    <Link className={clsx(rest.className, 'flex items-center justify-center')} href={href} target={target}>
      <Button {...rest}>{children}</Button>
    </Link>
  );
};

export default LinkButton;
