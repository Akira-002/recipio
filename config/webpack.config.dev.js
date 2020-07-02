const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const writeFilePlugin = require('write-file-webpack-plugin');
const Dotenv = require('dotenv-webpack');



module.exports = merge(webpackConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    inline: true,
    open: true,
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api/**': {
        target: 'http://localhost:8000',
        secure: false,
        logLevel: 'debug'
      }
    },
  },
  plugins: [
    new writeFilePlugin(),
    new Dotenv('../.env')
  ]
})