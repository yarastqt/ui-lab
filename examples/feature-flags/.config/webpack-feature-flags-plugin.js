class FeatureFlagsWebpackPlugin {
  /**
   * @param {import('webpack').Compilation} compiler
   */
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap('FeatureFlagsWebpackPlugin', (factory) => {
      factory.hooks.parser
        .for('javascript/auto')
        .tap('FeatureFlagsWebpackPlugin', (parser, options) => {
          parser.hooks.call.for('foo').tap('FeatureFlagsWebpackPlugin', (expression) => {
            console.log('>>> XXX')
          })
        })
    })
  }
}

module.exports = FeatureFlagsWebpackPlugin
