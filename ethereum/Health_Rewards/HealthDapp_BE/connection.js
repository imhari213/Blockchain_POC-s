var mysql = require('mysql');

var connection      =   mysql.createPool({
    host     : '192.168.99.100',
    user     : 'root',
    password : 'root',
    database : 'EHealth',
    connectionLimit : 10,
    debug    :  false
});


connection.getConnection(function(err) {
    if (err) throw err;
    else 
    console.log("success");
    connection.on('error', function(err) {      
        if(err) throw err;
        else
        console.log("connectioon on");
        return;     
  });
});

module.exports = connection;
