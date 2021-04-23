function encode(str) {
  const encodedArr = [];
  const encodingObj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index = 0; index < str.length; index += 1) {
    if (encodingObj[str[index]]) {
      encodedArr.push(encodingObj[str[index]]);
    } else {
      encodedArr.push(str[index]);
    }
  }

  return encodedArr.join('');
}

function decode(str) {
  const decodedArr = [];
  const decodingObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let index = 0; index < str.length; index += 1) {
    if (decodingObj[str[index]]) {
      decodedArr.push(decodingObj[str[index]]);
    } else {
      decodedArr.push(str[index]);
    }
  }

  return decodedArr.join('');
}

function techList(techs, name) {
  // const resultArr = [];

  if (techs.length === 0) return 'Vazio!';

  // for (let tech in techs.sort()) {
  //   if (techs[tech]) {
  //     resultArr.push({ tech: techs[tech], name });
  //   }
  // }

  return techs.sort().map((tech) => ({ tech, name }));
}

function hydrate(drinks) {
  // let glassesOfWater = 0;
  const glassesOfWater = drinks
    .replace(/ /g, '')
    .split('')
    .filter((character) => !Number.isNaN(Number(character)))
    .reduce((acc, num) => Number(acc) + Number(num));

  // for (let number of numbers) {
  //   glassesOfWater += Number(number);
  // }

  return `${glassesOfWater} copo${glassesOfWater > 1 ? 's' : ''} de água`;
}

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
};