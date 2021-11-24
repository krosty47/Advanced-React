const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForJavascript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};
const rulesForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};
const rules = [rulesForJavascript, rulesForStyles];

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  module: {
    rules: rules,
  },
  devServer: {
      open: true,
      port: 3000,
  }
};
