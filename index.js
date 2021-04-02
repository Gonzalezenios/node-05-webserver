require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4500;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('Hola Mundo')
})

app.post('/', function (req, res) {
    res.send('Post del path /')
})

app.get('/usuario', function (req, res) {
    res.send('Usuario Enio')
})

app.listen(port, () => {
    console.log(`Server started - Port ${port}`);
});