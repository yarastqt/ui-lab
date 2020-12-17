const featureFlagsFunctionName = 'isFeatureEnabled'

function isFeatureFlagFunction(expression) {
  if (expression.callee.property) {
    return expression.callee.property.name === featureFlagsFunctionName
  }
  return expression.callee.name === featureFlagsFunctionName
}

function getFeatureProperties(expression) {
  if (!expression || !expression.arguments.length) return []
  return expression.arguments[0].properties
}

function getFeatureFlag(properties) {
  return properties.reduce((result, property) => {
    const key = property.key.name
    const value = property.value.value
    result[key] = value
    return result
  }, {})
}

function isEnabledFlag(flag, options) {
  return !!options.find(
    (option) => option.value === flag.value && option.component === flag.component,
  )
}

class FeatureFlagsWebpackPlugin {
  constructor(options) {
    this.options = options || []
  }

  /**
   * @param {import('webpack').Compiler} compiler
   */
  apply(compiler) {
    const options = this.options

    compiler.hooks.thisCompilation.tap('FeatureFlagsPlugin', (_, { normalModuleFactory }) => {
      const handler = (parser) => {
        const getTrue = () => parser.evaluate(true)
        const getFalse = () => parser.evaluate(false)

        parser.hooks.evaluate.for('CallExpression').tap('FeatureFlagsPlugin', (expression) => {
          if (!isFeatureFlagFunction(expression)) return
          const properties = getFeatureProperties(expression)
          const flag = getFeatureFlag(properties)
          const isEnabled = isEnabledFlag(flag, options)
          const result = isEnabled ? getTrue() : getFalse()
          result.setRange(expression.range)
          return result
        })
      }
      normalModuleFactory.hooks.parser.for('javascript/auto').tap('FeatureFlagsPlugin', handler)
    })
  }
}

module.exports = FeatureFlagsWebpackPlugin
