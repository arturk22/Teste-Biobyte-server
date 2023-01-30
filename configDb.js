const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'us-cdbr-east-06.cleardb.net',
user: 'bf34b01d18e870',
password: '745a8de6',
database: 'heroku_9df52e1963f49ba',
multipleStatements: true,
reconnect: true
});

module.exports = connection;