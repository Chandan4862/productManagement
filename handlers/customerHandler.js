let mysqlD = require('../mySqlConnection');
let queries = require('../queries/customerQuery');

/*-----------------------------------------------------------------------*/
exports.saveCustomer = async function (req, res, next) {
    let conn = await mysqlD.getDb();
    let reqObj = req.body;
    let queryResultObj = {};
    let resObj = {};
    try {
        queryResultObj = await mysqlD.asyncQuery(conn, queries.saveLogin, [reqObj.name, reqObj.password]);
        if (queryResultObj.affectedRows !== 0) {
            queryResultObj = await mysqlD.asyncQuery(conn, queries.saveCustomer, [reqObj.name, reqObj.mobile, queryResultObj.insertId]);
            resObj.status = 'success';
            resObj.message = 'Customer Registration successful';
        } else {
            resObj.status = 'failed';
            resObj.message = 'Customer Registration unsuccessful';
        }
        res.send(resObj);
        next();
    } catch (err) {
        console.log('ERROR', err)
        resObj.status = 'error';
        resObj.message = JSON.stringify(err);
        res.send(resObj);
        next();
    }
};
/*-----------------------------------------------------------------------*/