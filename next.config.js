const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.it'],
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
