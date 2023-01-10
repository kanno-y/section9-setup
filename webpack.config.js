const path = require("path"); // pathモジュールをインポート
// console.log(path);
// console.log(__dirname); // -> /Users/kanno/workspace/section9-setup

module.exports = {
  // エントリー
  entry: "./dist/main.js",
  // 出力に関して記載する
  output: {
    filename: "bundle.js",
    // path: __dirname,
    path: path.resolve(__dirname, "dist"), // -> /Users/kanno/workspace/section9-setup/dist
  },
};
