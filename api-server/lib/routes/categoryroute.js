'use strict';

const express = require('express');

const Category =  require('./models/categories/category-collection.js');
const category =  new Category();

const router = express.Router();

router.get('/category',getAllCategory);
router.get('/category/:id',getOneCategory);
router.delete('/category/:id',deleteCategory);
router.put('/category/:id',updateCategory);
router.post('/category/:id',createCategory);

function getAllCategory(req,res){
    category.get()
       .then(results => {
        let output = {
          count: results.length,
          results : results,
        }
        res.status(200).json(output);
       })
       .catch(next);
  }
  
  function getOneCategory(req,res,next){
    category.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
  }
  
  function deleteCategory(req,res,next){
    category.delete(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(next);
  }
  
  function updateCategory(req,res,next){
    category.put(req.params.id, request.body)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
  }
  
  function createCategory(req,res,next){
    let record = req.body;
    category.create(record)
       .then(createRecord => {
         res.status(200).json(createRecord);
       })
        .catch(error => next(error));
  }

  module.exports =  router;
  