// Get variables from .env file for database connection
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  namedPlaceholders: true,
  connectionLimit: 100
});

// Try to get a connection to the database
pool
  .getConnection()
  .then((connection) => {
    console.info(`Using database ${DB_NAME}`);

    connection.release();
  })
  .catch((error) => {
    console.warn(
      "Warning:",
      "Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.error("Error message:", error.message);
  });

// Store database name into client for further uses
pool.databaseName = DB_NAME;
// Ready to export
module.exports = pool;