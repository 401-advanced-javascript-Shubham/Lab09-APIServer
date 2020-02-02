'use strict';


//Third part dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const categoryRoutes = require('../lib/routes/categoryroute.js')
const productRoutes = require('../lib/routes/productroute.js')

const errorHandler = require('./505.js');
const notFoundHandler = require('./404.js');

const app = express();

app.use('/api/v1',categoryRoutes);
app.use('/api/v1',productRoutes);

//Third party global middleware
app.use(cors());
app.use(morgan('dev'));


//Our middleware
app.use(express.json());
app.use(timestamp);
app.use(logger);


// because these are defined last, they end up as catch-alls.
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the whole server and a separate method that can start the server
module.exports = {
  //exporting app for testing
  apiServer: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${PORT}`));
  }
};
