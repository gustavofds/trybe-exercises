const jwt = require('jsonwebtoken');

const verifyPassAndUsername = (username, password) => {
  if (
    !username
    || !password
    || typeof username !== 'string'
    || typeof password !== 'string'
    || username.length < 5
    || password.length < 5
  ) {
    return false;
  }

  return true; 
};

exports.login = (req, res) => {
  try {
  const { username, password } = req.body;

  if (!verifyPassAndUsername(username, password)) {
    return res.status(400).json({ message: 'Invalid username or password'});
  }

  const token = jwt.sign({
    username, 
    admin: false,
  }, process.env.SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });


  res.status(200).send({ token });

} catch (err) {
  return res.status(400).json({ message: err.message });
}
  
};
