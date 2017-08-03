import path from 'path';
import webpack from 'webpack';

const devConfig = {
  devtool: 'eval-source-map',
  entry: {
    javascript: [
      'webpack-hot-middleware/client',
      './src/index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
        enforce: 'pre',
        test: /\.js(x|)$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader' },

      {
        test: /\.js(x|)$/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
};

export default devConfig;
