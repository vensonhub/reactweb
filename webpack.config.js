const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const PATHS = {
  APP: path.join(__dirname, 'app'),
  BUILD: path.join(__dirname, 'build')
};

var plugins = [];

var index = {
  entry: [path.join(PATHS.APP, '/js/index.js')],
  tpl: PATHS.APP + '/index.html'
};
var vendor = ['react', 'react-dom','redux','react-redux','react-router'];

plugins.push(
  // new CopyWebpackPlugin([
  //   {from: PATHS.APP + '/images/',to: PATHS.BUILD + '/images/'}
  // ]),
  new ExtractTextPlugin('./css/[name].css'),
  new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new ParallelUglifyPlugin({
    uglifyJS:{
      compress:{
        warnings:false
        // drop_debugger:true,
        // drop_console:true
      },
      comments:false,
      sourceMap:true,
      mangle:true
    }
  }),
  new htmlWebpackPlugin({
    filename: 'index.html',
    template: index.tpl,
    minify: {
        removeComments: true,
        collapseWhitespace: true
    }
    // chunks: ["common",'index']
  })

);

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: PATHS.BUILD,
    host: process.env.HOST,
    port: 8080, //sudo npm run start 如果是80端口需要权限
    // inline: true,//实时刷新
    // hot:true
    // progress: true
    // overlay:{
    //   errors:true,
    //   warnings:true
    // }
  },
  entry: {
    "bundle": index.entry,
    "vendor":vendor
  },
  module: {
    loaders: [
      {
            test: /\.html$/, //获取html里面的图片
            loader: 'html-loader'
      },
      {
        test: /\.js?$/,
        // loader: "eslint-loader",
        exclude: /(node_modules)/,
        // enforce: 'pre', //webpack2写法
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader?module&importLoaders=1&localIdentName=[name]_[local]', 'postcss-loader'],
          publicPath:'../'
        })
      },
      {
          test: /\.(png|jpg|gif|jpeg)$/, //处理css文件中的背景图片
          loader: 'url-loader?limit=20000&name=images/[hash:4].[ext]'
          //当图片大小小于这个限制的时候，会自动启用base64编码图片。减少http请求,提高性能
      }
    ]
  },
  output: {
    path: PATHS.BUILD,
    filename: "js/[name]/[name].js"
  },
  resolve: {
     //注意一下, extensions webpack2第一个不是空字符串! 对应不需要后缀的情况.
    //  extensions: ['.js', '.json','.less', 'jsx'],
     //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    //  alias: {
    //      'assets': path.resolve(__dirname, './app/css')
    //  }
 },
  plugins
}
