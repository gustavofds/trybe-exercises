const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong'});
})

app.listen(3000, () => {
  console.log('App running on port 3000!');
})
