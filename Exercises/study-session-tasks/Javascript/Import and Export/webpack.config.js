const path = require('path');

module.exports = {
    mode: 'production',
    entry: [
        './src/main.js',
        './src/barrel_module.js',
        './src/support.js',
        './src/other_support.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
};