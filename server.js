const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;

const app = express();


//controllers
const greetWithName = (req, res) => {
    const name = req.params.name;
    res.send(`Why hello there, ${name}!`);
};

const getFive = (req, res) => {
    const numbers = [1, 2, 3, 4, 5];
    res.json(numbers);
};

const getEvensUpToN = (req, res) => {
    const n = parseInt(req.params.n, 10);
    const evenNumbers = [];

    for (let i = 2; i <= n; i += 2) {
        evenNumbers.push(i);
    }

    res.json(evenNumbers);
};

const getNameLength = (req, res) => {
    const name = req.params.name;
    const length = name.length;

    res.json({ length });
};

//fruits

const getAll = (req, res) => {
    res.json(fruits.fruits);
};

const getFruitByName = (req, res) => {
    const requestedName = req.params.name.toLowerCase();
    const fruit = fruits.fruits.find(fruit => fruit.name.toLowerCase() === requestedName);
    res.json(fruit);
};

//routes

app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/greet/:name', greetWithName);

app.get('/five', getFive);

app.get('/evens/:n', getEvensUpToN);

app.get('/namelength/:name', getNameLength);

//fruits

app.get('/fruits', getAll);

app.get('/fruits/:name', getFruitByName);


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))