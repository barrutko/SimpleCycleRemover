function loadGraph (name) {
  return require(`../../graphs/${name}.json`)
}

module.exports = loadGraph