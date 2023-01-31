const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'us-cdbr-east-06.cleardb.net',
//     user: 'b7efc2ce716366',
//     password: 'b970fd7c',
//     database: 'heroku_90dc31fc2144d80',
//     port: 3306,
// });


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'bioByte' // Nome do banco de dados
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;
