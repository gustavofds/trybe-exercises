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

// (async () => {
//   try {
//     const data = await getSimpsonById(3);
//     console.log(data);
//     // console.log(await getSimpsonById(33))
//   } catch(err) {
//     console.log(err);
//   }
// })(); 

// (async () => {
//   try {
//     const data = await getSimpsonById(33);
//     console.log(data);
//   } catch(err) {
//     console.log('🤯 Error: ', err);  
//   }
// })();

// 4.3
const removeCharacters = async function (...ids) {
  const data = await fs.readFile('simpsons.json', 'utf-8');
  const parsedData = JSON.parse(data);

  const filteredDataByIds = parsedData.filter((char) => !ids.includes(+char.id));

  await fs.writeFile('simpsons.json', JSON.stringify(filteredDataByIds));
  console.log('Data written to file');
}

// removeCharacters(10, 6);

const createSimpsonsFamily = async function() {
  const data = await fs.readFile('simpsons.json', 'utf-8');
  const parsedData = JSON.parse(data);

  const familyIds = [1, 2, 3, 4];

  const filteredDataByIds = parsedData.filter((char) => familyIds.includes(+char.id));

  await fs.writeFile('simpsonsFamily.json', JSON.stringify(filteredDataByIds));
  console.log('Data written to file');
}

createSimpsonsFamily();