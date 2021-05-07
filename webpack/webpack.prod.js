const webpack = require('webpack');

module.export = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('github.com/breindy'),
        }),
    ],
}