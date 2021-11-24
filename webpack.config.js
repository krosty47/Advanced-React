const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForJavascript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [["@babel/preset-react"]],
  },
};
const rulesForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};
const rulesForTypescript = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const rules = [rulesForJavascript, rulesForStyles, rulesForTypescript];

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  module: {
    rules: rules,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    open: true,
    port: 3000,
  },
};
