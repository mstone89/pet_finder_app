const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name: {type: String, required: true},
    species: String,
    breed: String,
    age: {type: Number, min: 0},
    adopted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Pet', petSchema);
