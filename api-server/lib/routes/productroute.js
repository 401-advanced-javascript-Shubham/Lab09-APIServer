'use strict';

const express = require('express');

const Product = require('./models/Products/product-collection.js');
const product = new Product();

const router = express.Router();

router.get('/product',getAllProduct);
router.get('/product/:id',getOneProduct);
router.delete('/product/:id',deleteProduct);
router.put('/product/:id',updateProduct);
router.post('/product/:id',createProduct);

//Route Handlers

function getAllProduct(req,res){
  product.get()
       .then(results => {
        let output = {
          count: results.length,
          results : results,
        }
        res.status(200).json(output);
       })
       .catch(next);
}

function getOneProduct(req,res){
  product.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}

function deleteProduct(req,res,next){
  product.delete(req.params.id)
    .then(deleteRecord => res.status(204).json(deleteRecord))
    .catch(next);
}

function updateProduct(req,res,next){
  category.put(req.params.id, request.body)
    .then(updateRecord => res.status(200).json(updateRecord[0]))
    .catch(next);
}


function createProduct(req,res,next){
  let record = req.body;
  product.create(record)
     .then(createRecord => {
       res.status(200).json(createRecord);
     })
      .catch(error => next(error));
}

module.exports = router;