const debug = require("debug")("app");
require('dotenv').config()
const express = require("express");
const Config = require('./config/config');
const morgan = require('morgan');
// Initialization
const app = express();

// Setting
app.set('PORT',Config.port)

// Middlewares
app.use(morgan('dev'))

// Routes


module.exports = app;
