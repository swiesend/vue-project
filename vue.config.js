module.exports = {

  // see: https://cli.vuejs.org/config/#assetsdir
  assetsDir: 'assets', // default: ''

  // see: https://cli.vuejs.org/config/#publicpath
  publicPath: '/', // default: '/'

  // see: https://cli.vuejs.org/config/#outputdir
  outputDir: 'dist', // default: 'dist'
  
  // see: https://cli.vuejs.org/config/#runtimecompiler
  // see also: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: undefined,

  // see: https://cli.vuejs.org/config/#productionsourcemap
  productionSourceMap: false, // default: true

  // see: https://cli.vuejs.org/config/#parallel
  parallel: undefined, // default: require('os').cpus().length > 1

  css: {
    // see: https://cli.vuejs.org/config/#css-modules
    modules: true // default: false
  },

  // configureWebpack: Function
  configureWebpack: config => {

    if (process.env.NODE_ENV === 'production') {
      const path = require('path');
      const PrerenderSPAPlugin = require('prerender-spa-plugin');

      // Prerendering
      // see: https://cli.vuejs.org/config/#configurewebpack
      // see also: https://cli.vuejs.org/guide/webpack.html#simple-configuration
      // see also: https://ssr.vuejs.org/#ssr-vs-prerendering
      // see also: https://github.com/chrisvfritz/prerender-spa-plugin
      // 
      // TODO: infer all routes, maybe those solutions can help:
      // see https://github.com/eldarc/vue-prerender
      // see https://github.com/rendora/rendora
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'), // TODO: make use of outputDir
          // routes: [ '/', '/about', '/some/deep/nested/route' ],
          routes: [ '/' ],
        })
      )

      // Caching - is enabled by vue-cli by default
      // see https://webpack.js.org/guides/caching
      // 1.  https://webpack.js.org/guides/caching/#output-filenames
      // 2.  https://webpack.js.org/guides/caching/#extracting-boilerplate
      // 2.1 https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-chunks
      // 3.  https://webpack.js.org/guides/caching/#module-identifiers

    }
  },

  // see: https://cli.vuejs.org/config/#chainwebpack
  // see also: https://cli.vuejs.org/guide/css.html#css-modules
  // chainWebpack: Function
  chainWebpack: config => {
    images = config.module.rule('images')

    // add image optimization
    // see https://github.com/tcoopman/image-webpack-loader
    images
      .use('file-loader')
      .loader('image-webpack-loader')
      .tap(options => {
        return {
          mozjpeg: {
            quality: 65,
            progressive: true
          },
          optipng: {
            optimizationLevel: 7, // levels: [0-7]
            interlaced: false
          },
          pngquant:{
            quality: "65-90",
            speed: 4
          },
          gifsicle: {
            optimizationLevel: 3, // levels: [1-3]
            interlaced: false
          },
          webp: {
            quality: 75
          }
        }
      })
  }

}