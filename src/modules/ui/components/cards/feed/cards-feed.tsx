import React, { useMemo } from 'react';

type CardsFeedProps<T> = {
  /** Array of data to display in the feed. */
  data: T[];
  /**
   * Render function called to display the cards.
   * @param props The props of the Card Component
   * @param index Index of each card.
   * @returns The card component
   */
  render: (props: T, index: number) => JSX.Element;
  /**
   * Render function called to display the featured card.
   * @param props The props of the Card Component
   * @returns The card component
   */
  renderFeatured: (props: T) => JSX.Element;
};

const CardsFeed = <T,>(props: CardsFeedProps<T>) => {
  const { data, render, renderFeatured } = props;

  const content = useMemo(() => {
    if (data.length === 0) return;

    return (
      <>
        {data.length && data[0] ? <div className="md:col-span-3">{renderFeatured(data[0])}</div> : null}
        {data.slice(1, data.length).map(render)}
      </>
    );
  }, [data, render, renderFeatured]);

  return <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">{content}</div>;
};

export default CardsFeed;
