const crypto = require('crypto');


exports.verifyEmail = (email) => {
  const hasOneAtSign = email.split('').filter((el) => el === '@').length === 1; // has to be true
  const hasOneDot = email.split('').filter((el) => el === '.').length === 1; // has to be true
  const doesNotEndWithDot = email[email.length - 1] !== '.'; // has to be true
  return hasOneAtSign && hasOneDot && doesNotEndWithDot;
}

exports.generateToken = () => {
  return crypto.randomBytes(6).toString('hex');
}
