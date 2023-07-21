const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão bem-sucedida ao banco de dados!');

    const checkTableQuery = `
      SELECT 1 FROM tasks LIMIT 1;
    `;

    const [rows] = await connection.query(checkTableQuery);

    if (rows.length === 0) {
      const createTableQuery = `
        CREATE TABLE tasks (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(45) NOT NULL,
          created_at VARCHAR(45) NOT NULL
        )
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `;

      await connection.query(createTableQuery);
      console.log('Tabela "tasks" criada.');
    } else {
      console.log('Tabela "tasks" já existe, não foi necessário criar novamente.');
    }

    connection.release();
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  }
})();

module.exports = pool;