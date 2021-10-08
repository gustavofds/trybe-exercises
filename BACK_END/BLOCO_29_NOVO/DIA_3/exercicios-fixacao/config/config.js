require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'orm_assoc_test_db',
    host: "127.0.0.1",
    dialect: "mysql",
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false
  }
};
