function getIPAdress () {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

const path = require('path')
const webpack = require('webpack')
const cesiumBuild = './node_modules/cesium/Build/Cesium'
const CopywebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  publicPath: './', // vue-cli3.3+新版本使用
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件
    // extract: true,
    extract: process.env.NODE_ENV == 'production',
    // 开启 CSS source maps，一般不建议开启
    sourceMap: false
  },
  devServer: {
    port: 1828, // 端口号
    host: getIPAdress(), // 王敏
    // host: '127.0.0.1',//王敏
    // host: '172.16.0.250',//王敏
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    compress: true, // 配置热更新
    hot: true,
    disableHostCheck: true,
    proxy: {
      '/ttvillage': {
        target: 'http://47.103.34.28:8037/',
        // target: 'http://172.16.0.190:8088/',//曾琪
        changeOrigin: true,
        // ws: true,//是否启用websocket
        pathRewrite: {
          '^/ttvillage': '/ttvillage'
          // '^/ftserver': '/wysserver',//委羽山大有宫宣传demo
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.extensions.add('.js').add('.vue')
    config.resolve.alias.set('cesium', 'cesium/Source')
    config.plugin('define').use(webpack.DefinePlugin, [{ CESIUM_BASE_URL: JSON.stringify('') }])
  }
}
