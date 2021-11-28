let mysqlD = require('../mySqlConnection');
let queries = require('../queries/productQuery');

/*-----------------------------------------------------------------------*/
exports.getProductList = async function (req, res, next) {
    let conn = await mysqlD.getDb()
    let queryResultObj = await mysqlD.asyncQuery(conn, queries.getProductList);
    res.send(queryResultObj)
};
/*-----------------------------------------------------------------------*/
exports.saveProduct = async function (req, res, next) {
    let conn = await mysqlD.getDb();
    let reqObj = req.body;
    let queryResultObj = {};
    let resObj = {};
    try {
        queryResultObj = await mysqlD.asyncQuery(conn, queries.saveProduct, [reqObj.name, reqObj.description, reqObj.status]);
        resObj.status = 'success';
        resObj.message = 'Product added successfully';
        res.send(resObj);
        next();
    } catch(err){
        console.log('ERROR',err)
        resObj.status = 'error';
        resObj.message = JSON.stringify(err);
        res.send(resObj);
        next();
    }
};
/*-----------------------------------------------------------------------*/
exports.deleteProduct = async function (req, res, next) {
    let conn = await mysqlD.getDb();
    let reqObj = req.body;
    let queryResultObj = {};
    let resObj = {};
    try {
        queryResultObj = await mysqlD.asyncQuery(conn, queries.deleteProduct, [reqObj.id]);
        if(queryResultObj.affectedRows !== 0){
            resObj.status = 'success';
            resObj.message = 'Product deleted successfully';
        } else {
            resObj.status = 'failed';
            resObj.message = 'Product doest not exists';
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
exports.updateProduct = async function (req, res, next) {
    let conn = await mysqlD.getDb();
    let reqObj = req.body;
    let queryResultObj = {};
    let resObj = {};
    try {
        queryResultObj = await mysqlD.asyncQuery(conn, queries.updateProduct, [reqObj.name, reqObj.description, reqObj.status, reqObj.id]);
        if (queryResultObj.affectedRows !== 0) {
            resObj.status = 'success';
            resObj.message = 'Product Updated successfully';
        } else {
            resObj.status = 'failed';
            resObj.message = 'Product doest not exists';
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