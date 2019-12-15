function formatCycle (rawCycle) {
  let formattedCycle = {}
  if (rawCycle !== undefined) {
    for (let index = 0; index < rawCycle.length - 1; index++) {
      formattedCycle[rawCycle[index]] = rawCycle[index + 1]
    }
  }
  return formattedCycle
}

module.exports =  formatCycle