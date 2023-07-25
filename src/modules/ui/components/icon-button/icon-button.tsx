import { cn } from '@modules/ui/lib/ui.lib';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React from 'react';

const iconButtonVariants = cva(
  'relative inline-flex appearance-none items-center justify-center whitespace-nowrap rounded-lg font-semibold text-neutral-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed dark:text-neutral-50',
  {
    variants: {
      variant: {
        base: 'bg-primary-500 text-neutral-50 hover:bg-primary-600 focus-visible:ring-primary-400 dark:bg-primary-700 dark:text-neutral-50 dark:hover:bg-primary-800',
        outline:
          'border-2 border-primary-500  text-neutral-900 hover:text-neutral-50 hover:border-primary-600 hover:bg-primary-600 focus-visible:ring-primary-300 dark:border-primary-700 dark:hover:bg-primary-800 dark:text-neutral-50 dark:focus-visible:ring-primary-500',
        ghost:
          'text-neutral-900 hover:text-primary-50 hover:bg-primary-500 focus-visible:ring-primary-400 dark:text-neutral-50 dark:hover:bg-primary-700',
        danger:
          'bg-red-300 text-white hover:bg-red-500/90 focus-visible:ring-red-400 dark:bg-red-700 dark:hover:bg-red-900/90',
      },
      size: {
        sm: 'p-2',
        base: 'p-2.5',
        lg: 'p-3',
        xl: 'px-7 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'base',
      size: 'base',
    },
  }
);

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants> & {
    icon: React.ReactElement;
  };

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, type = 'button', variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(iconButtonVariants({ variant, size, className }))} type={type} {...props}>
      {icon}
    </button>
  )
);

IconButton.displayName = 'IconButton';

export default IconButton;
