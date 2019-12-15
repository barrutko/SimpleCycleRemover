const findCycle = require('./findCycle')
const removeCycle = require('./removeCycle')

function removeAllCycles (input) {
  const cycle = findCycle(input, 's', [])
  let reducedGraph
  if(cycle !== undefined) {
    reducedGraph = removeAllCycles(removeCycle(input, cycle))
  } else {
    reducedGraph = input
  }
  return reducedGraph
}

module.exports = removeAllCycles