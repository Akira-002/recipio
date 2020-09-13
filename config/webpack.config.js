const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './client/public/index.html',
  filename: './index.html'
});

module.exports = {
  entry: './client/js/index.js',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  node: { global: true, fs: 'empty' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../client/scss'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: path.resolve(__dirname, '../client/images'),
        loader: 'url-loader',
        options: {
          outputPath: '../dist/images',
          publicPath: path => './images/' + path
        }
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ]
};