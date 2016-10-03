const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
];

module.exports = {
    env: process.env.NODE_ENV,
    entry: [
        './src/js/client'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'src/js'],
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/js/',
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    plugins: plugins
};
