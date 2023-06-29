const path = require("path");
//html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//css抽离插件
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //模式
  mode: "development",
  //打包入口
  entry: "./webpack/index.js",
  output: {
    //打包出口
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js",
  },
  module: {
    rules: [
      //处理js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   presets: ["@babel/preset-env"],
            // },
          },
        ],
      },
      //处理css
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      //处理less
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      //处理scss
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      //精灵图
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            //  如果当前图片资源过大 那么则单独打包成独立的图片
            // 如果图片比较小 则转换为base64格式图片嵌入到html网页中
            maxSize: 5 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./webpack/index.html"),
      filename: "[name].[contenthash:8].html",
    }),
    new miniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    }),
  ],
};
