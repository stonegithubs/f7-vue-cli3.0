const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devServer: {
        port: 8888,
    },
    lintOnSave: true,
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: __dirname+'/src/moudle/', // 不打包直接输出的文件
                    to: __dirname+'/dist/', // 打包后静态文件放置位置
                    ignore: ['.*'] // 忽略规则。（这种写法表示将该文件夹下的所有文件都复制）
                }
            ])
        ],
        optimization: {
            // 根据需要为各应用分离代码块
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "chunk-commons",//只用于打包公共components
                        chunks: 'all',
                        test: /[\\/]src[\\/]components[\\/]/,
                        minChunks: 2, // 最小共用次数
                        minSize: 0,//配置文件大小，以达到最高性价比
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    libs: {
                        name: "chunk-libs",// 只打包初始时依赖的第三方
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: "initial"
                    }
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                plugins: [

                ]
            }
        }
    },
}