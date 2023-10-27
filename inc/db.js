const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vulpo',
  password: 'jr71103625'
});

module.exports = connection;