const fs = require('fs').promises;

const readArrOfObjects = async function (path) {
  const data = await fs.readFile(path, 'utf8');
  const dataObj = JSON.parse(data);
  
  dataObj.forEach((char) => console.log(`${char.id} - ${char.name}`))
}

readArrOfObjects('simpsons.json');
