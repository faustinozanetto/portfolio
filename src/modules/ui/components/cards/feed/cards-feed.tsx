import React, { useMemo } from 'react';

interface CardsFeedProps {
  /** Array of data to display in the feed. */
  data: unknown[];
  /**
   * Render function called to display the cards.
   * @param props The props of the Card Component
   * @param index Index of each card.
   * @returns The card component
   */
  render: (props: unknown, index: number) => JSX.Element;
  /**
   * Render function called to display the featured card.
   * @param props The props of the Card Component
   * @returns The card component
   */
  renderFeatured: (props: unknown) => JSX.Element;
}

const CardsFeed: React.FC<CardsFeedProps> = (props) => {
  const { data, render, renderFeatured } = props;

  const content = useMemo(() => {
    if (!data.length) return;

    const featured = renderFeatured(data[0]);
    return (
      <>
        <div className="sm:col-span-2 md:col-span-3">{featured}</div>
        {data.slice(1, data.length).map(render)}
      </>
    );
  }, [data, render, renderFeatured]);

  return <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">{content}</div>;
};

export default CardsFeed;
