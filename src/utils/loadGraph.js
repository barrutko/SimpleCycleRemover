const fs = require('fs')
function loadGraph (name) {
  return JSON.parse(fs.readFileSync(`./graphs/${name}.json`, 'utf8'));
}

module.exports = loadGraph