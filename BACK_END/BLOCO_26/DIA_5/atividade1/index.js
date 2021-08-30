const express = require('express');

const app = express();

app.use(express.json());

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('App running on port 3001!');
});
