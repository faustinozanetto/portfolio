'use client';

import React from 'react';
import { buttonVariants } from '@modules/ui/components/buttons/button';
import { cn } from '@modules/ui/lib/ui.lib';
import Link from 'next/link';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="mx-4 flex w-full flex-col items-center md:mx-0">
      <div className="bg-background-100 dark:bg-background-800 my-6 w-full rounded-lg p-4 px-4 shadow-lg sm:px-6 md:my-14 md:max-w-lg md:p-6 lg:my-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            An error occurred!
          </h1>
          <p className="max-w-lg text-center md:text-lg">
            We apologize for the inconvenience, but it seems that an error has occurred. Our team has been notified and
            is working diligently to resolve the issue.
          </p>

          <p className="max-w-lg text-center font-bold text-destructive md:text-lg">{error.message}</p>

          <div className="flex w-full flex-col gap-2">
            <Link href="/" title="Go Home" className={cn(buttonVariants({}), 'w-full')}>
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
