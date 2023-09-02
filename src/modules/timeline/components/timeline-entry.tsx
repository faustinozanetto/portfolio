import React from 'react';

type TimelineEntryProps = {
  children?: React.ReactNode;
  description: string;
  from: Date | string;
  icon: React.ReactNode;
  title: string;
  to: Date | string;
};

const TimelineEntry: React.FC<TimelineEntryProps> = (props) => {
  const { title, description, icon, from, to, children } = props;

  const parseDate = (date: Date | string) => {
    if (date instanceof Date) return date.toDateString();
    return date;
  };

  return (
    <li className="group relative mb-6 ml-6 transition-all">
      <div className="absolute top-0 rounded-lg bg-primary p-1.5 group-hover:scale-110 -left-10 md:-left-11">
        {icon}
      </div>
      <h3 className="mb-1 text-lg font-semibold leading-tight group-hover:text-primary md:text-xl">{title}</h3>
      <div className="flex items-center gap-1.5 text-sm font-medium">
        <time>{parseDate(from)}</time>
        <span>-</span>
        <time>{parseDate(to)}</time>
      </div>
      <p className="text-base font-normal">{description}</p>
      {children}
    </li>
  );
};

export default TimelineEntry;
