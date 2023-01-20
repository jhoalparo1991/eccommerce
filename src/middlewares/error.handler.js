const debug = require('debug')('ErrorHandle')
const boom = require('@hapi/boom')
const { ValidationError } = require('sequelize')
const logErrors = (err,req,res,next)=>{
    debug('Error logs');
 
    if(err){
        next(err);
    }else{
        next();
    }
}

const errorHandler = (err, req, res, next) =>{
    debug(err.stack);
    res.status(401).json({message : err.message})
}

const validatorErrors = (err,req,res,next)=>{
    if(err instanceof ValidationError){
        return res.status(401).json({
            message: err.message
        })
    }
    next();
}

module.exports = {
    errorHandler,
    logErrors,
    validatorErrors
}