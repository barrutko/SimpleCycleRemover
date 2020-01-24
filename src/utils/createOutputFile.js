const fs = require('fs')

function createOutputFile (name) {
  const outputDirectory = './output';
  if (!fs.existsSync(outputDirectory)){
    fs.mkdirSync(outputDirectory);
  }
  fs.writeFileSync(outputDirectory + '/PROCESSING_OUTPUT', name);
  return name;
}

module.exports = createOutputFile;