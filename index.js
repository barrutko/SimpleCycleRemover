const { pickFile, viewLogo, log } = require('./src/dialogs')
const removeAllCycles = require('./src/algorithm')
const { loadGraph, checkIfShouldContinue, createOutputFile, saveResult } = require('./src/utils')

function runApp () {  
  pickFile()
  .then(checkIfShouldContinue)
  .then(createOutputFile)
  .then(loadGraph)
  .then(log('Original graph'))
  .then(removeAllCycles)
  .then(saveResult)
  .then(log('Reduced graph'))
  .then(runApp)
}

viewLogo()
runApp()