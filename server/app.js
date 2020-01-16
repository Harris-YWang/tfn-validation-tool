var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
