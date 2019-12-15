const fs = require('fs')

function getAvailableGraphList() {
  return fs.readdirSync('./graphs').map(file => file.split('.')[0])
}

module.exports = getAvailableGraphList