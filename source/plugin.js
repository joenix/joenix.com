// Use Parameter
const param = require('./param')

// Use Resolve
const { resolve } = require('./pack')

// HTML Plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Export
module.exports = [
  // Html Webpack Plugin
  new HtmlWebpackPlugin({
    // 使用模板引擎
    template: '!!ejs-webpack-loader!src/template/index.ejs',
    // 输出文件名
    filename: `index.html`,
    // 压缩
    minify: true,
    // 图标
    favicon: resolve(`src/resource/favicon.ico`),
    // 上下文
    inject: `body`,
    // 参数注入
    templateParameters: param
  })
]
