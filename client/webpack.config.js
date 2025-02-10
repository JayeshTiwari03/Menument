const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "[name].[contenthash].js", // Output file name with hashing
    publicPath: "/", // Base path for all assets
  },
  mode: "development", // Set to 'production' for production builds
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve files from the dist folder
    },
    port: 3000, // Port for dev server
    open: true, // Open the browser automatically
    historyApiFallback: true, // Enable client-side routing
  },
  module: {
    rules: [
      // Rule for JavaScript/JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Rule for CSS files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // Rule for SCSS files
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // Rule for images
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // Clean the dist folder before each build
    new CleanWebpackPlugin(),
    // Generate an HTML file with the bundled script injected
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      vico,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Enable code splitting for all chunks
    },
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these file extensions
  },
};
