const express = require('express');
const router = express.Router();
const Pet = require('../models/pets.js');

router.get('/', (req, res) => {
  Pet.find({}, (err, foundPets) => {
    res.json(foundPets)
  })
});

router.delete('/:id', (req, res) => {
  Pet.findByIdAndRemove(req.params.id, (err, deletedPet) => {
    res.json(deletedPet);
  })
});

router.put('/:id', (req, res) => {
  Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, updatedPet) => {
    res.json(updatedPet);
  });
});
router.post('/', (req, res) => {
  console.log(req.body);

  Pet.create(req.body, (err, createdPet) => {
    res.json(createdPet);
  })
})
module.exports = router;
