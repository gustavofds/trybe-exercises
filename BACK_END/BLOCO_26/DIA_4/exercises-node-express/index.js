const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });
  res.status(200).json({ message: `Hello, ${name}!`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// Exercises 5~8
const simpsons = JSON.parse(fs.readFileSync('simpsons.json', 'utf-8'));

app.get('/simpsons', (_req, res) => {
  res.status(200).json({ simpsonsQty: simpsons.length, simpsons });
});

app.listen(3000, () => {
  console.log('App running on port 3000!');
})
