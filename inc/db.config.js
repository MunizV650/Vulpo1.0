const mysql = require('mysql2');

const requiredEnv = ['DB_HOST', 'DB_USER', 'DB_NAME', 'DB_PASSWORD'];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);

if (missingEnv.length > 0) {
  throw new Error(`Missing database environment variables: ${missingEnv.join(', ')}`);
}

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
});

module.exports = connection;
