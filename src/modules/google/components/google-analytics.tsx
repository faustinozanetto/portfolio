import React from 'react';
import Script from 'next/script';
import { GOOGLE_ANALYTICS_ID } from '../lib/google-analytics.lib';

const GoogleAnalytics: React.FC = () => (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `}
    </Script>
  </>
);

export default GoogleAnalytics;
