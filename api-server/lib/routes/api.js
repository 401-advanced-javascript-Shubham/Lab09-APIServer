'use strict';

const express = require('express');

const modelFinder =  require('../middleware/model-finder.js')

const router = express.Router();

router.param('model', modelFinder);

router.get('/:model',getAll);
router.get('/:model/:id',getOne);
router.delete('/:model/:id',deleteOne);
router.put('/:model/:id',update);
router.post('/:model',create);

function getAll(req,res){
    req.model.get()
       .then(results => {
        let output = {
          count: results.length,
          results : results,
        }
        res.status(200).json(output);
       })
       .catch((err) => { next(err);});
  }
  
  function getOne(req,res,next){
    req.model.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch((err) => { next(err);});
  }
  
  function deleteOne(req,res,next){
    req.model.delete(req.params.id)
    .then(deleteRecord => res.status(204).json(deleteRecord))
    .catch((err) => { next(err);});
  }
  
  function update(req,res,next){
    req.model.update(req.params.id, req.body)
    .then(updateRecord => res.status(200).json(updateRecord[0]))
    .catch((err) => { next(err);});
  }
  
  function create(req,res,next){
    let record = req.body;
    req.model.create(record)
       .then(createRecord => {
         res.status(200).json(createRecord);
       })
       .catch((err) => { next(err);});
  }

  module.exports =  router;
  