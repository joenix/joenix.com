// Use Resolve
const { resolve } = require('./pack')

// Export
module.exports = {
  // 端口
  port: 8080,
  // 目录 - 已失效
  // contentBase: resolve(`src`),
  // gzip 压缩
  compress: true,
  // 404
  historyApiFallback: true,
  // 热更新
  hot: true,
  // HTTPS
  https: false,
  // 打开
  open: false,
  // 代理
  proxy: {
    '/oss': `http://oss.joenix.com`,
  },
}
