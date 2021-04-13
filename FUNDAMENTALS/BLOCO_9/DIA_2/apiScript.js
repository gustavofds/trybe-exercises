// Exercise 1
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(response => {
      const newParagraph = document.createElement('p');
      newParagraph.innerText = response.joke;
      document.getElementById('main').appendChild(newParagraph);   
    });
}

window.onload = () => fetchJoke();