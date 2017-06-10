const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: {
      index: 'index.html'
    },
    inline: true,
    hot: true,
    host: 'localhost',
    port: 8080,
    publicPath: '/assets/',
    noInfo: false,
    clientLogLevel: 'error'
  },
  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!resolve-url-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
};
