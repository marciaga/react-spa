const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  })
];

module.exports = {
    env: process.env.NODE_ENV,
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src/js/client'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'src/js'],
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/js/',
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    plugins: plugins,
    devtool: 'cheap-eval-source-map',
    devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  }
};
