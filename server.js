const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))