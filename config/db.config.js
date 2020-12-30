'use strict';
const mysql = require('mysql2');
//local mysql db connection

const dbConn = mysql.createConnection({ 
  host: 'localhost',
  user:'gravity',
  password:'3652',
  database:'node_mysql_crud_db'
});
      
      dbConn.connect(function(err) {
        
        if (err) throw err;
        console.log("Database Connected!");
        
        });
        
        module.exports = dbConn;