const mysql = require("mysql");
const dbConfig = require("../config/database");

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
});

connection.connect(error => {
    if (error) throw error;
    console.log("Connection to database successful.");
});

module.exports = connection;