var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public',
    filename: 'index.js'
  },
  plugins: [new CopyWebpackPlugin([{from: 'src/index.html'}])],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css|sass)$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'file?name=public/[name].[ext]'
      }
    ]
  }
};
