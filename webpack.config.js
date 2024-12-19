const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // 项目入口文件
  externals: { react: "React", "react-dom": "ReactDOM" },
  output: {
    filename: "bundle.js", // 打包后的文件名
    path: path.resolve(__dirname, "dist"), // 打包文件放置的目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 正则匹配 js 或 jsx 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        loader: "babel-loader", // 使用 babel-loader 处理
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  // 开发工具
  devtool: "source-map",
  // 开发服务器
  devServer: {
    port: 3000,
    open: true,
  },
};
