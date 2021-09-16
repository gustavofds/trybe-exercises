const jwt = require('jsonwebtoken');

exports.getMe = (req, res) => {
  res.status(200).send('GetMe OK');
};
