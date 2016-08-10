var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: {
        main: APP_DIR + '/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /(\.jsx|\.js)/, include: APP_DIR, loader: 'babel'},
            {test: /\.json/, loader: 'json'}
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

module.exports = config;