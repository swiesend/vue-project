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
    modules: true
  }

}