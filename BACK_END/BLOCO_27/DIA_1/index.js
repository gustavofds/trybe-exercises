const { json } = require('express');
const express = require('express');
const User = require('./model/User');

const app = express();

app.use(express.json());

const verifyPassword = (req, res, next) => {
  const { password } = req.body;

  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({
      error: true,
      message: 'O campo \'password\' deve ter pelo menos 6 caracteres',
    });
  }

  next();
};

app.post('/user', verifyPassword, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      error: true,
      message: 'Envie os dados corretamente',
    });
  }

  const user = await User.createUser({ firstName, lastName, email, password });

  res.status(201).json(user);
});

app.listen(3000, () => console.log('App listening on port 3000!'));
