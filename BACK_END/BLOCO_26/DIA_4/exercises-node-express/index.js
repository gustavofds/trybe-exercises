const express = require('express');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` })
})

app.listen(3000, () => {
  console.log('App running on port 3000!');
})
