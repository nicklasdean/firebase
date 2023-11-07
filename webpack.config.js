const path = require('path');

module.exports = {
    entry: './src/auth.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};