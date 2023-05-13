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
    output: {
        filename: '[name]-build.js',
        path: path.resolve(__dirname, 'dist/scripts'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Andeez Donuts',
            filename: '../index.html',
            template: 'template.html',
        })
    ],
};