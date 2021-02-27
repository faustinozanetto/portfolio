module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
    return config;
  },
};
