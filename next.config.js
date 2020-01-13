/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.graphql$/i,
      use: 'raw-loader',
    });
    return config;
  },
});
