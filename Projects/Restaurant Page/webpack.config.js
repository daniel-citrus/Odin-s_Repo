const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    return {
        entry: {
            initial_load: './src/scripts/initial_load.js',
            about: './src/scripts/pages/about.js',
            menu: './src/scripts/pages/menu.js',
            contact: './src/scripts/pages/contact.js',
        },
        devtool: 'eval-source-map',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist/assets'),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        (argv.mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: '../index.html',
                template: 'template.html',
                title: 'Andeez Donuts',
            }),
            new MiniCssExtractPlugin(),
        ],
        target: 'node',
    }
};