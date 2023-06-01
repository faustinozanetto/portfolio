import React from 'react';

export type HomeSkillsCardProps = {
  title: string;
  icon: JSX.Element;
};

const HomeSkillsCard: React.FC<HomeSkillsCardProps> = (props) => {
  const { title, icon } = props;

  return (
    <div className="bg-background shadow-lg rounded-lg border border-border p-4 group flex items-center justify-start flex-col hover:cursor-pointer hover:scale-105 transition-transform">
      <h3 className="mb-2 text-lg font-semibold leading-tight text-neutral-900 group-hover:text-primary-700 dark:text-neutral-100 dark:group-hover:text-primary-300 md:text-xl">
        {title}
      </h3>
      {icon}
    </div>
  );
};

export default HomeSkillsCard;
