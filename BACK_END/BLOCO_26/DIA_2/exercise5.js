const fs = require('fs').promises;

const fileContent = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const createFiles = async function (contentArr) {
  await Promise.all(contentArr.map((content, index) => fs.writeFile(`file${index + 1}.txt`, content)));

  console.log('Finished writting files!');

  const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

  const readFiles = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));

  const filesContent = await Promise.all(readFiles);

  await fs.writeFile('fileAll.txt', filesContent.join(' '))
  console.log('Finished writting fileAll.txt!');
}

createFiles(fileContent);
