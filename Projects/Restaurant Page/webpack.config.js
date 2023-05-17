const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        intial_load: './src/scripts/initial_load.js',
        about: './src/scripts/pages/about.js',
        menu: './src/scripts/pages/menu.js',
        contact: './src/scripts/pages/contact.js',
    },
    devtool: 'eval-source-map',
    output: {
        filename: '[name].js',
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