import { cn } from '@modules/ui/lib/ui.lib';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
  'focus-visible:ring-ring ring-offset-background inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        base: 'bg-primary-500 text-neutral-50 hover:bg-primary-600 focus-visible:ring-primary-400 dark:bg-primary-700 dark:text-neutral-50 dark:hover:bg-primary-800',
        outline:
          'border-2 border-primary-500  text-neutral-900 hover:text-neutral-50 hover:border-primary-600 hover:bg-primary-600 focus-visible:ring-primary-300 dark:border-primary-700 dark:hover:bg-primary-800 dark:text-neutral-50 dark:focus-visible:ring-primary-500',
        ghost:
          'text-neutral-900 hover:text-primary-50 hover:bg-primary-500 focus-visible:ring-primary-400 dark:text-neutral-50 dark:hover:bg-primary-700',
        danger:
          'bg-red-400 text-neutral-900 hover:bg-red-500 focus-visible:ring-red-400 dark:bg-red-700 dark:text-neutral-50 dark:hover:bg-red-800',
        link: 'underline-offset-4 hover:underline text-neutral-900 dark:text-neutral-50',
        unstyled: '',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        base: 'h-10 px-4',
        lg: 'h-12 px-8',
        xl: 'h-12 px-8 md:h-14 md:px-10 md:text-base',
      },
    },
    defaultVariants: {
      variant: 'base',
      size: 'base',
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: JSX.Element | null;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon, children, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {icon ? <span className="mr-2">{icon}</span> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
