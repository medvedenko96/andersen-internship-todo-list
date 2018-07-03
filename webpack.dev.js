const path = require('path');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/bundle.js',
  },
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
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
        use: ['style-loader', 'css-loader'],
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
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    open: 'index.html',
  },
};
