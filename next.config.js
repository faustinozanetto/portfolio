/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
