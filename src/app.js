const debug = require("debug")("app");
require('dotenv').config()
const express = require("express");
const Config = require('./config/config');
const morgan = require('morgan');
const indexRoutes = require('./routes');

// Initialization
const app = express();
require('./utils/database');
const { errorHandler,logErrors,validatorErrors } = require('./middlewares/error.handler')
// Setting
app.set('PORT',Config.port)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(errorHandler)
app.use(logErrors)
app.use(validatorErrors)

// Routes
app.use('/api/v1/',indexRoutes);


module.exports = app;
