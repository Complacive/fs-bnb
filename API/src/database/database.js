"use strict";

const mysql = require("mysql");

const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "11111111",
    database: "fs_bnb"
};

var connection = mysql.createConnection(config);
connection.connect(function (err) {
    if (err) console.log(err);
    console.log("Database Connected: " + config.host + ":" + config.port);
});

module.exports = connection;