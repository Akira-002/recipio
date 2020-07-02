const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');



module.exports = merge(webpackConfig, {
    mode: 'production',
    plugins: [
        new Dotenv({
          path: path.resolve('.env'),
          systemvars: true
        })
      ]
});
