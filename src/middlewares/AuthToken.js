
const jwt = require('jsonwebtoken');
const config  = require('../config/config');
module.exports = function(req,res,next) {
    if (req.path == '/getUser') {
        if(req.headers.authorization) {
            let token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, config.SECRET_TOKEN, function(error, decoded){
                if(error)return res.status(403).send({message:"acceso prohibido"})
                return res.send(decoded);
            })
        }else {
            return res.status(403).send({message:"no esta logueado"})
        };
    } else next()
    
    
}