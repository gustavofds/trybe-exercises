const mongodb = require('mongodb').MongoClient;

const MONGODB_URL = 'mongodb://localhost:27017';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : mongodb.connect(MONGODB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db('model_example');
      return db;
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = connection;
