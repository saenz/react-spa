var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './src/index.js',
  output: {
		path: path.join(__dirname, "dist/assets"),
		filename: "bundle.js",
		publicPath: "assets",
		sourceMapFilename: 'bundle.map'
  },
	devtool: '#source-map',
  devServer: {
  	inline: true,
  	contentBase: './dist',
  	port: 3000
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0', 'react']
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('autoprefixer')]
                }}]
        },
        {
            test: /\.scss/,
            use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('autoprefixer')]
                }}, 'sass-loader']
        }
    ]
  }
};

module.exports = config;
