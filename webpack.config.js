/**
 * document: https://www.webpackjs.com/configuration/
 * ======== ======== =========
 */

// Use Source
const { optimize, pack, loader, plugin, server } = require('./source')

// Use Pack
const { resolve } = pack

// Export for Webpack
module.exports = {
	// 观察者
	watch: true,
  // 模式
  mode: 'development',
  // 调试工具
  devtool: false, // 'source-map',
  // 输入
  entry: resolve(`src/main.js`),
  // 输出
  output: {
    // 公共
    publicPath: '/',
    // 路径
    path: resolve(`dist`),
    // 文件名
    filename: '[name].[hash].js',
    // 目标模式
    libraryTarget: 'umd'
  },
  // 处理
  resolve: {
    // 别名
    alias: {
      '@': resolve('src')
    }
  },
  // Bundle 信息
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true
  },
	// 优化
	optimization: optimize,
  // 模块
  module: loader,
  // 插件
  plugins: plugin,
  // 开发模式服务器
  devServer: server
}
