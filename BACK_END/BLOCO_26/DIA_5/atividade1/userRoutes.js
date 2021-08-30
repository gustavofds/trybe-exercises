const express = require('express');
const { verifyEmail, generateToken } = require('./utils');

const router = express.Router();

const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if(!username || username.length < 4) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

const validateEmail = (message) => {
  return (req, res, next) => {
    const { email } = req.body;
    if(!email || !verifyEmail(email)) {
      return res.status(400).json({ message: message });
    }
  
    next();
  }
};

const validatePassword = (message) => {
  return (req, res, next) => {
    const { password } = req.body;
    if(
      !password
      || (password + '').length < 4
      || (password + '').length > 8
      || typeof password !== 'number'
    ) {
      return res.status(400).json({ message: message });
    }
  
    next();
  };
};

router.post(
  '/register',
  validateUsername,
  validateEmail('invalid data'),
  validatePassword('invalid data'),
  (req, res) => {
    // const { username, email, password } = req.body;
    res.status(200).json({ "message": "user created" });
});

router.post(
  '/login',
  validateEmail('email or password is incorrect'),
  validatePassword('email or password is incorrect'),
  async (req, res) => {
    const token = await generateToken();
    res.status(200).send({ token });
});

module.exports = router;
