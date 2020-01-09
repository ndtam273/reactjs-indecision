const path = require('path');

// console.log(path.join(__dirname, 'public'));

// entry -> output
console.log(__dirname);
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
