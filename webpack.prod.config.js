const TerserPlugin = require('terser-webpack-plugin')

const config = require('./webpack.config')

delete config.devServer

config.mode = 'production'
config.devtool = 'source-map'
// this one is for gh-pages
config.output.publicPath = '/react-awakens/'

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
  },
}

module.exports = config
