const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gustavo',
  password: process.env.DB_PASSWORD,
  database: 'mvc_example'});

module.exports = connection;