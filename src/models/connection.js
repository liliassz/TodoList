// Importa o pacote 'mysql2/promise' para estabelecer conexões com o MySQL de forma assíncrona
const mysql = require('mysql2/promise');
// Importa o pacote 'dotenv' para carregar variáveis de ambiente a partir de um arquivo .env
require('dotenv').config();

// Cria um pool de conexões com o banco de dados MySQL usando as variáveis de ambiente
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// Função assíncrona que será executada imediatamente para estabelecer a conexão com o banco de dados
(async () => {
  try {
    // Obtém uma conexão do pool de conexões com o banco de dados
    const connection = await pool.getConnection();
    // Exibe uma mensagem indicando que a conexão foi bem-sucedida
    console.log('Conexão bem-sucedida ao banco de dados!');

    // Consulta para verificar se a tabela "tasks" já existe no banco de dados
    const checkTableQuery = `
      SELECT 1 FROM tasks LIMIT 1;
    `;
    // Executa a consulta e obtém o resultado
    const [rows] = await connection.query(checkTableQuery);

    // Verifica se a tabela "tasks" não existe (nenhuma linha retornada pela consulta)
    if (rows.length === 0) {
      // Query SQL para criar a tabela "tasks" com as colunas especificadas
      const createTableQuery = `
        CREATE TABLE tasks (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(45) NOT NULL,
          created_at VARCHAR(45) NOT NULL
        )
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `;

      // Executa a query para criar a tabela no banco de dados
      await connection.query(createTableQuery);
      // Exibe uma mensagem informando que a tabela "tasks" foi criada
      console.log('Tabela "tasks" criada.');
    } else {
      // Se a tabela "tasks" já existir, exibe uma mensagem informando que não é necessário criar novamente
      console.log('Tabela "tasks" já existe, não foi necessário criar novamente.');
    }

    // Libera a conexão para que possa ser reutilizada por outros processos
    connection.release();
  } catch (err) {
    // Em caso de erro, exibe uma mensagem de erro indicando que houve problema ao conectar ao banco de dados
    console.error('Erro ao conectar ao banco de dados:', err.message);
  }
})();

// Exporta o pool de conexões para ser utilizado em outros módulos do projeto
module.exports = pool;
