const { json } = require('express');
const express = require('express');
const User = require('./model/User');

const app = express();

app.use(express.json());

app.get('/user', async (_req, res) => {
  const users = await User.getAllUsers();

  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.getUser(id);

  if (!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado.' });

  res.status(200).json(user);
})

const verifyFields = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Envie os dados corretamente',
    });
  }

  next();
}

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

app.post('/user', verifyFields, verifyPassword, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.createUser({ firstName, lastName, email, password });

  res.status(201).json(user);
});

app.put('/user/:id', verifyFields, verifyPassword, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const user = await User.updateUser({ id, firstName, lastName, email, password });

  if (!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  res.status(200).json(user);
});

app.listen(3000, () => console.log('App listening on port 3000!'));
