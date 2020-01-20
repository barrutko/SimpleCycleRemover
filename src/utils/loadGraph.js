function loadGraph (name) {
  return JSON.parse(JSON.stringify(require(`../../graphs/${name}.json`)))
}

module.exports = loadGraph