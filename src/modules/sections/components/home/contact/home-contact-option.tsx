import Link from 'next/link';
import React from 'react';

export type HomeContactOptionProps = {
  href: string;
  icon: React.ReactElement;
  isExternalPage?: boolean;
  label: string;
  type: string;
};

const HomeContactOption: React.FC<HomeContactOptionProps> = (props) => {
  const { icon, href, type, label, isExternalPage = true } = props;
  return (
    <div className="bg-background flex items-center justify-center gap-2 shadow rounded-lg p-4 w-[300px] hover:scale-105 transition-transform border">
      <div className="h-10 w-10 rounded-lg bg-primary p-2">{icon}</div>
      <div className="items-start flex flex-col mr-auto">
        <h3 className="block leading-none">{type}</h3>
        <Link
          href={href}
          title={label}
          target={isExternalPage ? '_blank' : '_self'}
          prefetch={false}
          className="text-md font-semibold"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default HomeContactOption;
