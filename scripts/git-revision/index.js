const runGitCommand = require('./helpers/run-git-command')

const BRANCH_COMMAND = 'rev-parse --abbrev-ref HEAD'
const COMMITHASH_COMMAND = 'rev-parse --short=8 HEAD'

module.exports = function getGitRevision() {
  return {
    branch: runGitCommand(undefined, BRANCH_COMMAND),
    commitHash: runGitCommand(undefined, COMMITHASH_COMMAND),
  }
}
