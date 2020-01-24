const fs = require('fs')

function saveResult (graph) {
  const { log } = require('../dialogs')
  const name = fs.readFileSync('./output/PROCESSING_OUTPUT', 'utf8')
  fs.unlinkSync('./output/PROCESSING_OUTPUT')
  const fileName = `reduced_${name}_${Date.now()}.json`
  fs.writeFileSync(`./output/${fileName}`, JSON.stringify(graph, null, 2));
  log('Result saved')(fileName)
  return graph;
}

module.exports = saveResult;