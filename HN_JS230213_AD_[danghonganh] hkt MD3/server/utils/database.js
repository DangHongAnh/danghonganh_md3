const mysql = require("mysql2");
const pool = mysql.createPool({
  database: "todo_list",
  user: "root",
  password: "12345678",
  port: "3306",
  host: "localhost",
});

module.exports = pool.promise();
