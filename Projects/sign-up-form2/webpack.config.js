/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    /* // Creates `style` nodes from JS strings
                    'style-loader', */
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: true,
                    toplevel: true,
                },
            }),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Account Creation',
            template: './src/template.html',
            minify: argv.mode === 'production',
        }),
        new MiniCssExtractPlugin(),
    ],
});
