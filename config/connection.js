// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: process.env.PORT || 3306,
  user: "mnunbmmeqjus4o0k",
  password: "euzxyx2m43rxlmdg",
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
