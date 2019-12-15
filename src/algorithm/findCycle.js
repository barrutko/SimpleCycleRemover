const formatCycle = require('./formatCycle')

function findCycle (graph, currentNode, alreadySeen) {
  if(alreadySeen.includes(currentNode)) {
    return formatCycle([...alreadySeen, currentNode].slice(alreadySeen.indexOf(currentNode)))
  }
  updatedAlreadySeen = [...alreadySeen, currentNode]
  if (graph[currentNode] !== undefined) {
    const nodes = Object.keys(graph[currentNode])
    for (i = 0; i < nodes.length; i++) {
      return findCycle(graph, nodes[i], updatedAlreadySeen)
    }
  }
}

module.exports = findCycle