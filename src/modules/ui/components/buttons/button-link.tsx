import { cn } from '@modules/ui/lib/ui.lib';
import type { VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';

import { buttonVariants } from './button';

export type LinkButtonProps = React.ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof buttonVariants> & { icon?: React.ReactNode | null };

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { children, variant = 'base', size = 'base', className, icon, ...rest } = props;
  return (
    <Link className={cn(buttonVariants({ size, variant }), className)} {...rest}>
      {icon ? <span className="mr-2">{icon}</span> : null}
      {children}
    </Link>
  );
};

export default LinkButton;
