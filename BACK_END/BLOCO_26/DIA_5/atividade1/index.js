const express = require('express');
const { verifyEmail } = require('./utils');

const app = express();

app.use(express.json());

const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if(!username || username.length < 4) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if(!email || !verifyEmail(email)) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if(
    !password
    || (password + '').length < 4
    || (password + '').length > 8
    || typeof password !== 'number'
  ) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

app.post('/user/register', validateUsername, validateEmail, validatePassword, (req, res) => {
  // const { username, email, password } = req.body;
  res.status(200).json({ "message": "user created" });
});

app.listen(3000, () => {
  console.log('App running on port 3001!');
});
