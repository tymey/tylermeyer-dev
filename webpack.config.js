const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist", "public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist", "public"),
    },
    hot: true,
    historyApiFallback: true,      // for React Router
    port: 3000,
    proxy: [
      {
        context: ["/api"],        // you can list multiple paths here
        target: "http://localhost:8000",
        changeOrigin: true,       // rewrites host header to match target
        secure: false             // if you’re using self-signed certs on the backend
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
};
