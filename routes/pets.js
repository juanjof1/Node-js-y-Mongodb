const express = require('express');
const router = express.Router();

const Mongodb = require('../database/mongodbultils.js');
const objectId = require('monodb').objectId


const Pets = require('../modules/pet.js');



  router.get('/:id', function(req,res) {
      const id = req.params.id

      const pets = mongodb.getPetscollection();

      const pet = pets.find({_id: new ObjectId(id)}).toArray((err, result) => {
        if (err) {
          res.sendStatus(500);
        } else if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.json(result);
        }
      });
    });
  
      const page = req.query.page ?? 1;
      const limit = req.query.limit ?? 3;

      let pets = Mongodb.getPetscollection();

      pets.find().skip().limit( page * limit).toArray((err, result)=>{})
      if (err) {
          res.sendStatus(500);
      }else if (result.length === 0) {
          res.sendStatus(404);
      }else {
          res.json(result);
      }
      

     
  

  router.post('/', function(req,res){
   const name = req.body.name;
   const age = req.body.age;
   const species = req.body.species;
   const race = req.body.race;
   const picture = req.body.picture;
   const description = req.body.description;

   const pet = new Pet(name, age, species, race, picture, description);

   let pets = mongodb.getPetscollection();

   pets.insertOne(pet);
   res.sendStatus(200);
   res.redirect('/');
   
 
  });

  router.get('/:name', function(req,re){
      const name = req.params.name;

      const pet = pets.find( pet=> pet.name === name);
      res.json(pet);

      router.delete('/:name', function(req,res){
          const name = req.params.name;

          pets = pets.filter(pet => pet.name !== name);
          res.sendStatus(200);
      });
  })

  module.exports = router;