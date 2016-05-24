// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  // apiPrefix: 'http://192.168.40.131:3000',
  apiPrefix: 'http://192.168.129.128:3000',
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8888,
    proxyTable: {}
  }
}
