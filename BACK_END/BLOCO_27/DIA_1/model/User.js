const connection = require('./connection');

const formatUser = ({ _id, firstName, lastName, email }) => ({ id: _id, firstName, lastName, email });

exports.getAllUsers = async () => {
  const db = await connection();

  const users = await db.collection('users').find().toArray();

  console.log(users);

  return users.map(formatUser);
}

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
