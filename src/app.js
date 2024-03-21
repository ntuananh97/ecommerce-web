const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan'); // logger when request comes in

const app = express();

// init middleware

app.use(morgan('dev')); // use in development
// app.use(morgan('combined')); // use in production

app.use(helmet()); // secure app by setting various HTTP headers
app.use(compression()); // reduce the size of the response body and increase the speed of a web app


// init db
require('./dbs/init.mongodb');

// init routes
app.get('/', (req, res, next) => { res.send('Hello, world!'); });

// handle errors

module.exports = app;