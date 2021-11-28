let jwt = require('jsonwebtoken');

let jwtFunction = {}

jwtFunction.getToken = function(payload, secretKey){
    return new Promise((res,rej)=> {
        jwt.sign(payload, secretKey, {
                    expiresIn: 60
                }, function (err, token) {
            if (err) rej(err)
            res(token)
        })
    })
}
/*-----------------------------------------------------------*/
jwtFunction.verifyToken = function(token, secretKey) {
    return new Promise((res,rej)=>{
        jwt.verify(token, secretKey, function(err, decodedValue){
            if(err) rej(err)
            res(decodedValue)
        } )
    })
}
module.exports = exports = jwtFunction