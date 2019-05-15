const express = require('express');
const app = express();


// MIDDLEWARE
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JSON
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index route working');
});

app.listen(3000, () => {
    console.log('listening on port 3000....')
});
