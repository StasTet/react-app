var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
          path: __dirname + '/public/build/',
          publicPath: "build/",
          filename: "bundle.js"
      },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jsx$/,
        loader: "react-hot!babel",
        exclude: [/node_modules/, /public/]
      }
    ]
  }
};