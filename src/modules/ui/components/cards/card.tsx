import Image from '@modules/ui/components/images/image';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type CardProps = {
  children: React.ReactNode;
  /** Optional: Variant of the project card. */
  variant?: 'landscape' | 'portrait';
  /** Link to navigate when clicked */
  href: string;
  /**  Title to show in the card */
  title: string;
  /** Thumbnail to display */
  thumbnail: string;
};

const Card = React.forwardRef<HTMLAnchorElement, CardProps>((props, ref) => {
  const { href, title, thumbnail, children, variant = 'portrait' } = props;

  return (
    <Link href={href} ref={ref}>
      <div
        className={clsx(
          'group cursor-pointer overflow-hidden rounded-lg bg-neutral-100 shadow-lg dark:bg-neutral-800',
          variant === 'portrait' && 'w-full md:max-w-sm',
          variant === 'landscape' && 'grid grid-cols-2'
        )}
      >
        {/* Image */}
        <Image
          src={thumbnail}
          alt={title}
          className={clsx(variant === 'portrait' ? 'h-[180px]' : 'h-auto sm:h-[275px]', 'object-cover')}
          width={500}
          height={500}
          priority
        />

        {/* Bottom Information */}
        <div className="flex w-full flex-col space-y-1 p-4 text-neutral-900 dark:text-neutral-100">
          {/* Title */}
          <h2 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
            <span
              className="bg-gradient-to-r from-primary-300 to-primary-200 bg-[length:0px_10px] bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_4px]
          group-hover:bg-[length:100%_10px]
          dark:from-primary-600 dark:to-primary-800"
            >
              {title}
            </span>
          </h2>
          {/* Rest of the childrens */}
          {children}
        </div>
      </div>
    </Link>
  );
});

Card.displayName = 'Card';

export default Card;
