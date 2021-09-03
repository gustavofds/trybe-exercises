const connection = require('./connection');

exports.createUser = async ({ firstName, lastName, email, password }) => {
  const db = await connection();
  
  const user = await db.collection('users').insertOne({ firstName, lastName, email, password });

  return {
    id: user.insertedId,
    firstName,
    lastName,
    email,
  };
};
