let config = require('./config.json')
let mysql = require('mysql')

let connection = {}
/*-----------------------------------------------------------------------*/
connection.getDb = function(){
    return new Promise((res,rej)=>{
        let conn = mysql.createConnection(config.database);
        conn.connect(function(err){
            if(err) {
                rej(err)
            }
            res(conn)

        })
    })
};
/*-----------------------------------------------------------------------*/
connection.asyncQuery = function(conn,query,values) {
    return new Promise((res,rej)=>{
        conn.query(query,values,function(err,rows){
            if (err) rej(err)
            res(rows)
        })
    })
}
/*-----------------------------------------------------------------------*/
module.exports = exports = connection;