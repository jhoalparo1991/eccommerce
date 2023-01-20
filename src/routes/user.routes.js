const { Router } = require('express');
const UserService = require('../service/user.service');
const debug = require('debug')('UserRoute')
const service = new UserService();

const router = Router();

router.get('/',async (req,res)=>{
    try {
        const data = await service.findAll();
        res.status(200).json({data})
    } catch (error) {
        debug(error.message)
    }
});

router.post('/',async(req,res,next)=>{
    try {
        const data = req.body;
        const user = await service.createUser(data)
        res.status(200).json({user})
    } catch (error) {
        next(error)
    }
});


module.exports = router;