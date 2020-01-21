const formatCycle = require('./formatCycle')

function findCycle (graph, currentNode, alreadySeen) {
  if(alreadySeen.includes(currentNode)) {
    return formatCycle([...alreadySeen, currentNode].slice(alreadySeen.indexOf(currentNode)))
  }
  const updatedAlreadySeen = [...alreadySeen, currentNode];
  if (graph[currentNode] !== undefined) {
    const nodes = Object.keys(graph[currentNode])
    let result;
    for (let i = 0; i < nodes.length; i++) {
      result = findCycle(graph, nodes[i], updatedAlreadySeen)
      if(result !== undefined) {
        break
      }
    }
    return result
  }
}

module.exports = findCycle