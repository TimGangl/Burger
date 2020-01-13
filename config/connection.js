// Connect Node to MySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "root",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID: " + connection.threadId);
});

// Export the connection.
module.exports = connection;