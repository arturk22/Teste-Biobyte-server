const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'ulsrtt6ly052salg',
    password: 'nc3gmhh0x2gweobo',
    database: 'gjv6f51hi9oy7npy' // Nome do banco de dados
});


// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '12345678',
//     database: 'bioByte' // Nome do banco de dados
// });

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;
