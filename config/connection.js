// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection(process.env.JAWSDB_URL, {
  host: process.env.DB_HOST,
  port: process.env.PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "ei74wycbme4eiz8c"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
