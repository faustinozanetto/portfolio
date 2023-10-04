import React from 'react';

export type HomeSkillsCardProps = {
  icon: React.ReactNode;
  title: string;
};

const HomeSkillsCard: React.FC<HomeSkillsCardProps> = (props) => {
  const { title, icon } = props;

  return (
    <div className="bg-background shadow rounded-lg border p-4 group flex items-center justify-start flex-col hover:cursor-pointer hover:scale-105 transition-transform">
      <h3 className="mb-2 text-lg font-semibold leading-tight group-hover:text-primary md:text-xl">{title}</h3>
      {icon}
    </div>
  );
};

export default HomeSkillsCard;
