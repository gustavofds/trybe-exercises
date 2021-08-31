// 1
function calcPromise(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject('Informe apenas números');
    }

    const result = (a + b) * c;

    if(result < 50) return reject('Valor muito baixo');
    resolve(result);
  });
}

// calcPromise(18, 2, 3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`🤯 Erro: ${err}`));

// calcPromise(4, 2, 3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`🤯 Erro: ${err}`));

// calcPromise(18, 2, 'a')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`🤯 Erro: ${err}`));

// 2 - Escreva um código para consumir a função construída no exercício anterior.
const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

/*
function consumeCalcPromise() {
  const randomNumbers = [generateRandomNumber(), generateRandomNumber(), generateRandomNumber()];

  calcPromise(...randomNumbers)
    .then((result) => console.log(`Resultado: ${result}`))
    .catch((err) => console.log(`🤯 Erro: ${err}`));
}

consumeCalcPromise();
*/
// 3

async function consumeCalcPromise() {
  const randomNumbers = Array.from({ length: 3 }).map(generateRandomNumber);

  try {
    const result = await calcPromise(...randomNumbers);
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}

consumeCalcPromise();
