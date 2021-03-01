const jestConfig = require('kcd-scripts/jest')
jestConfig.roots = ['packages/ios/src', 'packages/core/src']
jestConfig.collectCoverageFrom = ['packages/**/*.{js,jsx,ts,tsx}']
jestConfig.testEnvironment = 'jsdom'
module.exports = jestConfig
