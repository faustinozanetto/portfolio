import { cn } from '@modules/ui/lib/ui.lib';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React from 'react';

const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'p-2',
        default: 'p-2.5',
        lg: 'p-3',
        xl: 'px-7 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
