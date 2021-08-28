const express = require('express');
const fs = require('fs');
const generateToken = require('./utils');
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

app.use((req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'missing fields' });
  }
  
  next();
});

app.get('/simpsons', (_req, res) => {
  res.status(200).json({ simpsonsQty: simpsons.length, simpsons });
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpson = simpsons.find((s) => s.id === id);

  if (!simpson) return res.status(404).json({ message: 'simpson not found' });
  res.status(200).json({ simpson });
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  if (simpsons.some((s) => s.id === id)) return res.status(409).json({ message: 'id already exists' });
  simpsons.push({ id, name});
  await fs.promises.writeFile('simpsons.json', JSON.stringify(simpsons));
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('App running on port 3000!');
})
