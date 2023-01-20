const Config = require("../config/config");

const dialect = Config.dbDialect;
const user = Config.dbUser;
const password = Config.dbPassword;
const hostname = Config.dbHost;
const port = Config.dbPort;
const database = Config.dbName;

const DATABASE_URL = `${dialect}://${user}:${password}@${hostname}:${port}/${database}`;


module.exports = {
    development:{
        url: DATABASE_URL,
        dialect:dialect
    },
    production:{
        url: DATABASE_URL,
        dialect:dialect
    }
}