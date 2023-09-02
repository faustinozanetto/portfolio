import Image from '@modules/ui/components/images/image';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type CardProps = {
  children: React.ReactNode;
  /** Link to navigate when clicked */
  href: string;
  /** Thumbnail to display */
  thumbnail: string;
  /**  Title to show in the card */
  title: string;
  /** Optional: Variant of the project card. */
  variant?: 'landscape' | 'portrait';
};

const Card = React.forwardRef<HTMLAnchorElement, CardProps>((props, ref) => {
  const { href, title, thumbnail, children, variant = 'portrait' } = props;

  return (
    <Link href={href} ref={ref}>
      <div
        className={clsx(
          'group cursor-pointer overflow-hidden rounded-lg bg-card shadow-2xl border border-border',
          variant === 'portrait' && 'w-full md:max-w-sm',
          variant === 'landscape' && 'grid grid-cols-2'
        )}
      >
        {/* Image */}
        <Image
          src={thumbnail}
          alt={title}
          className={clsx(
            variant === 'portrait' ? 'h-[180px]' : 'h-auto md:h-[275px]',
            'w-full bg-no-repeat object-cover'
          )}
          title={`Project ${title} Thumbnail`}
          width={400}
          height={400}
          priority
        />

        {/* Bottom Information */}
        <div className="flex w-full flex-col p-4">
          {/* Title */}
          <h3 className="mb-1 text-xl font-semibold leading-snug tracking-tight">
            <span
              className="bg-gradient-to-r from-primary to-secondary bg-[length:0px_10px] bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_4px]
          group-hover:bg-[length:100%_10px]"
            >
              {title}
            </span>
          </h3>
          {children}
        </div>
      </div>
    </Link>
  );
});

Card.displayName = 'Card';

export default Card;
