var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/client/entry'
  ],
  output: {
    path: path.join(__dirname, 'build/public/js/'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    })
  ],
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
