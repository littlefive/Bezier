// webpack 配置文档

import { dist, resolve, src } from './conf';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin'; // css样式从js文件中分离出来
import HtmlWebpackPlugin from 'html-webpack-plugin';

// import webpack from "webpack";

const sassExt = new ExtractTextPlugin(`assets/css/[name].[hash:8].css`);

export default {
    output: {
        publicPath: '/',
        path: resolve(dist),
        filename: `assets/js/[name].[hash:8].js`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.less'],
        alias: {
            '@': resolve(src),
            conf: resolve(src + '/conf')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: resolve(src),
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|eot|ttf|svg)$/,
                include: resolve(src),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: 'assets/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                // 图片加载处理
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                include: resolve(src),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'assets/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        sassExt, // 提取出来的样式放在css-文件中
        new HtmlWebpackPlugin({
            template: resolve(src + '/index.html'),
            filename: 'index.html',
            chunks: ['index']
        }),
        new CopyWebpackPlugin([
            {
                from: resolve(src + '/assets'),
                to: resolve(dist + '/assets'),
                toType: 'dir'
            }
        ])
    ]
};
