const {getRollupConfig} = require('kcd-scripts/config')
const sourceConfig = getRollupConfig()
module.exports = {
  ...sourceConfig,
}
