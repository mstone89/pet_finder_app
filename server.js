const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;

const mongoURI = 'mongodb://localhost:27017/pet-finder-app';

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
);

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JSON
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index route working');
});
const petsController = require('./controllers/pets.js');
app.use('/pets', petsController);

app.listen(3000, () => {
    console.log('listening on port 3000....');
});
