const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

(async () => {
  try{
    const connection = await pool.getConnection();
    console.log('Conexão bem-sucedida ao banco de dados!');
    connection.release();

  }catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  }
})();

module.exports = pool;
