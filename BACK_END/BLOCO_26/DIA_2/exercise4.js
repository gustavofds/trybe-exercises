const fs = require('fs').promises;

const readArrOfObjects = async function (path) {
  const data = await fs.readFile(path, 'utf8');
  const dataArr = JSON.parse(data);
  
  dataArr.forEach((char) => console.log(`${char.id} - ${char.name}`))
}

// readArrOfObjects('simpsons.json');

// 4.2
const getSimpsonById = async function(id) {
  try {
    const data = await fs.readFile('simpsons.json', 'utf-8');
    const dataArr = JSON.parse(data);

    const selectedCharacter = dataArr.find((char) => +char.id === id);

    if (!selectedCharacter) throw new Error('id não encontrado');

    return selectedCharacter;
  } catch(err) {
    throw err;
  }
};

(async () => {
  try {
    const data = await getSimpsonById(3);
    console.log(data);
    // console.log(await getSimpsonById(33))
  } catch(err) {
    console.log(err);
  }
})(); 

(async () => {
  try {
    const data = await getSimpsonById(33);
    console.log(data);
  } catch(err) {
    console.log('🤯 Error: ', err);  
  }
})(); 
