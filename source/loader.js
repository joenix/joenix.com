module.exports = {
	// 规则
  rules: [
    {
      // Ejs 模板
      test: /\.ejs$/,
      // 使用
      use: [
        {
          // 使用 ejs webpack 滤镜
          loader: 'ejs-webpack-loader',
          // 配置
          options: {
            // 压缩
            htmlmin: true
          }
        }
      ]
    },
    {
      // Less 结尾文件
      test: /\.less$/,
      // 使用
      use: [
        // 使用 style 滤镜
        { loader: 'style-loader' },
        // 使用 css 滤镜
        { loader: 'css-loader' },
        // 使用 less 滤镜
        { loader: 'less-loader' }
      ]
    },
    {
      // 图片资源
      test: /\.(png|jpg|gif)$/,
      // 使用
      use: [
        {
          // 路径滤镜
          loader: 'url-loader',
          // 配置
          options: {
						// 容量
            limit: false // 8192
          }
        }
      ]
    },
    {
      // Javascript 滤镜
      test: /\.js$/,
      // 使用 es-lint 滤镜
      loader: 'eslint-loader',
      // 编译前检测
      enforce: 'pre',
      // 排除依赖包
      exclude: /node_modules/,
      // 配置项
      options: {
        // 使用预置规则
        formatter: require('eslint-friendly-formatter')
      }
    }
  ]
}
