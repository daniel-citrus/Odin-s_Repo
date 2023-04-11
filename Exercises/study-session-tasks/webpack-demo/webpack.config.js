const path = require('path');

module.exports = {
    entry: ['/src/index.js', '/src/other.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
};