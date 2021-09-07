const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'gustavo',
  password: 'Gustavo123456*',
  database: 'cep_lookup',
});
