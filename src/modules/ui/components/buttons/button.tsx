import clsx from 'clsx';
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
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
        return 'hover:bg-blue-300 hover:text-blue-800';
      case 'solid':
      default:
        return 'bg-blue-200 text-blue-800 hover:bg-blue-300';
    }
  };

  const buttonStyles = clsx(
    'rounded-lg text-base font-semibold transition-all focus:outline-none items-center inline-flex focus:ring-4 focus:ring-blue-300',
    rest.className,
    buttonSizes(),
    buttonVariants()
  );

  const { className, ...excludedRest } = rest;

  return (
    <button type="button" className={buttonStyles} ref={ref} {...excludedRest}>
      {leftIcon && <div className="inline-flex self-center pr-1 shrink-0">{leftIcon}</div>}
      {children}
      {rightIcon && <div className="inline-flex self-center shrink-0 pl-1">{rightIcon}</div>}
    </button>
  );
});

export default Button;
