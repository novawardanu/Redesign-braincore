const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader'],
    });
    return config;
  },
};
