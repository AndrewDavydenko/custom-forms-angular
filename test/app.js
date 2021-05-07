var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var fieldsRouter = require('./routes/fields');
var registrationRouter = require('./routes/registration');
const cors = require("cors");

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/fields', fieldsRouter);
app.use('/registration', registrationRouter);

module.exports = app;
