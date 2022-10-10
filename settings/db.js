const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    socketPatch: '',
    port: 8888,
    user: 'root',
    password: '',
    database: 'cookbook'
})