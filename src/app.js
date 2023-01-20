const debug = require("debug")("app");
require('dotenv').config()
const express = require("express");
const Config = require('./config/config');
const morgan = require('morgan');
const indexRoutes = require('./routes');

// Initialization
const app = express();
require('./utils/database');

// Setting
app.set('PORT',Config.port)

// Middlewares
app.use(morgan('dev'))

// Routes
app.use('/api/v1/',indexRoutes);


module.exports = app;
