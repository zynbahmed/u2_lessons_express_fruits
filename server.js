const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;

const app = express();


//controllers
// const show = (req, res) => {
//     const fruit = fruits.getOne(req.params.name);
//     res.send(`Why hello there, ${fruit.name}`);
// };

const getFirstFive = (req, res) => {
    const firstFiveFruits = fruits.fruits.slice(0, 5).map(fruit => fruit.name);
    res.json(firstFiveFruits);
};

const getEvensUpToN = (req, res) => {
    const n = parseInt(req.params.n, 10);
    const evenFruits = fruits.fruits.filter((fruit, index) => index % 2 === 0 && index <= n);

    res.json(evenFruits);
};

//routes

app.get('/ping', (req, res) => {
    res.json('pong');
})

// app.get('/:name', show);

app.get('/five', getFirstFive);

app.get('/evens/:n', getEvensUpToN);


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))