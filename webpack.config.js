var path              = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');
var merge             = require('webpack-merge');

var TARGET    = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
const NODE_ENV = process.env.NODE_ENV || 'development';

var common = {
  entry: path.resolve(ROOT_PATH, 'src'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'src')
      }, {
          test:/\.less$/,
          loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Playing With React and D3'
    }),
    new webpack.DefinePlugin({
       NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
       preLoaders: [
          {
            test: /\.js$/,
            loaders: ['eslint'],
            include: [
              path.resolve(__dirname, "src"),
            ],
          }
        ],
      loaders: [
        {
          test: /\.jsx?$/,
          include: path.resolve(ROOT_PATH, 'src'),
          loaders: [
            'react-hot',
            'babel?presets[]=react,presets[]=es2015',
         ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

