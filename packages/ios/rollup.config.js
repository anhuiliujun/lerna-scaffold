const {terser} = require('../../node_modules/rollup-plugin-terser')
const {getRollupConfig} = require('../../node_modules/kcd-scripts/config')
const {parseEnv} = require('../../node_modules/kcd-scripts/dist/utils')
const getGitRevision = require('../../scripts/git-revision/index')
const {version} = require('./package.json')
const {branch, commitHash} = getGitRevision()

const minify = parseEnv('BUILD_MINIFY', false)
const sourceConfig = getRollupConfig()
module.exports = {
  ...sourceConfig,
  output: sourceConfig.output.map(o => ({
    ...o,
    banner: function banner() {
      return `/* abc version v${version}-${branch}-${commitHash} */`
    },
  })),
  plugins: [
    ...sourceConfig.plugins.filter(p => p.name !== 'terser'),
    minify
      ? terser({
          output: {
            comments: function comments(_node, comment) {
              const text = comment.value
              return /abc version/i.test(text)
            },
          },
        })
      : null,
  ],
}
