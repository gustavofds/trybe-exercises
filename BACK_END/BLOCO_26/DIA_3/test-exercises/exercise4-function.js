const fs = require('fs');

const writeContentToFile = function(fileName, content) {
  fs.writeFileSync(fileName, content);

  return 'ok';
};

module.exports = writeContentToFile;
