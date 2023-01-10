const path = require("path"); // pathモジュールをインポート
// console.log(path);
// console.log(__dirname); // -> /Users/kanno/workspace/section9-setup

module.exports = {
  // エントリー
  entry: "./src/food-app/main.ts",
  // 出力に関して記載する
  output: {
    filename: "bundle.js",
    // path: __dirname,
    path: path.resolve(__dirname, "dist"), // -> /Users/kanno/workspace/section9-setup/dist
  },
  devtool: "inline-source-map",
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
};
