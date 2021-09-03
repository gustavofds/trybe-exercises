const mongodb = require('mongodb');

const MONGODB_URL = 'mongodb://localhost:27017';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// let db = null;

const connection = () => {
  // return db
  //   ? Promise.resolve(db)
  return mongodb.MongoClient.connect(MONGODB_URL, OPTIONS)
    .then((conn) => conn.db('model_example'))
    .catch((err) => console.log(err));
}

module.exports = connection;
