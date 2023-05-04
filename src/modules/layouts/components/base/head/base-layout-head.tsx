import Head from 'next/head';
import React from 'react';

type BaseLayoutHeadProps = {
  /** Optional: Seo title. */
  title?: string;
  /** Optional: Seo description. */
  description?: string;
  /** Optional: Seo url. */
  url?: string;
  /** Optional: Seo canonical url. */
  canonicalUrl?: string;
  /** Optional: Seo image used in twitter cards, etc. */
  image?: string;
};

const BaseLayoutHead: React.FC<BaseLayoutHeadProps> = (props) => {
  const { title, description, url, canonicalUrl, image = '/assets/images/faustino.png' } = props;
  return (
    <Head>
      <title>{title}</title>
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* Base */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index" />
      <meta name="description" content={description} />

      <meta name="author" content="Faustino Zanetto" />
      <meta name="keywords" content="Faustino Zanetto, Software Developer, Portfolio, React, Web Development" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="canonical" href={canonicalUrl} />
      <meta content="#7DD3FC" name="theme-color" />

      {/* Open graph */}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="2000" />
      <meta property="og:image:height" content="1000" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Faustino Zanetto" />
      <meta property="og:description" content={description} />
      {/* Twitter */}
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@faustinozanetto" />
    </Head>
  );
};

export default BaseLayoutHead;
