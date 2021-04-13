function randomNumber() {
  return Math.floor(Math.random() * 50);
}

const promise = new Promise((resolve, reject) => {
  const randomNumbers = [];
  for (let index = 0; index < 5; index += 1) {
    randomNumbers.push(randomNumber());
  }
  const randomNumbersSqrSum = randomNumbers.map((number) => number ** 2)
    .reduce((acc, cur) => acc + cur, 0);

  if (randomNumbersSqrSum < 8000) return resolve();
  reject();
})
  .then((response) => console.log('Promise resolvida'))
  .catch((err) => console.log('Promise rejeitada'))



