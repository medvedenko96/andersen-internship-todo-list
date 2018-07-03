const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      //  Насторйка js
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env',
          },
        },

      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'raw-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: './index.html',
    }),
  ],
};
