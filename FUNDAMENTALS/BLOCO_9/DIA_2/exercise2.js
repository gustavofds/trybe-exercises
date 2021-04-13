function randomNumber() {
  return Math.floor(Math.random() * 50);
}

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const randomNumbers = [];
    for (let index = 0; index < 5; index += 1) {
      randomNumbers.push(randomNumber());
    }
    const randomNumbersSqrSum = randomNumbers.map((number) => number ** 2)
      .reduce((acc, cur) => acc + cur, 0);  

    if (randomNumbersSqrSum < 8000) return resolve(randomNumbersSqrSum);
    reject();
  })
    .then((response) => {
      const sumArr = [2, 3, 5, 10].map((number) => response / number);
      console.log(sumArr);
    })
    .catch((err) => console.log('Promise rejeitada'));
}

fetchPromise();


