const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: [
        './src/scripts/initial_load.js',
        './src/scripts/pages/about.js',
        './src/scripts/pages/menu.js',
        './src/scripts/pages/contact.js',
    ],
    devtool: 'eval-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/scripts'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Deez Donuts',
            filename: '../index.html',
            template: 'template.html',
        }),
    ],
};