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

  // see: https://cli.vuejs.org/config/#configurewebpack
  // see also: https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // configureWebpack: Function
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const path = require('path');
      const PrerenderSPAPlugin = require('prerender-spa-plugin');

      console.log(config.plugins)

      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'), // TODO: reference to outputDir
          // routes: [ '/', '/about', '/some/deep/nested/route' ],
          routes: [ '/' ], // TODO infer all routes
        })
      )
    }
  },

  // see: https://cli.vuejs.org/config/#chainwebpack
  // see also: https://cli.vuejs.org/guide/css.html#css-modules
  // chainWebpack: Function

}