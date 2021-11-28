let mysqlD = require('../mySqlConnection');
let queries = require('../queries/loginQuery');
let jwtHelper = require('../jwtHelper');
let config = require('../config.json');

/*-----------------------------------------------------------------------*/
exports.verifyLogin = async function (req, res, next) {
    let conn = await mysqlD.getDb();
    let reqObj = req.body;
    let queryResultObj = {};
    let resObj = {};
    let token = null;
    let payload = {}
    try {
        queryResultObj = await mysqlD.asyncQuery(conn, queries.verifyUsernameAndPassword, [reqObj.loginName, reqObj.password]);
        if (queryResultObj.length > 0) {
            payload.loginId = queryResultObj[0].loginId;
            payload.loginName = queryResultObj[0].loginName;
            token = await jwtHelper.getToken(payload, config.jwt.SECRET_KEY);
            resObj.status = 'success';
            resObj.message = 'login successfull!'
            resObj.token = token;
        } else {
            resObj.status = 'failed';
            resObj.message = 'Either username or password is incorrect'
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