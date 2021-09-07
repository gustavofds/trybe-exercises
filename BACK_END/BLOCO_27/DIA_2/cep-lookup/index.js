const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep',)

app.listen(3000, () => console.log('Listening on port 3000'));
