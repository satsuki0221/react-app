var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  devServer: {
    contentBase: 'src',
    port: 3000
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/index.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path:'src',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules','postcss-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
