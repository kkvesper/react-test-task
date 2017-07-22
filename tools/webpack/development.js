const path = require('path');
const webpack = require('webpack');

const devConfig = {
  entry: {
    javascript: [
      './src/index.jsx'
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(0),
      __ENVIRONMENT__: JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
          test: /\.less$/,
          loaders: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
      },
      {
        test: /\.js(x|)$/,
        loaders: [
          'babel-loader',
          'eslint-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = devConfig;
