const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname),
        filename: "index.js",
        library: 'funcName',  // your cloud function name here...
        libraryTarget: 'commonjs',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts'],
        modules: [ path.resolve(__dirname, 'src'), path.resolve(__dirname, 'mode_modules')]
    },
    plugins: [
        new BabiliPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    target: 'node',
    externals: [nodeExternals()]
};
