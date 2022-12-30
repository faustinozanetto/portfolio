import clsx from 'clsx';
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'solid';
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, variant, leftIcon, rightIcon, size = 'md', ...rest } = props;

  const buttonSizes = (): string => {
    switch (size) {
      case 'sm':
        return 'py-2.5 px-3 text-base';
      case 'md':
        return 'px-5 py-2.5 text-md';
      case 'lg':
        return 'px-10 py-3.5 text-lg';
      default:
        return 'py-3 px-2.5 text-base';
    }
  };

  const buttonVariants = (): string => {
    switch (variant) {
      case 'outline':
        return 'hover:bg-primary-300 hover:text-primary-800';
      case 'solid':
      default:
        return 'bg-primary-200 text-primary-800 hover:bg-primary-300';
    }
  };

  const buttonStyles = clsx(
    'inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-4 focus:ring-primary-300',
    rest.className,
    buttonSizes(),
    buttonVariants()
  );

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { className, ...excludedRest } = rest;

  return (
    <button type="button" className={buttonStyles} ref={ref} {...excludedRest}>
      {leftIcon && <div className="inline-flex shrink-0 self-center pr-1">{leftIcon}</div>}
      {children}
      {rightIcon && <div className="inline-flex shrink-0 self-center pl-1">{rightIcon}</div>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
