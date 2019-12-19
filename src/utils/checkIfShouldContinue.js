function checkIfShouldContinue (dialogResult) {
  if (dialogResult.pickedFile === -1) {
    process.exit()
  }
  
  return dialogResult.pickedFile
}

module.exports = checkIfShouldContinue
