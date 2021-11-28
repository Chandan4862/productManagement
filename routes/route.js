var express = require('express')

var router = express.Router();
var productHandler = require('../handlers/productsHandler');
var customerHandler = require('../handlers/customerHandler');
var loginHandler = require('../handlers/loginHandler');
let jwtHelper = require('../jwtHelper');
const SECRET_KEY = "secret#123";
/******************************************************************/
router.get('/', authenticateToken, productHandler.getProductList);
router.post('/saveProduct', authenticateToken, productHandler.saveProduct);
router.post('/deleteProduct', authenticateToken, productHandler.deleteProduct);
router.post('/updateProduct', authenticateToken, productHandler.updateProduct);
/******************************************************************/
router.post('/saveCustomer', customerHandler.saveCustomer);
/******************************************************************/
router.post('/login', loginHandler.verifyLogin);
/******************************************************************/
async function authenticateToken(req, res, next) {
    try {
        let token = req.headers['authorization'];
        if (token == null || token == undefined) res.sendStatus(401)
        console.log(token)
        let payload = await jwtHelper.verifyToken(token, SECRET_KEY);
        req.payload = payload;
        next();
    } catch (err) {
        res.sendStatus(401);
        next();
    }
}
module.exports = exports = router;