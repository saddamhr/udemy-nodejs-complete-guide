const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
})

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello form Express!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Another middleware!');
    res.send('<h1>Hello form Express!</h1>');
    // next();
});

app.listen(3000);


// hey