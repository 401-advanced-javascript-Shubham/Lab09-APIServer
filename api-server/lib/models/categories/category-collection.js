'use strict';

const schema = require('./category-schema.js');

const MongoCollection =  require('../collection.js');


class CategoryCollection extends MongoCollection {}

module.exports = new CategoryCollection(schema);
