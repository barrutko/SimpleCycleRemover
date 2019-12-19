const inquirer = require('inquirer')
const { getAvailableGraphList } = require('../utils')

function pickFile () {
  availableGraphList = getAvailableGraphList()
  return inquirer.prompt([{
      type: 'list',
      name: 'pickedFile',
      message: 'Pick graph file',
      choices: [... availableGraphList.map(file => ({
        name: file,
        value: file,
      })), {
        name: 'QUIT APP',
        value: -1
      }]
    }])
}

module.exports = pickFile