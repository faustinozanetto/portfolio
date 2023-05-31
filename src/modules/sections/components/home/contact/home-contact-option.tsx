import Link from 'next/link';
import React from 'react';

export type HomeContactOptionProps = {
  icon: React.ReactElement;
  href: string;
  type: string;
  label: string;
  isExternalPage?: boolean;
};

const HomeContactOption: React.FC<HomeContactOptionProps> = (props) => {
  const { icon, href, type, label, isExternalPage = true } = props;
  return (
    <div className="flex items-center justify-center gap-2 bg-background-100 dark:bg-background-900 shadow-lg rounded-lg p-4 w-[300px] hover:scale-105 transition-transform">
      <div className="h-10 w-10 rounded-lg bg-primary-600 p-2 dark:bg-primary-800">{icon}</div>
      <div className="items-start flex flex-col mr-auto">
        <span className="block leading-none">{type}</span>
        <Link href={href} target={isExternalPage ? '_blank' : '_self'} className="text-md font-semibold">
          {label}
        </Link>
      </div>
    </div>
  );
};

export default HomeContactOption;