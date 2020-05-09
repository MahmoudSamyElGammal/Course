import * as path from "path";
import * as webpack from "webpack";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "boundle[contenthash].js",
    path: path.join(__dirname, "./dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
          test: /\.(js|ts)$/,
          exclude: /(node_modules)/,
          use: {
              loader: 'babel-loader',
          }
      }
    ],
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          filename: './index.html'
      })
  ],
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  // @ts-ignore
  devServer: {
    contentBase: "./src/index.ts",
    index: './index.html',
    port: 3000
  }
};

export default config;
