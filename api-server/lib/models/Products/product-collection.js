'use strict';

const schema = require('./product-schema.js');

const MongoCollection =  require('../collection.js');


class ProductCollection extends MongoCollection {}

module.exports = new ProductCollection(schema);