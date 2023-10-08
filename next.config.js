const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.it'],
  },
  experimental: {
    mdxRs: false,
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
