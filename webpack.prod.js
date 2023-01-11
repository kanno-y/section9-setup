const path = require("path"); // pathモジュールをインポート
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // pathモジュールをインポート
// console.log(path);
// console.log(__dirname); // -> /Users/kanno/workspace/section9-setup

module.exports = {
  mode: "production",
  // エントリー
  entry: "./src/food-app/main.ts",
  // 出力に関して記載する
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // -> /Users/kanno/workspace/section9-setup/dist
  },
  // devtool: "none",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin()],
};
