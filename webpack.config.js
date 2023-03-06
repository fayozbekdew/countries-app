const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//const { Template } = require("webpack")

module.exports = {
    mode: 'production',// development
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js'),
        about: path.resolve(__dirname, 'src/js/about.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true
    },

    devServer: {
        static: {
          directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
        open: true,
        hot: true,
        compress: true,
        port: 9000,
        historyApiFallback: true,
      },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ],
      },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Countries | Home",
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: "Countries | About",
            template: './src/pages/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new MiniCssExtractPlugin()
    ]
}