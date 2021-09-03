const { ObjectId } = require('mongodb');
const connection = require('./connection');

const formatUser = ({ _id, firstName, lastName, email }) => ({ id: _id, firstName, lastName, email });

exports.getAllUsers = async () => {
  const db = await connection();

  const users = await db.collection('users').find().toArray();

  return users.map(formatUser);
}

exports.getUser = async (id) => {
  if(!ObjectId.isValid(id)) return null;

  const db = await connection();

  const user = await db.collection('users').findOne({ _id: ObjectId(id) });

  if(user) return formatUser(user);
  
  return null;
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
