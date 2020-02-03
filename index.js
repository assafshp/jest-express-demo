const express = require('express');
const app = express();
let internalServer = {}; 


app.get('/', (req, res) => {
    console.log('got request');
    const customer = {
        firstName: 'Assaf',
        lastName: 'Sheep',
        phone: '052-6620568'
    };
    res.send(customer);
});

internalServer = app.listen(3003, () => {
    console.log('app listening on port port!');
});


module.exports = {
    server: internalServer
}