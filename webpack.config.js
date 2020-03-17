const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}
let isProduction = 'production';

module.exports = {
    // mode: isProduction || 'development',

    externals: {
        paths: PATHS
    },
    entry: [
        `${PATHS.src}/${PATHS.assets}js/index.js`,
        `${PATHS.src}/${PATHS.assets}scss/main.scss`
    ],

    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/'
    },
    devServer: {
        contentBase: PATHS.dist,
        overlay: true,
        host: '192.168.1.193',
        port: 4200,
        historyApiFallback: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].css`
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
            { from: `${PATHS.src}/${PATHS.assets}svg`, to: `${PATHS.assets}svg` }
        ]),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
            inject: 'body'
        })
    ],

    module: {
        rules: [
            // {
            //     test: /.s?css$/,
            //     use: [
            //       isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            //       'css-loader',
            //     //   {
            //     //     loader: 'resolve-url-loader',
            //     //     options: {
            //     //       root: path.join(__dirname, 'src')
            //     //     }
            //     //   },
            //       {
            //         loader: 'sass-loader',
            //         options: {
            //           sourceMap: true,
            //           sourceMapContents: false
            //         }
            //       }
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, 
            {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `./postcss.config.js` } }
                    },
                ]
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: './postcss.config.js'
                            }
                        }
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    fallback: "file-loader"
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

        ]
    },

}