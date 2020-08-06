// vue.config.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    devServer: {
      port: 9200,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:7002',
          changeOrigin: true,
          pathRewrite: { '^/api': '/api' }
        }
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
