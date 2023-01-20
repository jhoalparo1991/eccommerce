require('dotenv').config();

const Config = {
    node_env : process.env.NODE_ENV,
    port : process.env.PORT || 5000,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    dbPort : process.env.DB_PORT,
    dbHost : process.env.DB_HOST,
    dbName : process.env.DB_NAME,
    dbDialect : process.env.DB_DIALECT,
}


module.exports = Config;