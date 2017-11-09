const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const consumer = require('./routes/consumer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/consume', consumer);

module.exports = app;
