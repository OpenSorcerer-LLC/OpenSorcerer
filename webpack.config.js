const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|svg|png)$/i,
        loader: "url-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    proxy: {
      "/": "http://localhost:3000",
    },
  },
};
