```
    const path = require('path'); 
    const HtmlWebpackPlugin = require('html-webpack-plugin')

    const fs = require('fs'); //引用文件系统模块
    // 多入口配置
    // console.log('fs', fs);

    // console.log('文件地址', './energy/js');


    module.exports = {
        // 模式
        mode: 'production',
        // 入口
        entry: {
            water: './energy/js/water.js'
        },
        // 出口，默认处理 JavaScript 文件
        output: {
            // 输出地址
            path: path.resolve(__dirname, 'energys'),
            // 输出压缩文件名，[name]会根据入口属性名来导出 
            /**
            *  webpack打包后的三种hash方式: 
            *      [hash]：整个文件夹生成的hash都是一样的
            *      [chunkhash]：只改变内容改变后文件的hash值
            *      [contenthash]：内容不同产生的的hash值不同
            */
            filename: 'js/[name].[chunkhash].js'
        },
        // loader 处理非 JavaScript 文件

        // 插件，可以用于执行范围更广的任务
        plugins: [
            new HtmlWebpackPlugin({
                template: './energy/water.html',
                // 打包后将生成的JS文件插入
                inject: 'body',
                minify: {
                    collapseWhitespace: true, // 移除空格
                    removeComments: true // 移除注释
                }
            })
        ]
    }
```