import Head from 'next/head';
import React from 'react';

interface IBaseLayoutHeadProps {
  /** Seo title */
  title?: string;
  /** Seo description */
  description?: string;
  /** Seo url */
  url?: string;
  /** Seo canonical url */
  canonicalUrl?: string;
  /** Seo image used in twitter cards, etc. */
  image?: string;
}

const BaseLayoutHead: React.FC<IBaseLayoutHeadProps> = (props) => {
  const { title, description, url, canonicalUrl, image = `images/brand/snappy-logo.png` } = props;
  return (
    <Head>
      <title>{title}</title>
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* Base */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index" />
      <meta name="description" content={description} />

      <meta content="Faustino Zanetto, Faustino, Zanetto, Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="canonical" href={canonicalUrl} />
      <meta content="#4f46e5" name="theme-color" />

      {/* Open graph */}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="452" />
      <meta property="og:image:height" content="175" />
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
