function findValueToReduce (graph, formattedCycle) {
  let valueToReduce = Number.MAX_SAFE_INTEGER
  Object.keys(formattedCycle).forEach(key => {
    if(graph[key][formattedCycle[key]] < valueToReduce) {
      valueToReduce = graph[key][formattedCycle[key]]
    }
  })
  return valueToReduce
}

module.exports = findValueToReduce