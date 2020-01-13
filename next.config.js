module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.graphql$/i,
      use: 'raw-loader',
    });
    return config;
  },
};
