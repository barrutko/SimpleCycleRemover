const log = require('./log')

function logCycle (cycle, value) {
  const nodes = [...Object.keys(cycle)].map(node => `${node} -> `).join('')
  const info = `${nodes.substring(0, nodes.length - 4)} [${value}]`
  log('Removing cycle')(info)
}

module.exports = logCycle