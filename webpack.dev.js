const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/src',
  devServer: {
    contentBase: 'src',
    port: 9999,
  },
  entry: [
    'webpack-dev-server/client?http://localhost:9999', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/index.jsx',
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: {
      app: path.resolve(__dirname, 'src/app'),
    },
  },
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-flow-strip-types'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'POSTS': process.env.POSTS,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
