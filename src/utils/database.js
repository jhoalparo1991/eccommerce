const debug = require('debug')('Sequelize')
const { Sequelize } = require("sequelize");
const Config = require("../config/config");
const setupModel = require('../db/models/');

const dialect = Config.dbDialect;
const user = Config.dbUser;
const password = Config.dbPassword;
const hostname = Config.dbHost;
const port = Config.dbPort;
const database = Config.dbName;

async function connection() {
  try {
    const DATABASE_URL = `${dialect}://${user}:${password}@${hostname}:${port}/${database}`;

    const sequelize = new Sequelize(DATABASE_URL,{
        dialect : dialect
    })

    await sequelize.authenticate()

    setupModel(sequelize);
    
    debug('Database connected succesfully')
  
} catch (error) {
    debug(error.message)
  }
}

connection();
