const { pickFile, viewLogo, log } = require('./src/dialogs')
const removeAllCycles = require('./src/algorithm')
const { loadGraph, checkIfShouldContinue } = require('./src/utils')

function runApp () {  
  pickFile()
  .then(checkIfShouldContinue)
  .then(loadGraph)
  .then(log('Original graph'))
  .then(removeAllCycles)
  .then(log('Reduced graph'))
  .then(runApp)
}

viewLogo()
runApp()