var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './src/client/entry'
  ],
  output: {
    path: path.join(__dirname, '/public/js/'),
    filename: 'app.js',
    publicPath: 'http://localhost:8081/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)?$/, loaders: ['react-hot', 'babel-loader?optional[]=runtime&stage=0'], exclude: /node_modules/ }
    ]
  }
};
