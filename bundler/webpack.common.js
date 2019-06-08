const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')



module.exports = {
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin([ { from: 'static' } ]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true,
            chunks:['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/pages/ineyes.html'),
            inject: true,
            chunks:['ineyes'],
            filename: 'ineyes.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/pages/movIn.html'),
            inject: true,
            chunks:['movIn'],
            filename: 'movIn.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/pages/wheelp.html'),
            inject: true,
            chunks:['wheelp'],
            filename: 'wheelp.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/pages/illustrations.html'),
            inject: true,
            chunks:['illustrations'],
            filename: 'illustrations.html'
        })

    ],
    entry: {
        index:'./src/js/index.js',
        ineyes:'./src/js/ineyes.js',
        movIn:'./src/js/movIn.js',
        wheelp:'./src/js/wheelp.js',
        illustrations:'./src/js/illustrations.js'
    },
    output:
    {
        filename: 'bundle.[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2|woff|otf|eot|ttf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use:
                [
                    'html-loader'
                ]
            }
        ]
    }
}
