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

calcPromise(18, 2, 3)
  .then((res) => console.log(res))
  .catch((err) => console.log(`🤯 Erro: ${err}`));

calcPromise(4, 2, 3)
  .then((res) => console.log(res))
  .catch((err) => console.log(`🤯 Erro: ${err}`));

calcPromise(18, 2, 'a')
  .then((res) => console.log(res))
  .catch((err) => console.log(`🤯 Erro: ${err}`));
