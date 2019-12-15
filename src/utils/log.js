const chalk = require('chalk')

const log = (title) => (obj) => {
  if(title) {
    console.log(chalk.blue(chalk.bold(title)))
  }
  console.log(JSON.stringify(obj, '', 2))
  return obj
}

module.exports = log