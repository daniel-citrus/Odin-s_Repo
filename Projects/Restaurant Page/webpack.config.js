const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        intial_load: './src/initial-load.js',
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
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
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Andeez Donuts',
            filename: '../index.html',
            template: 'template.html',
        }),
    ],
};