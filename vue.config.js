// const path = require('path')
// const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: process.env.VUE_OUTPUT_DIR,
  assetsDir: 'static',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/variables.scss"; @import "@/styles/index.scss";'
      }
      // less: {
      //   javascriptEnabled: true
      // }
    }
  },
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
