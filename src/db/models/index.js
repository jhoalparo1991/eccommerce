const { User,UserSchema } = require('./user.model');

const setupModel = (sequelize)=>{

    User.init(UserSchema,User.config(sequelize))

}

module.exports = setupModel;