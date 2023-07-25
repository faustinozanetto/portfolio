import React, { useMemo } from 'react';

import TimelineEntry from './timeline-entry';

type TimelineProps = {
  entries: React.ComponentPropsWithoutRef<typeof TimelineEntry>[];
};

const Timeline: React.FC<TimelineProps> = (props) => {
  const { entries } = props;

  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()),
    [entries]
  );

  return (
    <ol className="relative border-l-2 border-neutral-400 dark:border-neutral-600">
      {sortedEntries.map((entry) => (
        <TimelineEntry key={`entry-${entry.title}`} {...entry} />
      ))}
    </ol>
  );
};

export default Timeline;
