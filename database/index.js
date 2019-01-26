const mysql = require('mysql');

// klau mau coba di online
//const conn = mysql.createConnection({
    // host: 'db4free.net.',
    // user: 'yandre',
    // password: 'abcd1234',
    // database: 'popokpedia_abcd',
    // port: 3306

//klau mau coba di lokal
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'dle',
    password: 'abc12345',
    database: 'popokpedia',
    port: 3306

});

module.exports = conn;
