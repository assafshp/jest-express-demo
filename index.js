const express = require('express');
const app = express();
let server1 = {}; 

app.get('/', (req, res) => {
    console.log('got');
    res.send('Hello World!');
});


app.get('/end', (req, res) => {
    console.log('server closed');
    res.send('closed');
    server.close(() => { console.log('Doh :('); });

});

server1 = app.listen(3003, () => {
    console.log('Example app listening on port port!');
});

// server1.run = () => {
//     server1.server = app.listen(3003, () => {
//         console.log('Example app listening on port port!');
//     });
// }

module.exports = {
    server: server1
}