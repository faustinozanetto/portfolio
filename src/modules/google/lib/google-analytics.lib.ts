export const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS;

export const pageview = (url) => {
  // @ts-ignore
  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
