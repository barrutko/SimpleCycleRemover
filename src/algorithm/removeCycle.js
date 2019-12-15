const findValueToReduce = require('./findValueToReduce')
const { logCycle } = require('../dialogs')

function removeCycle (graph, cycle) {
  let valueToReduce = findValueToReduce(graph, cycle)
  Object.keys(cycle).forEach(key => {
    graph[key][cycle[key]] -= valueToReduce
    if (graph[key][cycle[key]] === 0) {
      delete graph[key][cycle[key]]
      if (Object.keys(graph[key]).length === 0) {
        delete graph[key]
      }
    }
  })
  logCycle(cycle, valueToReduce)
  return graph
}

module.exports = removeCycle