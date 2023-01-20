const { User } = require('../db/models/user.model');
const debug = require('debug')('UserService')
class UserService{

    async findAll(){
        try {
            const data = await User.findAll();
            return data;
        } catch (error) {
            debug(error.message)
        }
    }

    async createUser(data){
        try {
            const user = await User.create(data)
            return user;
        } catch (error) {
            debug(error.message)
        }
    }

}


module.exports = UserService;