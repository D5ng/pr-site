const path = require("path")

module.exports = {
  mode: "production",
  entry: ["./ts/app.ts"],
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserveropen
    open: true,
    // https://webpack.js.org/configuration/dev-server/#devserverport
    port: "auto",
    hot: true,
    static: {
      directory: path.resolve(__dirname),
    },
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all", // 'all' 'async' 'initial'
  //   },
  // },
}
