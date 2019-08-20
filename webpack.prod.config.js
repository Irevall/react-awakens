const TerserPlugin = require('terser-webpack-plugin');

const config = require('./webpack.config');

delete config.devServer;

config.mode = 'production';
config.devtool = 'source-map';

config.optimization = {
  minimizer: [new TerserPlugin()],
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /node_modules/,
        chunks: 'initial',
        name: 'vendor',
        priority: 10,
        enforce: true,
      }
    }
  }
};

module.exports = config;
